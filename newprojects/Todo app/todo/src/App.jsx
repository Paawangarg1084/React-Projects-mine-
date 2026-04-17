import { useEffect, useState } from 'react'

import classes from "./style.module.css"


function App() {
  const [loading,setLoading] = useState(false);
  const [todoList , settodoList] = useState([]);
  const [errorMsg,setErrorMsg] = useState(null);

  async function fetchListtodo(){
    try{
      setLoading(true)
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();

      if(result?.todos && result?.todos?.length >0){
        settodoList([]);
        setLoading(false);
        setErrorMsg('')
      }
      


      console.log(result);
    }catch(e){
      console.log(e)
      setErrorMsg("Some error occured");
      
    }
    
  }

  useEffect(()=>{
    fetchListtodo();
  },[]);
  
  return (
    <>
      <div className={classes.mainWraper}>
        <h1 className={classes.headerTitle}>Simple todo app Using material UI</h1>
      </div>
    </>
  )
}

export default App
