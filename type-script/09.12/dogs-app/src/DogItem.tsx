import {Dog} from "./App";

interface DogItemProp {
    dog:Dog,
    handleDelete:(id:string)=>void
}

export default function DogItem({dog,handleDelete}:DogItemProp) {
   return <li>
        <span>{dog.name}</span>
        <button onClick={()=>handleDelete(dog.id)}>Delete</button>
      </li>
    
}