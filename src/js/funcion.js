const casilla = document.getElementsByClassName("casilla");
const mensajes = document.getElementById("mensajes");
const reiniciar = document.getElementById("reiniciar");



for (let index = 0; index < casilla.length; index++){
    const element = casilla[index];
    element.addEventListener("click",function(){
        element.textContent = "X";
    })
}