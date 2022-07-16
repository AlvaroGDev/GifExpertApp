import { GifItem } from './GifItem.jsx';
import { useFetchGifs } from '../hooks/useFetchGifs.js';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2> Cargando...</h2>)
                /* AND lógico. Si isLoading es true, ejecuta la segunda parte */

            }


            <div className='card-grid'>
                {
                    images.map((image) => //Se desestructura, del {img} sacas directamente el id y el titulo
                    (
                        <GifItem
                            key={image.id}
                            {...image}
                        /* Se llama ESPARCIR. Sirve para enviar muchas propiedades. Las manda con su mismo nombre -> image={image} */

                        />

                    ))
                }

            </div>
        </>
    )
}
