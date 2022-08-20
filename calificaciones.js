const calificado = (calificacion) => {
    if (calificacion <6){
        return "Reprobado"
    } else {
        return "Aprobado"
    }
}

module.exports = calificado;
