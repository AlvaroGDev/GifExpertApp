import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']); //Asi siempre será un array

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return; //Si esta ya la categoria, sale de la funcion

        setCategories([newCategory, ...categories]) //En caso de que no esté, lo añade, junto con las categorias que ya están

        //setCategories(cat => [...cat, 'Valorant']);



    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)} />



            {
                categories.map((category) => ( //Un fragmento no puede tener el key
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }



        </>
    )
}
