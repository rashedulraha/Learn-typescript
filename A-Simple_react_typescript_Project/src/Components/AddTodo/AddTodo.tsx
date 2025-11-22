import { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="button" value="add" />
      </form>
    </div>
  );
};

export default AddTodo;
