const Square = require('../lib/square.js')

describe('Square', () => {
    it('should return logo with user choice of text, shapeColor, textColor', () => {
        const square = new Square('ABC','blue','white');
        expect(square.render()).toEqual( `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="blue"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">ABC</text>
        </svg>
        `
        );
    });
});