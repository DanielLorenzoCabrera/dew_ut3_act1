document.addEventListener("DOMContentLoaded", ()=>{

    let startButton = document.querySelector('button.act1');
    startButton.addEventListener("click", getUserInput);

    let startButton2 =  (document.getElementById("act2-1")).querySelector("button");
    startButton2.addEventListener("click", actividad2);
    
    let startButton3 =  (document.getElementById("act2-2")).querySelector("button");
    startButton3.addEventListener("click", actividad3);

    let startButton4 =  (document.getElementById("act2-3")).querySelector("button");
    startButton4.addEventListener("click", actividad4);

    let startButtons5 = document.querySelectorAll(".for");
    startButtons5.forEach(button => button.addEventListener("click", actividad5));

})


function getUserInput(){
    let userInput =  ((document.getElementById("act1")).querySelector('input[type="number"]')).value;
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
    let input = document.querySelector("input[name='number1']");
    input.innerHTML = input.value++;
}


function actividad3(){
    let number1 =  parseInt((document.querySelector("input[name='number2']")).value);
    let number2 =  parseInt((document.querySelector("input[name='number3']")).value);
    let salida3 =  document.querySelector('.salida3');

    if(!(validarNumero(number1) && validarNumero(number2))){
        salida3.innerHTML = "Introduce dos números <span>válidos</span>";
        return;
    }
    number1 > number2 ? alert('El primer número es mayor que el segundo') : salida3.innerHTML = number1 + number2;
}

function actividad4(){
    function addNumbers(){
        firstNum = 4;
        secondNum = 8;
        result =  firstNum + secondNum;
        return result;
    }
    alert(`Valor de result antes de llamar a la función: ${result}`);
    var result = 0 ;
    sum = addNumbers();
    alert(`Valor de result después de llamar a la función: ${result}`);

}


function actividad5(){
    let frutas = ["fresa","pera","coco"];
    let indice = document.getElementById('indice');
    let valor = document.getElementById('valor');
    let descripcion = document.getElementById('descripcion');
    indice.innerHTML = "";
    valor.innerHTML = "";
    
    switch(this.dataset.name){
        case "for":
            for(let i = 0; i < frutas.length; i++){
                indice.textContent += `${i} | `;
                valor.textContent += `${frutas[i]} | `;   
            }
            descripcion.innerHTML = descripciones.for;
            break;
        case "foreach":
            frutas.forEach((fruta,index) => indice.textContent +=  `${index} -> ${fruta} | `);
            descripcion.innerHTML = descripciones.foreach;
            break;
        case "forin":
            for(const fruit in frutas){
                indice.textContent += `${fruit} | `;
            }
            descripcion.innerHTML = descripciones.forin;
            break;
        case "forof":
            for(const fruta of frutas){
                indice.textContent += `${fruta} | `;
            }
            descripcion.innerHTML = descripciones.forof;
            break;
        }
}


const descripciones = {
    "for" : `Bucle que nos permite recorrer objetos iterables y realizar acciones un número determinado de veces. 
    Sus parámetros se componen de: una variable a inicializar, una condición y una acción a realizar al final de cada iteración.
    Nos permite conocer tanto la posición como el contenido de variables iterables, podemos decidir hasta cuando se repetirá
    <br>Ejemplo: <span>for(let i = 0; i < frutas.length; i++){}</span>`
    ,
    "foreach" : `Función propia de los objetos iterables utilizada para recorrer los mismos de principio a fin, no podemos establecer la condición de repetición.
    Reciben como parámetro un callback. Para obtener la posición del elemento deberemos indicarlo en los parámetros de la funcion callback junto al valor (elemento, index). 
    <br>Ejemplo: <span>frutas.forEach((elemento, index) => console.log(index,elemento)){}</span>`,
    "forin" : `Bucle que itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas , incluidas las propiedades enumerables heredadas. Se indica como si fuera un for normal pero sus parámetros
    se componen por una variable que almacenará el índice de la posición en la que se encuentra y el objeto iterable que vamos a recorrer. Al igual que el forEach lo recorre de principio a fin,
    por lo que no podemos indicar la condición de repetición.
    <br>Ejemplo: <span>for(const fruta in frutas){}</span> `,
    "forof" : `Exactamente igual que el for in, la diferencia es que la variable en lugar de contener la posición contiene el valor de la variable en la que se encuentre
    <br>Ejemplo: <span>for(const fruta of frutas){}</span>`
}




function validarNumero(dato){
    let resultado =  dato !== '' && !isNaN(parseInt(dato)) ? true : false;
    return resultado;
}