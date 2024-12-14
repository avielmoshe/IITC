import { useEffect, useState } from "react";
import generateRandomId from "./utils/makeId.ts";
import TodoItem from "./TodoItem.tsx";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  description?: string;
}

const TODOS = [
  { id: "1", text: "luna", completed: false, description: "The moon in Latin." },
  { id: "2", text: "sol", completed: false, description: "The sun in Latin." },
  { id: "3", text: "terra", completed: false, description: "The earth in Latin." },
  { id: "4", text: "stella", completed: false, description: "A star in Latin." },
  { id: "5", text: "nova", completed: true, description: "A new star in Latin." }
];

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all"|"completed"|"active">("all");
  const [formData, setFormData] = useState<Todo>({
    id: generateRandomId(),
    text: "",
    completed: false,
    description: undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAdd();
    setFormData({
      id: "",
      text: "",
      completed: false,
      description: "",
    });
  };

  useEffect(() => {
    setTodos(TODOS);
  }, []);

  function handleAdd() {
    setTodos((prev) => [...prev, formData]);
  }

  function handleCompleted(id: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDelete(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

const filteredTodos=todos.filter((todo)=>{
  if(filter==="active")return !todo.completed
  if(filter==="completed")return todo.completed
  return true
})

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-primary mb-5">TODO APP</h1>
        <h2 className="text-xl font-semibold mb-4">Add new task</h2>

        <form
          className="bg-white p-6 rounded-lg shadow-lg w-80 space-y-4"
          onSubmit={handleFormSubmit}
        >
          <input
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Task name"
            value={formData.text}
            type="text"
            id="text"
            name="text"
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Description"
            value={formData.description}
            type="text"
            id="description"
            name="description"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add New Task
          </button>
        </form>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Tasks</h2>
        <h2>filter your tasks</h2>
        <div className="flex flex-col gap-4">
          <button onClick={()=>setFilter("all")}className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">All the tasks</button>
          <button onClick={()=>setFilter("active")} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Active Tasks</button>
          <button onClick={()=>setFilter("completed")} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Completed Tasks</button>
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete all the Completed Tasks</button>
        </div>
        <ul className="w-full max-w-3xl space-y-4">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
