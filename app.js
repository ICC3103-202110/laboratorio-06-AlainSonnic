const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');
const {viewapp,getTitle} = require('./view')
const {update_table} = require('./update')


function app(d){
    while (true) {
        const currentView = viewapp(d);
        console.clear()
        console.log(getTitle());
        console.log(viewapp(currentView));
        const prompt = require('prompt-sync')();
        const ba_2 = Number(prompt("Bill Amount ?  :"));
        const tipp_2 = Number(prompt("tip (%) ?   :"));
        d = update_table(ba_2, tipp_2);
    }
}

module.exports = {
    app
}

