import { RxCross1 } from "react-icons/rx";

const Completed = ({ toDos, toggleToDo, deleteToDo }) => {
  const completedTask = toDos.filter((todo) => todo.completed);

  return (
    <>
      {toDos.find((todo) => todo.completed) && (
        <h1 className="header-completed">Completed <span id="number">{completedTask.length}</span></h1>
      )}

      <ul className="list completed">
        {toDos
          .filter((todo) => todo.completed)
          .map((todo) => {
            const { id, title, completed } = todo;
            return (
              <li key={id}>
                <label>
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => toggleToDo(id, e.target.checked)}
                  />
                  {title}
                </label>
                <RxCross1
                  onClick={() => deleteToDo(id)}
                  className="cross"
                ></RxCross1>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default Completed;
