import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, test } from "vitest";


beforeEach(() => {
    cleanup()
})
describe("aca probamreso en comprotameinto", () => {  
    
    test('mirar el foruakrio', () => {
        // render(<Soto></Soto>)   
        let encontrar =  screen.getByText(/formulario/i)      
        expect(encontrar).toBe('DIV')

    })
})