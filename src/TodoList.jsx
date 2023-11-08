import TodoItem from "./TodoItem";

const TodoList = ({ toDos, toggleToDo, deleteToDo }) => {
    
  return (
    <ul className="list">
      {toDos.length === 0 && "No Todos"}
      {toDos.map((toDo, index) => {
        return (
          <TodoItem key={index} toDo={toDo} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
        );
      })}
    </ul>
  );
};
export default TodoList;
