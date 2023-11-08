import { useEffect, useState } from "react";
import "./styles.css";
import NewToDoForm from "./NewToDoForm";
import TodoList from "./TodoList";
import Completed from "./Completed";

const App = () => {
  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDos));
  }, [toDos]);

  function addTodo(title) {
    setToDos((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleToDo(id, completed) {
    setToDos((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteToDo(id) {
    setToDos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <h1 className="header">To Do List</h1>
      <TodoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
      <Completed
        toDos={toDos}
        toggleToDo={toggleToDo}
        deleteToDo={deleteToDo}
      />
      <NewToDoForm addTodo={addTodo} />
      <footer>
        <h4>
          Made by{" "}
          <span>
            <a href="https://github.com/Felivander">@felivander</a>
          </span>
        </h4>
        <h4>
          Code on{" "}
          <a
            id="github"
            href="https://github.com/Felivander/lorem-ipsum-generator"
          >
            Github
          </a>
        </h4>
      </footer>
    </>
  );
};
export default App;
