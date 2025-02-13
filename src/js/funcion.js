const casilla = document.getElementsByClassName("casilla");
const mensajes = document.getElementById("mensajes");
const reiniciar = document.getElementById("reiniciar");

let jugador = true;
let ocupadas = [];

const combinaciones = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [3,4,6]
]

function pc() {
    for (let index2 = 0; index2 < ocupadas.length; index2++) {
        let random = Math.floor(Math.random()*9);
        if (random != ocupadas[index2]) {
            if (casilla[random].textContent == "") {
                casilla[random].textContent = "O";
                ocupadas.push(random);
                break;
            }
        }
    }
}

for (let index = 0; index < casilla.length; index++){
    const element = casilla[index];
    element.addEventListener("click",function(){
        if (jugador == true){
            if (element.textContent == "") {
                element.textContent = "X";
                ocupadas.push(index);
                
                pc();
                console.log(ocupadas);
            }else{
                alert("¡Ups! La casilla ya fue seleccionada");
            }
        }
    })
}