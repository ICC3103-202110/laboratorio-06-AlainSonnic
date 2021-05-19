const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')


function update_table(bill_amount,tipper){                            /* bill amount, tip%*/
    const tip_1 = (Number(bill_amount) * Number((tipper)/100))
    const total = (Number(bill_amount) + Number(tip_1))
    return [bill_amount,tipper,tip_1,total] 
}                 


module.exports = {
    update_table
}
