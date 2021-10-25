document.addEventListener("DOMContentLoaded", ()=>{

    let startButton = document.querySelector('button.act1');
    startButton.addEventListener("click", getUserInput);

    let startButton2 =  (document.getElementById("act2")).querySelector("button");
    startButton2.addEventListener("click", actividad2);

})


function getUserInput(){
    let userInput =  (document.querySelector('input[type="number"]')).value;
    let salida =  document.querySelector('.salida');
    if(userInput === '' || isNaN(userInput)){
        salida.innerHTML = 'Introduce un <span>número<span>'; 
        return;
    } 
    compareResult(userInput) ? salida.innerHTML = `Resultado <span class="correcto">correcto</span>` : salida.innerHTML = `Resultado <span class="incorrecto">incorrecto</span>`;
}

function compareResult(data){
    result = parseInt(data.trim()) === 20 ? true : false;
    return result;
}


function actividad2(){
    let number1 =  parseInt((document.querySelector("input[name='number1']")).value);
    let number2 =  parseInt((document.querySelector("input[name='number2']")).value);
    let salida2 =  document.querySelector('.salida2');

    if(!(validarNumero(number1) && validarNumero(number2))){
        salida2.innerHTML = "Introduce dos números <span>válidos</span>";
        return;
    }
    number1 > number2 ? alert('El primer número es mayor que el segundo') : salida2.innerHTML = number1 + number2;
}


function validarNumero(dato){
    let resultado =  dato !== '' && !isNaN(parseInt(dato)) ? true : false;
    return resultado;
}