import { useRef } from "react";

const AddList = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Agrega un Producto</label>

      <input
        type="text"
        id="addItem"
        autoFocus
        ref={inputRef}
        placeholder="Agrega un Producto"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button
        type="submit"
        aria-label="Agrega el Producto"
        onClick={() => inputRef.current.focus()}
      >
        <h3>Agrega</h3>
      </button>
    </form>
  );
};

export default AddList;