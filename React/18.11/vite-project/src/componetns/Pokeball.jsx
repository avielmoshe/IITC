import axios from "axios";
import { useState,useEffect } from 'react'


const Pokeball =()=>{
    const [pokeballData,setPokeballData]=useState([])
    const fetchData = async ()=>{
        try {
            const {data:{results}} =await axios.get('https://pokeapi.co/api/v2/pokemon/')
            setPokeballData(results)
            console.log(results);
            
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
return(
    <div>
<ul>
    {
        pokeballData.map((pokemon,i)=>{
            return <li key={`idIs${i}`}>
                {pokemon.name}
            </li>
        })
    }
</ul>
    </div>
)
}

export default Pokeball