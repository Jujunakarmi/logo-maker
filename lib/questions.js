const colorKeys = require('../lib/colorKeys')

const inquirer = require('inquirer')
const questions = [
    {
        name: 'text',
        message: 'What character would you like in your logo?(Three or less than three characters required)',
        type: 'input',
        //Compulsory to type 3 or less character
        validate: inputChar => {
            if (inputChar.length > 3 || !inputChar) {
                return ('Three or less than three characters only')
            }
            return true

        }
    },
    {

        name: 'textColorChoice',
        message: 'Please choose a format for the text color.',
        type: 'list',
        choices: ['Color keyword', 'Hexadecimal number']

    },
    {

        name: 'textColor',
        message: 'Enter a which color would you like?(In Keyword)',
        type: 'input',
        when: (answer) => {
            if (answer.textColorChoice === 'Color keyword') {
                return true

            } else
                return false
        },
        //Validate to see if the answer is in the colorkey
        validate: (answer) => {
            let answerLower = answer.toLowerCase()
            for (var i = 0, len = colorKeys.length; i < len; ++i) {
                if (answerLower.indexOf(colorKeys[i]) != -1) {
                    return true
                }
            }
            return ('Please enter a valid color keyword')
        }
    },
    {
        name: 'textColorHex',
        message: 'Enter a which color would you like?(In Hexadecimal number #CCCCCC)',
        type: 'input',
        when: (answer) => {
            if (answer.textColorChoice === 'Hexadecimal number') {
                return true
            }
            return false
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },
    {
        name: 'shape',
        message: 'What shape would you like for your logo',
        type: 'list',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        name: 'shapeColor',
        message: 'What shape color would you like for your logo?',
        type: 'input',
        when: (answer) => {
            if (answer.textColorChoice === 'Color keyword') {
                return true

            } else
                return false
        },
        //Validate to see if the answer is in the colorkey
        validate: (answer) => {
            let answerLower = answer.toLowerCase()
            for (var i = 0, len = colorKeys.length; i < len; ++i) {
                if (answerLower.indexOf(colorKeys[i]) != -1) {
                    return true
                }
            }
            return ('Please enter a valid color keyword')
        }
    },
]

inquirer.prompt(questions)
