const calificaciones = require('./calificaciones');

test('Calificar aprobado', () => {
    expect(calificaciones(8)).toBe("Aprobado");
})
test('Calificar Reprobado', () => {
    expect(calificaciones(4)).toBe("Reprobado");
})
test('Calificar Reprobado debe fallar', () => {
    expect(calificaciones(8)).not.toBe("Reprobado");
})