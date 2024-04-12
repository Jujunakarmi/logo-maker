const Shape = require("./shape")

class Square extends Shape{
    constructor(color){
        super(color)
    }
    render(){
        return `<rect x="25" y="25" width="250" height="250" fill="${this.color}" stroke-width="4" stroke="${this.color}" />`
    }
}

module.exports= Square