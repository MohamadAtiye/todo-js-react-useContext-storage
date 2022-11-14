import React, { useRef } from "react";
import { useToDoContext } from "../context/ToDoContext";

export default function ToDoHead() {
  const { addTodo } = useToDoContext();

  const input = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const text = (input.current?.value ?? "").trim();
    if (!text.length) return;

    addTodo(text);
    input.current.value = "";
    input.current.focus();
  };

  return (
    <form
      style={{
        width: "100%",
        height: "70px",
        padding: "10px",
        display: "flex",
        background: "rgba(0,0,0,0.6)",
        borderRadius: "5px",
      }}
      onSubmit={onSubmit}
    >
      <input
        ref={input}
        style={{
          flex: 1,
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
          padding: "0 20px",
          fontSize: "18px",
          minWidth: 0,
        }}
        required
        maxLength={50}
      />
      <button
        type="submit"
        style={{
          width: "50px",
          fontSize: "14px",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
          lineHeight: "14px",
        }}
      >
        Add
      </button>
    </form>
  );
}
