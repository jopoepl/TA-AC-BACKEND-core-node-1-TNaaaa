

function areaOfSquare(side){
    return side * side
}

function areaOfRect(l, b){
    return l * b
}

function areaOfCircle(radius){
    return Math.PI * radius * radius
}

module.exports = {
    areaSquare: areaOfSquare,
    areaRect: areaOfRect,
    areaCircle: areaOfCircle,
}
