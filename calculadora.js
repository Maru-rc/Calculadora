const botones = document.querySelectorAll("button");
const pantalla = document.querySelector(".pantalla");
let operacion = " ";
let resetPantalla = false

botones.forEach(boton=>{
    boton.addEventListener("click",()=>{
        const textoBoton = boton.textContent;

        if (textoBoton ==="C"){
            operacion= " ";
            pantalla.value="0";
        } else if (textoBoton === "="){
            try{
                operacion=eval(operacion);
                pantalla.value=operacion;
            } catch (error){
                pantalla.value ="Error";
                operacion = " ";
            }
        } else if (textoBoton === "%"){
            if (operacion) {
                operacion =  String(eval(operacion+"/100"));
                pantalla.value=operacion;
            }
        }else{
            if (resetPantalla && !isNaN(textoBoton)){
                operacion = textoBoton;
                resetPantalla = false;
            }else{
                operacion += textoBoton;
            }
            pantalla.value = operacion; 
        }
    })
})