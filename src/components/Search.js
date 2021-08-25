import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'

export default function Search() {

    const [search, setSearch] = useState()
    const [results, setResults] = useState({Response: false})

    function handleChange(event){
        setSearch(event.target.value)
    }

   console.log(useFetch(search))
    
        
    


    return (
        <div>
            <label>Serch box: </label>
            <input type="text" onChange={handleChange}></input>
            <p>{search}</p>
     
        </div>
    )
}

function MovieCard(){
    return <div>
        <h1></h1>
    </div>
}