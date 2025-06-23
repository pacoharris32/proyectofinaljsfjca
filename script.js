// --- Funciones de Conversión de Longitud ---
function convertLongitud() {
    const inputValue = parseFloat(document.getElementById('longitudInput').value);
    const unitFrom = document.getElementById('longitudUnitFrom').value;
    const unitTo = document.getElementById('longitudUnitTo').value;
    const resultElement = document.getElementById('longitudResult');

    if (isNaN(inputValue)) {
        resultElement.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    // Convertir todo a metros primero (unidad base)
    let valueInMeters;
    switch (unitFrom) {
        case 'm':
            valueInMeters = inputValue;
            break;
        case 'km':
            valueInMeters = inputValue * 1000;
            break;
        case 'cm':
            valueInMeters = inputValue / 100;
            break;
        case 'in':
            valueInMeters = inputValue / 39.3701;
            break;    
        case 'mi':
            valueInMeters = inputValue * 1609.34;
            break;
        case 'ft':
            valueInMeters = inputValue * 0.3048;
            break;
        case 'yd':
            valueInMeters = inputValue * 1.09361;
            break;
        default:
            valueInMeters = 0;
    }

    // Convertir de metros a la unidad de destino
    let finalResult;
    switch (unitTo) {
        case 'm':
            finalResult = valueInMeters;
            break;
        case 'km':
            finalResult = valueInMeters / 1000;
            break;
        case 'cm':
            finalResult = valueInMeters * 100;
            break;
        case 'in':
            finalResult = valueInMeters * 39.3701;
            break;    
        case 'mi':
            finalResult = valueInMeters / 1609.34;
            break;
        case 'ft':
            finalResult = valueInMeters / 0.3048;
            break;
         case 'yd':
            finalResult = inputValue / 1.09361;
            break;    
        default:
            finalResult = 0;
    }

    resultElement.textContent = `${finalResult.toFixed(4)} ${unitTo}`; // Muestra el resultado con 4 decimales
}

// --- Funciones de Conversión de Volumen ---
function convertVolumen() {
    const inputValue = parseFloat(document.getElementById('volumenInput').value);
    const unitFrom = document.getElementById('volumenUnitFrom').value;
    const unitTo = document.getElementById('volumenUnitTo').value;
    const resultElement = document.getElementById('volumenResult');

    if (isNaN(inputValue)) {
        resultElement.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    // Convertir todo a litros primero (unidad base)
    let valueInLitros;
    switch (unitFrom) {
        case 'l':
            valueInLitros = inputValue;
            break;
        case 'ml':
            valueInLitros = inputValue / 1000;
            break;
        case 'gal':
            valueInLitros = inputValue * 3.78541;
            break;
        case 'quarts':
            valueInLitros = inputValue / 1.05669;
            break;
        case 'pints':
            valueInLitros = inputValue / 2.11338;
            break;  
        case 'cups':
            valueInLitros = inputValue / 4.22675;
            break;  
        case 'm3':
            valueInLitros = inputValue * 1000;
            break;
        default:
            valueInLitros = 0;
    }

    // Convertir de litros a la unidad de destino
    let finalResult;
    switch (unitTo) {
        case 'l':
            finalResult = valueInLitros;
            break;
        case 'ml':
            finalResult = valueInLitros * 1000;
            break;
        case 'gal':
            finalResult = valueInLitros / 3.78541;
            break;
        case 'quarts':
            finalResult = valueInLitros * 1.05669;
            break;
        case 'pints':
            finalResult = valueInLitros * 2.11338;
            break;
        case 'cups':
            finalResult = valueInLitros * 4.22675;
            break;                
        case 'm3':
            finalResult = valueInLitros / 1000;
            break;
        default:
            finalResult = 0;
    }

    resultElement.textContent = `${finalResult.toFixed(4)} ${unitTo}`;
}

// --- Funciones de Conversión de Peso ---
function convertPeso() {
    const inputValue = parseFloat(document.getElementById('pesoInput').value);
    const unitFrom = document.getElementById('pesoUnitFrom').value;
    const unitTo = document.getElementById('pesoUnitTo').value;
    const resultElement = document.getElementById('pesoResult');

    if (isNaN(inputValue)) {
        resultElement.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    // Convertir todo a kilogramos primero (unidad base)
    let valueInKilos;
    switch (unitFrom) {
        case 'kg':
            valueInKilos = inputValue;
            break;
        case 'g':
            valueInKilos = inputValue / 1000;
            break;
        case 'mg':
            valueInKilos = inputValue / 1000000;
            break;    
        case 'lb':
            valueInKilos = inputValue * 0.453592;
            break;
        case 'oz':
            valueInKilos = inputValue * 0.0283495;
            break;
        default:
            valueInKilos = 0;
    }

    // Convertir de kilogramos a la unidad de destino
    let finalResult;
    switch (unitTo) {
        case 'kg':
            finalResult = valueInKilos;
            break;
        case 'g':
            finalResult = valueInKilos * 1000;
            break;
        case 'mg':
            finalResult = valueInKilos * 1000000;
            break;    
        case 'lb':
            finalResult = valueInKilos / 0.453592;
            break;
        case 'oz':
            finalResult = valueInKilos / 0.0283495;
            break;
        default:
            finalResult = 0;
    }

    resultElement.textContent = `${finalResult.toFixed(7)} ${unitTo}`;
}

// --- Funciones de Conversión de Temperatura ---
function convertTemperatura() {
    const inputValue = parseFloat(document.getElementById('temperaturaInput').value);
    const unitFrom = document.getElementById('temperaturaUnitFrom').value;
    const unitTo = document.getElementById('temperaturaUnitTo').value;
    const resultElement = document.getElementById('temperaturaResult');

    if (isNaN(inputValue)) {
        resultElement.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    let result;

    if (unitFrom === unitTo) {
        result = inputValue; // Si las unidades son iguales, no hay conversión
    } else if (unitFrom === 'C') {
        if (unitTo === 'F') {
            result = (inputValue * 9/5) + 32;
        } else if (unitTo === 'K') {
            result = inputValue + 273.15;
        }
    } else if (unitFrom === 'F') {
        if (unitTo === 'C') {
            result = (inputValue - 32) * 5/9;
        } else if (unitTo === 'K') {
            result = (inputValue - 32) * 5/9 + 273.15;
        }
    } else if (unitFrom === 'K') {
        if (unitTo === 'C') {
            result = inputValue - 273.15;
        } else if (unitTo === 'F') {
            result = (inputValue - 273.15) * 9/5 + 32;
        }
    }

    resultElement.textContent = `${result.toFixed(2)} °${unitTo}`; // Temperatura con 2 decimales
}