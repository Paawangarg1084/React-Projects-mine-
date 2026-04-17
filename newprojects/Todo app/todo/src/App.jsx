import { use, useEffect, useState } from 'react'


function App() {
  const [loading,setLoading] = useState(false);
  const [todoList , settodoList] = useState([]);
  const [errorMsg,setErrorMsg] = useState(null);

  async function fetchListtodo(){
    try{
      setLoading(true)
      const apiResponse = await fetch('htpps://dummyjson.com/todos');
      const result = await apiResponse.json();

      console.log(result);


    }catch(e){
      console.log("Some error occured");
      
    }
    
  }

  useEffect(()=>{
    fetchListtodo();
  })
  
  return (
    <>
      <div>
        <h1>Simple todo app Using material UI</h1>
      </div>
    </>
  )
}

export default App
