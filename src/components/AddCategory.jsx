import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {

        setInputValue(e.target.value); //Cada vez que pulsamos una tecla, salta el onChange, haciendo saltar esta funcion que es el hook, y asi actualiza el valor del input
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return; //Si es menor o igual que 1, salimos

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <>

            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={onInputChange} />
            </form>

        </>
    )
}
