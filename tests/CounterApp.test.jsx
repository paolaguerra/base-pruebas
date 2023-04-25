import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en el <CounterApp />', () => { 

    test('debe de hacer match con el snapshot', () => { 

        const {container} = render( <CounterApp value={20} /> )
        expect(container).toMatchSnapshot();

     });

     test('debe de mostrar el valor inicial de 100', () => { 

        render( <CounterApp value={100} /> );
        expect( screen.getByText(100) ).toBeTruthy();

      });

 });