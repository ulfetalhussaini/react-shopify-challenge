import { useEffect, useState } from "react"

import { QUERY_BY_TITLE } from "../api"

const useFetch = (title= "titanic") => {

    const [data, setData] = useState({
        data: {},
        isLoding: true
    })
    
    useEffect(()=>{
        fetch(QUERY_BY_TITLE(title))
            .then((res)=> res.json())
            .then((data)=>{
                setData({data: data, isLoding: false})
            })
    },[])

    return data

}

export default useFetch