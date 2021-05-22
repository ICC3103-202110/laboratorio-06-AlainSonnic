
const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');
const {viewapp,getTitle,chooses} = require('./view')
const {update_table} = require('./update')
const {app} = require('./app')
var inquirer = require('inquirer');

t=[0,0,0,0]
console.log(app(t));
