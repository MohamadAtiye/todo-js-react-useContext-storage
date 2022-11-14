import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "todoItems";

//intial context item. no needed outside
export const ToDoContext = createContext({});

//import this to use values
export const useToDoContext = () => useContext(ToDoContext);

//import this around the whole app
export const ToDoProvider = (props) => {
  //initialize to loca storage data
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  );

  //set storage date on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todo));
  }, [todo]);

  const addTodo = (text) => {
    setTodo((prev) => [
      ...prev,
      { id: uuidv4(), text, ts: Date.now(), isDone: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCheck = (id) => {
    setTodo((prev) =>
      prev.map((item) => ({
        ...item,
        isDone: item.id === id ? !item.isDone : item.isDone,
      }))
    );
  };

  return (
    <ToDoContext.Provider value={{ todo, addTodo, deleteTodo, toggleCheck }}>
      {props.children}
    </ToDoContext.Provider>
  );
};
