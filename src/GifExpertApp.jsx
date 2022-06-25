import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']); //Asi siempre será un array

    const onAddCategory = () => {

        setCategories(['Valorant', ...categories])

        //setCategories(cat => [...cat, 'Valorant']);



    }


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory />
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>


        </>
    )
}
