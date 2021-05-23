

function update_table(temperature){
    return (Number(temperature))
}

function units(temperature,froooom,toooo){
    if(froooom === 'Celsius' && toooo === 'Kelvin'){
        var t = (Number(temperature) + 273.15)
        return t
    }

    else if(froooom === 'Celsius' && toooo === 'fahrenheit'){
        var t = (Number(temperature) * 9/5) + 32
        return t
    }

    else if(froooom === 'Kelvin' && toooo === 'Celsius'){
        var t = (Number(temperature) - 273.15)
        return t
    }

    else if(froooom === 'Kelvin' && toooo === 'fahrenheit'){
        var t = ((Number(temperature) -273.15) * (9/5)) +32
        return t
    }

    else if(froooom === 'fahrenheit' && toooo === 'Celsius'){
        var t = ((Number(temperature) - 32) * (5/9))
        return t
    }

    else if(froooom === 'fahrenheit' && toooo === 'Kelvin'){
        var t = ((Number(temperature) - 32) * (5/9)) + 273.15
        return t
    }
}
    
module.exports = {
    update_table,
    units
}