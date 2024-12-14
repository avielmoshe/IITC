import { HTMLInputTypeAttribute, useEffect, useRef, useState } from "react"
import DogItem from "./DogItem"
const DOGS=[
  {id:"1",name:"luna"},
  {id:"2",name:"bark"},
  {id:"3",name:"hom"},
]

export interface Dog {
  id:string,
  name:string
}

export default function App () {
  const [dogs,setDogs]=useState<Dog[]>([])
  const inputRef=useRef<HTMLInputElement>(null)

  useEffect(()=>{
    setDogs(DOGS)
  },[])

  function handleDelete(id:string) {
    setDogs((prev)=>prev.filter((dog)=>{
      return dog.id!==id
    }))
  }

  function handleAdd() {
    if(!inputRef.current) return
    const newDogName=inputRef.current.value
    setDogs((prev)=>[...prev,{id:newDogName,name:newDogName}])
  }

  function log(ev:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if(ev.ctrlKey){
      alert("you click on Ctrl")
    }
  }

return <div>
  <div>
  <input type="text" ref={inputRef}/>
  <button onClick={handleAdd}>Add</button>
  </div>
  <ul>
    {dogs.map((dog)=>{ 
      return <DogItem key={dog.id} dog={dog} handleDelete={handleDelete}/>
  })}
  </ul>
  <button onClick={log}>Log</button>
</div>
}