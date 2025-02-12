const casilla = document.getElementsByClassName("casilla");
const mensajes = document.getElementById("mensajes");
const reiniciar = document.getElementById("reiniciar");

let jugador = "X";

for (let index = 0; index < casilla.length; index++){
    const element = casilla[index];
    element.addEventListener("click",function(){
        if (element.textContent == "") {
            element.textContent = "X";
        }else{
            alert("¡Ups! La casilla ya fue seleccionada");
        }
    })
}