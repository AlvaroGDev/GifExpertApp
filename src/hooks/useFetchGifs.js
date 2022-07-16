import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]); //esto le dice que images es un array
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category); //Recibe el array de gifs
        setImages(newImages); //Lo mete al hook, y con el effect se actualiza
        setIsLoading(false); //Cuando ya tiene las imagenes, pone el loading en false
    }
    //Como no se puede hacer un async en el hook, lo sacamos a una funcion fuera

    useEffect(() => {
        getImages();
    }, [])

    return {
        images: images, //Se podria dejar unicamente la palabra "images" si tienen el mismo nombre de propiedad y asignacion
        isLoading: isLoading
    }
}
