const casilla = document.getElementsByClassName("casilla");
const mensajes = document.getElementById("mensajes");
const reiniciar = document.getElementById("reiniciar");
const contG = document.getElementById("contG");
// Variable para validar si es el turno del jugador
let jugador = true;
// Lista que almacena las posiciones jugadas
let ocupadas = [];
// Combinaciones de gane
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

let partidasGanadas = JSON.parse(localStorage.getItem("partidasGanadas")) || [];
// Variable para crear etiqueta p en la página
let p = document.createElement("p");
// Función para borrar mensaje
function borraMensaje(){
    p.innerHTML = "";
}
// Función para validar quién gana la partida
function ganaPierdeEmpata(){
    for(comb of combinaciones){
        if (casilla[comb[0]].textContent == "O" && casilla[comb[1]].textContent == "O" && casilla[comb[2]].textContent == "O"){
            for (let index = 0; index < casilla.length; index++) {
                casilla[index].style.pointerEvents="none";
            }
            p.innerText = "Oh no, perdiste :(";
            mensajes.appendChild(p);
        }else if (casilla[comb[0]].textContent == "X" && casilla[comb[1]].textContent == "X" && casilla[comb[2]].textContent == "X"){
            for (let index = 0; index < casilla.length; index++) {
                casilla[index].style.pointerEvents="none";
            }
            p.innerText = "¡Ganaste la partida!";
            mensajes.appendChild(p);
        }
    }
    if (ocupadas.length == 9) {
        p.innerText = "Empate";
        mensajes.appendChild(p);
    }
}
// Función para que la computadora juegue en una casilla aleatoria
function pc(){
    for (let index = 0; index < ocupadas.length; index++) {
        let random = Math.floor(Math.random()*9);
        if (random != ocupadas[index]){
            if (casilla[random].textContent == ""){
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
            if (element.textContent == ""){
                element.textContent = "X";
                ocupadas.push(index);
                pc();
                ganaPierdeEmpata();
                imprimir(partidasGanadas, ganadas)
            }else{
                alert("¡Ups! La casilla ya fue seleccionada");
            }
        }
    })
    reiniciar.addEventListener("click",function(){
        element.textContent = "";
        for (let index = 0; index < casilla.length; index++) {
            casilla[index].style.pointerEvents="auto";
        }
        borraMensaje();
    })
}
function imprimir(partidasGanadas) {
    // Muestra el contador en pantalla
    partidasGanadas.forEach((element) => {
        // Inserta conteo en la etiqueta creada
        contG.innerHTML= element.length
        partidasGanadas.push(element);
        localStorage.setItem("partidasGanadas",JSON.stringify(partidasGanadas));
    });
}