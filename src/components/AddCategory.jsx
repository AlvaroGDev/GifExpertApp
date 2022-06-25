import { useState } from "react"


export default function AddCategory() {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (e) => {

        setInputValue(e.target.value);
        console.log(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    }

    return (
        <>

            <form onSubmit={(event) => onSubmit(event)}>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={onInputChange} />
            </form>

        </>
    )
}
