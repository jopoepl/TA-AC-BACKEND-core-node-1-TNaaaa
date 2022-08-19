let math = require("./area")

console.log(math)

let squareArea = math.areaSquare(10)
let rectArea = math.areaRect(10, 20)
let circleArea = math.areaCircle(5)

console.log(squareArea, circleArea, rectArea)