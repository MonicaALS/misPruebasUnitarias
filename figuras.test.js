const figuras = require('./figuras');

test("Revisar si es triangulo", () => {
    expect(figuras(3)).toBe("triangulo")
})

test("Revisar si es cuadrado", () => {
    expect(figuras(4)).toBe("cuadrado")
})

test("Revisar si es pentagono", () => {
    expect(figuras(5)).toBe("pentagono")
})

test("Revisar si es hexagono", () => {
    expect(figuras(6)).toBe("hexagono")
})

test("Revisar si es poligono", () => {
    expect(figuras(8)).toBe("poligono")
})