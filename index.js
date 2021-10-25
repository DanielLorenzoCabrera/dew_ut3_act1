document.addEventListener("DOMContentLoaded", ()=>{

    let startButton = document.querySelector('button');
    startButton.addEventListener("click", getUserInput);

})


function getUserInput(){
    let userInput =  (document.querySelector('input[type="number"]')).value;
    let salida =  document.querySelector('.salida');
    compareResult(userInput) ? salida.innerHTML = `Resultado <span class="correcto">correcto</span>, la respuesta era <span>20</span>` : salida.innerHTML = `Resultado <span class="incorrecto">incorrecto</span>, la respuesta era <span>20</span>`;
}

function compareResult(data){
    result = parseInt(data.trim()) === 20 ? true : false;
    return result;
}