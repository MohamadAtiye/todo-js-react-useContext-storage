import React from "react";
import { useToDoContext } from "../context/ToDoContext";

export default function ToDoList() {
  const { todo = [] } = useToDoContext();

  return (
    <ul
      style={{
        listStyle: "none",
        marginBottom: 0,
        overflowY: "scroll",
        flex: 1,
        padding: "20px",
      }}
    >
      {todo
        .sort((a, b) => (!a.isDone ? -1 : 1))
        .map((item, index) => (
          <TodoItem {...item} key={item.id} />
        ))}
    </ul>
  );
}

const TodoItem = (props) => {
  const { deleteTodo, toggleCheck } = useToDoContext();

  return (
    <li
      style={{
        height: "40px",
        background: `rgba(0,0,0,${props.isDone ? "0.3" : "0.6"})`,
        color: "white",
        borderRadius: "5px",
        marginBottom: "10px",
        padding: "5px",
        display: "flex",
        transition: "0.5s ease-in-out",
      }}
    >
      <span
        style={{
          flex: 1,
          fontSize: "16px",
          lineHeight: "30px",
          textDecoration: props.isDone ? "line-through" : "",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          marginRight: "5px",
        }}
        title={props.text}
      >
        {props.text}
      </span>
      <button
        onClick={() => toggleCheck(props.id)}
        style={{
          width: "40px",
          lineHeight: "16px",
          color: props.isDone ? "green" : "white",
          background: props.isDone ? "white" : "green",
        }}
      >
        &#10004;
      </button>
      <button
        onClick={() => deleteTodo(props.id)}
        style={{ width: "40px", color: "white", background: "red" }}
      >
        X
      </button>
    </li>
  );
};
