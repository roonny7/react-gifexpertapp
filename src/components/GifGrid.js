//import React, { useState, useEffect, Fragment } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

//api.giphy.com/v1/gifs/search?q=saint seiya&limit=10&api_key=d9RtJVFrRBRrYveOzMej9Mufhm3nTyH3
export const GifGrid = ({category}) => {
    //const [count, setCount] = useState(0);
    
    /*const [images, setImages] = useState([]);
    
    
    
    useEffect( () => { //esta madre hace que sólo se ejecute una vez
        getGifs( category ).then ( setImages )
    }, [category])
*/

    const {data:images, loading} = useFetchGifs(category);
    
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p>Cargando {category} </p>}
        { 
            <div className="card-grid">
                {
                        images.map(img  => (
                            <GifGridItem key ={img.id}
                            {...img}/>
                        ))
                }               
            </div> 
        }
        </>
    )
}
//  <h2>{ count } </h2> <button onClick={ () => setCount(count+1)}></button>
