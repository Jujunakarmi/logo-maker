//importing required files

const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions.js');
const setshape = require ('./lib/setshape.js')
const fileName = "./examples/logo.svg"

// function to create new svg file using inquirer response and file system

function createLogo(response){
    const svg = setshape (response)
    fs.writeFile(fileName, svg, () => console.log ('Generated logo,svg'))
}

// initialize, ask questions then createLogo using responses, catch any errors

function init(){
    inquirer.prompt(questions)
    .then((response) => {
        createLogo(response)
    })
    .catch((err) => {
        console.log(err)
    })
}

init();
