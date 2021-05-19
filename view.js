const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');


function viewapp(d){
    const testCases = [
        { "Bill Amount": d[0], "tip (%)": d[1], "tip": d[2],"Total $": d[3]},
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


module.exports = {
    getTitle,
    viewapp
}

