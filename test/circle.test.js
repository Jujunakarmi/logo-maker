const Circle = require('../lib/circle.js')

describe('Circle', () => {
    it('should return logo with user choice of text, shapeColor, textColor', () => {
        const circle = new Circle('ABC','blue','white');
        expect(circle.render()).toEqual( `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="blue" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>
  
  </svg>`
        );
    });
});