import TodoList from "./component/TodoList";
import Form from "./component/Form";
import { useState } from "react";
import "./index.css";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  // add todo item function
  const listItem = (addItems) => {
    if (addItems !== "") {
      setTodoList([...todoList, addItems]);
    } else {
      alert("your input file is emty !");
    }
  };
  // delete item function
  const deleteItem = (key) => {
    let newTodoList = [...todoList];
    newTodoList.splice(key, 1);
    setTodoList([...newTodoList]);
  };

  return (
    <>
      <Form addList={listItem} />
      <hr className="border-slate-400" />
      <ul className="ul-wrapper">
        {todoList.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteItem}
            />
          );
        })}
      </ul>
    </>
  );
}
