const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')


function update_table(confirm,temperature,froooom,toooo){
    if(froooom === 'Celsius' && convert === 'kelvin'){
        var new_temperature = temperature + 273
        return [temperature,froooom,new_temperature,toooo]
    }
    else
        return [0,0,0,0]
    } 
    


module.exports = {
    update_table
}