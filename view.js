const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');
var inquirer = require('inquirer');

function viewapp(d){
    const testCases = [
        { "leftValue": d[0], "leftUnit": d[1], "rightValue": d[2],"rightUnit": d[3]},
    ];
  
    printTable(testCases);
    return (d);
}


function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}


function chooses(a){
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'yes_or_no',
            message: 'Left temperature is source?',
            default: false,
      
        },
        {
            name: 'temperature',
            type: 'input',
            message: "Temperature value to convert?  :",
            default: "",
        },

        {
            type: 'rawlist',
            name: 'froooom',
            message: 'From',
            choices: ['Celsius', 'fahrenheit', 'Kelvin'],
        },
        {
            type: 'rawlist',
            name: 'toooo',
            message: 'To',
            choices: ['Celsius', 'fahrenheit', 'Kelvin'],
        }
    ])    
}

module.exports = {
    getTitle,
    viewapp,
    chooses
}

