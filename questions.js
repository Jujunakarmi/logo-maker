const inquirer = require ('inquirer')


const questions = [
    {
        name: 'inputChar',
        message: 'What character would you like in your logo?(Three characters max)',
        type: 'input'
    },
    {
       
        name: 'shapeColor',
        message: 'What color would you like in your logo?',
        type: 'choices',
        choices:['Color keyword','Hexadecimal Number' ]
    },
    {
        name: 'shape',
        message: 'What shape would you like for your logo?',
        type: 'choices',
        choices:['Circle','Triangle','Square']
    },

     //How to get to the color chooser?
     {
        name: 'colorKey',
        message: 'What is your color keyword?',
        type: 'input'
         
    },
    {
        name: 'colorHex',
        message: 'Please enter hexadecimal number for color?',
        type: 'input'
         
    },
]
