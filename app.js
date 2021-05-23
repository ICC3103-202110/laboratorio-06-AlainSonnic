const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');
const {viewapp,getTitle,chooses} = require('./view')
const {update_table} = require('./update')
var inquirer = require('inquirer');


async function app(d){
    while (true) {
        const currentView = viewapp(d);
        console.clear()
        console.log(getTitle());
        console.log(viewapp(currentView));
        const {confirm,temperature,froooom,toooo} = await (chooses(d));
        d = update_table(confirm,temperature,froooom,toooo);
    }
}

module.exports = {
    app
}

