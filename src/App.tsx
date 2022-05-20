import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState<any>([]);
  const onCilckFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onCilckFetchData}>データ取得</button>
      {todos.map((todo) => {
        return <Todo title={todo.title} userid={todo.userId} />;
      })}
    </div>
  );
}
