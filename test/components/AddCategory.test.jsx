import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } })

        expect(input.value).toBe('Saitama');
        //screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        expect(input.value).toBe('');
        //screen.debug();

        expect(onNewCategory).toHaveBeenCalled(); // Que se halla llamado
        expect(onNewCategory).toHaveBeenCalledTimes(1); // X veces
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); // Con X valor


    });

    test('No debe de llamar el onNewCategory si el input está vacío', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');
        //Como no tiene ningun input, no hay que simular ese evento
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

        // Aquí probamos QUE NO SE HAYA LLAMADO SI EL VALOR ESTÁ VACÍO

    })


})