import { getGifs } from "../../src/helpers/getGifs"

describe('pruebas en getgifs()', () => {
    test('Debe retornar un arreglo de gifs', async () => {

        const gifs = await getGifs('One Punch');
        //console.log(gifs);    
        expect(gifs.length).toBeGreaterThan(0);
        //Como los gifs pueden cambiar, no se puede comprobar por sus datos. Lo que hacemos es comprobar que vienen gifs.
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
        //No nos importa que venga (y puede cambiar), pero queremos esa estructura
    })
})