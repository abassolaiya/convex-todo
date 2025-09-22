import { useQuery, useMutation } from "convex/react";
import { api } from "./convex/_generated/api";
import { useState } from "react";

export default function App() {
  const todos = useQuery(api.todos.list) ?? [];
  const addTodo = useMutation(api.todos.add);
  const toggleTodo = useMutation(api.todos.toggle);

  const [text, setText] = useState("");

  const handleAdd = async () => {
    if (text.trim() === "") return;
    await addTodo(text);
    setText("");
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h1>✅ Convex Todo App</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New todo..."
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((t) => (
          <li
            key={t._id}
            style={{
              textDecoration: t.done ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => toggleTodo(t._id)}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
