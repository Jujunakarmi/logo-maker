const Circle = require('./circle')
const Traingle = require('./triangle')
const Square = require('./square')

function setshape(response) {

    if (response.shape === 'Circle') {
        let userShape = new Circle(response.text, response.shapeColor, response.textColor)
        return userShape.render()
    }

    if(response.shape === 'Traingle'){
        let userShape= new Traingle ( response.text, response.shapeColor, response.textColor)
        return userShape.render()
    }

    if(response.shape ==='Square'){
        let userShape = new Square(response.text, response.shapeColor, response.textColor)
        return userShape.render()
    }

};

module.exports = setshape;