const botones = document.querySelectorAll("button");
const contenedor1 = document.querySelector(".contenedor1");
const contenedor2 = document.querySelector(".contenedor2");
const contenedor3 = document.querySelector(".contenedor3");
const contenedor4 = document.querySelector(".contenedor4");

let SegundoNumero = false;

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        if (boton.id === "clear") {
            contenedor1.value = "";
            contenedor2.value = "";
            contenedor3.value = "";
            contenedor4.value = "";
            SegundoNumero = false;
            return;
        }

        if (boton.classList.contains("resultado")) {
            const n1 = parseFloat(contenedor1.value);
            const op = contenedor2.value;
            const n2 = parseFloat(contenedor3.value);
            let resultado_operacion = 0;

            if (op === "+") resultado_operacion = n1 + n2;
            if (op === "-") resultado_operacion = n1 - n2;
            if (op === "*") resultado_operacion = n1 * n2;
            if (op === "/") {
                if (n2 === 0) {
                    resultado_operacion = "Error";
                } else {
                    resultado_operacion = n1 / n2;
                 }
}
            contenedor4.value = resultado_operacion;
            return;
        }

        if (boton.classList.contains("funcion")) {
            if (contenedor1.value !== "") {
                contenedor2.value = valor;
                SegundoNumero = true;
            }
            return;
        }

        if (!SegundoNumero) {
            contenedor1.value += valor;
        } else {
            contenedor3.value += valor;
        }
    });
});