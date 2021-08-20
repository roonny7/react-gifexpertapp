import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    //const categories = ['one punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch']);
    /*const handleAdd = () => { AGREGAR una categoría al hacer clic al botón
        //setCategories(categories.push('Saint Seiya'));
        //setCategories([...categories, 'Saint Seiya']);
        setCategories(cats => [...cats, 'Saint Seiya']);
        
    } */   
    return (
        <>
          <h2>Gif Expert App</h2>
          <AddCategory setCategories= { setCategories}/>
          <hr/>  
          
          <ol>
              { 
              categories.map( category => (
                 <GifGrid 
                    key = {category}
                    category={category}
                />
              ))
              }
          </ol>
        </>
    )
}

export default GifExpertApp
