import React from "react";
import { ToDoProvider } from "../context/ToDoContext";
import ToDoHead from "./ToDoHead";
import ToDoList from "./ToDoList";
import Colors from "../assets/Colors";

export default function ToDoApp() {
  return (
    <ToDoProvider>
      <div
        style={{
          width: "min(400px,80vw)",
          height:"min(600px,80vh)",
          background: `rgba(${Colors.Waterspout},0.7`,
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <ToDoHead />
        <ToDoList />
      </div>
    </ToDoProvider>
  );
}
