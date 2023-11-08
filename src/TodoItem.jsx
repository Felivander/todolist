import { RxCross1 } from "react-icons/rx";

const TodoItem = ({ toDo, toggleToDo, deleteToDo }) => {
  const { id, title, completed } = toDo;

  return (
    <>
      {!completed && (
        <li key={id}>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => toggleToDo(id, e.target.checked)}
            />
            {title}
          </label>
          <RxCross1 onClick={() => deleteToDo(id)} className="cross"></RxCross1>
        </li>
      )}
    </>
  );
};
export default TodoItem;
