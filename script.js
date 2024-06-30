let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']

let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

let opurtunidades= 6;

let button = document.getElementById("guess-button")
let input =document.getElementById("guess-input")

button.addEventListener("click",pulsar)


function pulsar(){
     const INTENTO = input.value.toUpperCase()
    if(INTENTO==palabra){
        terminar("ganaste")
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)


 opurtunidades--
if (opurtunidades==0){
 terminar("perdiste")
}
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}