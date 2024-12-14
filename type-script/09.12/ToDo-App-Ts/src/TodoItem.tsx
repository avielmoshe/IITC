import {Todo} from "./App";

interface TodoItemProp {
    todo:Todo,
    handleDelete:(id:string)=>void
    handleCompleted:(id:string)=>void
}

export default function TodoItem({todo,handleCompleted,handleDelete}:TodoItemProp) {
   return <li
    className="grid grid-cols-4 gap-4 items-center mb-4 border-b pb-2 m-11"
  >
    <span className="col-span-1 font-semibold">Task: {todo.text}</span>
    {todo.description?<span className="col-span-2 text-gray-600">Description: {todo.description}</span >:<span className="col-span-2"></span>}
    <input
      type="checkbox"
      checked={todo.completed}
      onClick={() => handleCompleted(todo.id)}
      readOnly
      className="h-5 w-5"
    />
    <button
      onClick={() => handleDelete(todo.id)}
      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
    >
      Delete Task
    </button>
  </li>
}  