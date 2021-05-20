const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');


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


 function yesorno(a){
    'use strict';
    var inquirer = require('inquirer');

    var questions = [
    {
        type: 'confirm',
        name: 'toBeDelivered',
        message: 'Left temperature is source?',
        default: false,
    },

    ];

    inquirer.prompt(questions).then((answers) => {
    console.log('\nOrder receipt:');
    console.log(JSON.stringify(answers, null, '  '));
    });
}



    function chooses(a){
        'use strict';
    var inquirer = require('inquirer');

    var questions = [
    {
        type: 'rawlist',
        name: 'frommmmmmm',
        message: 'From',
        choices: ['Celsius', 'fahrenheit', 'Kelvin'],
    },
    {
        type: 'rawlist',
        name: 'tooooooooo',
        message: 'To',
        choices: ['Celsius', 'fahrenheit', 'Kelvin'],
    },
    ];

    inquirer.prompt(questions).then((answers) => {
    console.log('\nOrder receipt:');
    console.log(JSON.stringify(answers, null, '  '));
    });
 }


module.exports = {
    getTitle,
    viewapp,
    yesorno,
    chooses
}