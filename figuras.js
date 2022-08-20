const nombreFigura = (lados) => {
    if(lados == 3){
        return "triangulo"
    } else if(lados == 4){
        return "cuadrado"
    } else if(lados == 5){
        return "pentagono"
    } else if(lados == 6){
        return "hexagono"
    } else{
        return "poligono"
    }
}

module.exports = nombreFigura;