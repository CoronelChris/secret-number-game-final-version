let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeromaximo = 10;



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
   
    
    if(numeroSecreto === numeroDeUsuario){
            asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos ===1) ? "vez" : "veces"}`);
            document.getElementById ("reiniciar").removeAttribute("disabled");
    }else{
        if( numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "Tu número es mayor");
        }else{
            asignarTextoElemento("p","Tu número es menor");
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
    
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeromaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);

if(listaDeNumerosSorteados.length == numeromaximo){

    asignarTextoElemento("p","Ya se asignaron todos los números posibles");
}else{
    
    if(listaDeNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
  
} else { 
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

    function condicionesIniciales(){
        asignarTextoElemento("h1", "Juego del número secreto");
        asignarTextoElemento("p", ("Escoge un número del 1 al 10"));
        numeroSecreto = generarNumeroSecreto();
        intentos = 1;
        document.querySelector("#reiniciar").setAttribute("disabled", "true")
    }

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();

}
condicionesIniciales();