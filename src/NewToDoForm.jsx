import { useState } from "react";
import { BsPencilFill } from "react-icons/bs";

const NewToDoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item"></label>
        <input
          value={newItem}
          placeholder="add a task"
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
        <button type="submit">
          <BsPencilFill />
        </button>
      </div>
    </form>
  );
};
export default NewToDoForm;
