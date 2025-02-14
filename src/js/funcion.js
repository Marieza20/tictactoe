const casilla = document.getElementsByClassName("casilla");
const mensajes = document.getElementById("mensajes");
const reiniciar = document.getElementById("reiniciar");
// Variable para validar si es el turno del jugador
let jugador = true;
// Variable para validar si la partida terminó
let ganaPierdeEmpata = true;
// Lista que almacena las posiciones jugadas
let ocupadas = [];
// Posiciones de gane
const combinaciones = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
// Función para validar quién gana la partida
function partidas() {
    for(comb of combinaciones){
        if (casilla[comb[0]].textContent == "O" && casilla[comb[1]].textContent == "O" && casilla[comb[2]].textContent == "O"){
            let p = document.createElement("p");
            p.innerText = "Oh no, perdiste :(";
            mensajes.appendChild(p);
        }else if (casilla[comb[0]].textContent == "X" && casilla[comb[1]].textContent == "X" && casilla[comb[2]].textContent == "X") {
            let p = document.createElement("p");
            p.innerText = "¡Ganaste la partida!";
            mensajes.appendChild(p);
        }
    }
}
// Función para que la computadora juegue en una casilla aleatoria
function pc() {
    for (let index = 0; index < ocupadas.length; index++) {
        let random = Math.floor(Math.random()*9);
        if (random != ocupadas[index]) {
            if (casilla[random].textContent == "") {
                casilla[random].textContent = "O";
                ocupadas.push(random);
                break;
            }
        }
    }
}
// Función de click para que el usuario pueda jugar
for (let index = 0; index < casilla.length; index++){
    const element = casilla[index];
    element.addEventListener("click",function(){
        if (jugador == true){
            if (element.textContent == "") {
                element.textContent = "X";
                ocupadas.push(index);
                pc();
                partidas();
            }else{
                alert("¡Ups! La casilla ya fue seleccionada");
            }
        }
    })
}