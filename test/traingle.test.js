const Triangle = require('../lib/triangle.js')

describe('Traingle', () => {
    it('should return logo with user choice of text, shapeColor, textColor', () => {
        const traingle = new Triangle('ABC', 'blue', 'white');
        expect(traingle.render()).toEqual(`
        <svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="blue"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="white">ABC</text>
        </svg>
        `
        );
    });
});