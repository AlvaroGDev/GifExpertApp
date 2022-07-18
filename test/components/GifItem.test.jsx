import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {


    const title = "Saitama";
    const url = "https://one-punsh.com/saitama.jpg";

    test('Debe de hacer match con el snapshot ', () => {



        //Los sacamos para pasarlos más facilmente


        const { container } = render(<GifItem title={title} url={url} />); //Igualmente, sacamos el contenedor que tiene un snapshot del componente entero
        expect(container).toMatchSnapshot(); // Y lo comparamos a otro snapshot que se hace en ese momento
    });


    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={title} url={url} />);
        //screen.debug(); <- Esto pinta en la consola el html, para recordarlo
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe mostrar el titulo en el componente', () => {

        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy;
    })



});