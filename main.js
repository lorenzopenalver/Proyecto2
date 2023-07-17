    //console.log(input1.value + input2.value); concatenar (Si es 2 en un imput y 2 en el otro el resultado sera 22)
    //console.log(Number(input1.value) + parseInt(input2.value)); sumar, puede usarse tanto number como parseInt
//console.log(Number(input1.value) + parseInt(input2.value));

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('form');


const sumarImputValues = (event) => {
    //console.log({event})
    event.preventDefault();
    let sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = "El resultado es " + sumaInputs;
}

form.addEventListener('submit', sumarImputValues);

/* con/* st sumarImputValues = (event) => {
    event.preventDefault();
    let sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = "El resultado es " + sumaInputs;
}

btn.addEventListener('click', sumarImputValues); */ 