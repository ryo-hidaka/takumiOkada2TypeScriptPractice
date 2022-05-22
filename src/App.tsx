import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { TodoType } from "./types/todo";
import "./styles.css";
import { User } from "./types/user";

const user: User = {
  name: "ryo",
  hobbies: ["aaa", "bbb"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onCilckFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />

      <Text color={"red"} fontSize={"18px"} />

      <button onClick={onCilckFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
