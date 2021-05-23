const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');
const {viewapp,getTitle,chooses} = require('./view')
const {update_table, units} = require('./update')
var inquirer = require('inquirer');


async function app(d){
    while (true) {
        const currentView = viewapp(d);
        console.clear()
        console.log(getTitle());
        console.log(viewapp(currentView));
        const {yes_or_no,temperature,froooom,toooo} = await (chooses(d));

        if (yes_or_no === true){
            var d = [update_table(temperature),froooom,units(temperature,froooom,toooo),toooo]
        }
        
        else if (yes_or_no === false){ 
            var d = [units(temperature,froooom,toooo),toooo,update_table(temperature),froooom]
        }
    }
}
module.exports = {
    app
}

