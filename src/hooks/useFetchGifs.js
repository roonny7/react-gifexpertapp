import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data : [],
        loading : true
    });

    useEffect( () => { //esta madre hace que sólo se ejecute una vez
       getGifs( category)
       .then ( imgs => {
            setState({
                    data : imgs,
                    loading : false
                   });
       })
    }, [category])

    

    return state; // {data : [], loading : tru}
}