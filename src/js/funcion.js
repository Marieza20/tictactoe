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
// Variable para crear etiqueta p en la página
let p = document.createElement("p");
// Función para borrar mensaje
function borraMensaje(){
    p.innerHTML = "";
}
// Función para validar quién gana la partida
function ganaPierdeEmpata(){
    for(comb of combinaciones){
        // Si el jugador gana
        if (casilla[comb[0]].textContent == "O" && casilla[comb[1]].textContent == "O" && casilla[comb[2]].textContent == "O"){
            // Bloquea las casillas restantes
            for (let index = 0; index < casilla.length; index++) {
                casilla[index].style.pointerEvents="none";
            }
            // Inserta el mensaje
            p.innerText = "Oh no, perdiste :(";
            p.setAttribute("class","sour-gummy-title size");
            mensajes.appendChild(p);
        // O si el computador gana
        }else if (casilla[comb[0]].textContent == "X" && casilla[comb[1]].textContent == "X" && casilla[comb[2]].textContent == "X"){
            // Bloquea las casillas restantes
            for (let index = 0; index < casilla.length; index++) {
                casilla[index].style.pointerEvents="none";
            }
            // Inserta el mensaje
            p.innerText = "¡Ganaste la partida!";
            p.setAttribute("class","sour-gummy-title size");
            mensajes.appendChild(p);
        // O si hay empate
        }else if (ocupadas.length == 9) {
            p.innerText = "Empate";
            p.setAttribute("class","sour-gummy-title size");
            mensajes.appendChild(p);
        }
    }
    imprimir(partidasGanadas)
}
// Función para que la computadora juegue en una casilla aleatoria
function pc(){
    // For para recorrer la lista de casillas ocupadas
    for (let index = 0; index < ocupadas.length; index++) {
        // La computadora elige una casilla al azar
        let random = Math.floor(Math.random()*9);
        // Si la casilla no está en la lista de casillas ocupadas (o sea, la casilla está disponible)
        if (random != ocupadas[index]){
            // Si la casilla está vacía
            if (casilla[random].textContent == ""){
                // Inserta O
                casilla[random].textContent = "O";
                // Inserta en la lista de casillas ocupadas
                ocupadas.push(random);
                // Solo juega una casilla
                break;
            }
        }
    }
}
// For que recorre todas las casillas
for (let index = 0; index < casilla.length; index++){
    const element = casilla[index];
    // Función de click para que el usuario pueda jugar
    element.addEventListener("click",function(){
        if (jugador == true){
            // Si la casilla está vacía
            if (element.textContent == ""){
                // Inserta X
                element.textContent = "X";
                // Inserta en la lista de casillas ocupadas
                ocupadas.push(index);
                // Juega la computadora
                pc();
                // Imprime el mensaje de quien gana y finaliza la partida
                ganaPierdeEmpata();
            // Si la casilla está llena
            }else{
                alert("¡Ups! La casilla ya fue seleccionada");
            }
        }
    })
    // Función de click para que el usuario reinicie la partida
    reiniciar.addEventListener("click",function(){
        // Deja las casillas vacías
        element.textContent = "";
        // Desbloquea las casillas para volver a jugar
        for (let index = 0; index < casilla.length; index++) {
            casilla[index].style.pointerEvents="auto";
        }
        // Función para que quite los mensaje
        borraMensaje();
    })
}