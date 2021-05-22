const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');
const {viewapp,getTitle,chooses} = require('./view')
const {update_table} = require('./update')
var inquirer = require('inquirer');


function app(d){
    //while (true) {
        const currentView = viewapp(d);
        console.clear()
        console.log(getTitle());
        console.log(viewapp(currentView));
        console.log(chooses(currentView));
        /*d = update_table(ba_2, tipp_2);*/
    //}
}

module.exports = {
    app
}

