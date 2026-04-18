import { useEffect, useState } from "react";
import classes from "./style.module.css";
import TodoItem from "./components/todo-items";

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchListtodo() {
    try {
      setLoading(true);

      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();

      if (result?.todos && result.todos.length > 0) {
        setTodoList(result.todos);   // ✅ FIX 1 (store data)
        setLoading(false);
        setErrorMsg("");
      }
    } catch (e) {
      console.log(e);
      setErrorMsg("Some error occured");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListtodo();
  }, []);

  return (
    <div className={classes.mainWraper}>
      <h1 className={classes.headerTitle}>
        Simple todo app Using material UI
      </h1>

      {loading && <p>Loading...</p>}
      {errorMsg && <p>{errorMsg}</p>}

      <div>
        {todoList.length > 0 &&
          todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} /> 
          ))}
      </div>
    </div>
  );
}

export default App;