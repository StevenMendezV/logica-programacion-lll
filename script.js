let resultado = 0;

function factorial(){
    const inputNumeroIngresado = document.getElementById("numero-factorial");
    const resultadoElemento = document.getElementById("resultado");
    const estadoSolicitud = document.getElementById("estado-solicitud");
    const mensajeError = document.getElementById("texto-solicitud");

    resultadoElemento.textContent = "";
    const numeroIngresado = inputNumeroIngresado.value.trim();

    const regexNumeroIngresado = /^\d{1,2}$/;
    const numeroIngresadoValido = regexNumeroIngresado.test(numeroIngresado);

    const numeroIngresadoInt = parseInt(numeroIngresado);

    function calcularFactorial(numeroIngresadoIntTrue){
        if(numeroIngresadoIntTrue === 0 || numeroIngresadoIntTrue === 1){
            return 1;
        } else {
            return numeroIngresadoIntTrue * calcularFactorial(numeroIngresadoIntTrue - 1);
        }
    };

    if(numeroIngresadoInt <= 20 && numeroIngresadoValido){
        estadoSolicitud.textContent = "Exitoso -";
        estadoSolicitud.style.color = "green";
        mensajeError.textContent = "El número ingresado es correcto";
        mensajeError.style.color = "green";
        resultado = calcularFactorial(numeroIngresadoInt);
        resultadoElemento.textContent = resultado;
        resultadoElemento.style.color = "green"
        inputNumeroIngresado.value = "";
    }else if(numeroIngresadoInt > 20 && numeroIngresadoValido){
        estadoSolicitud.textContent = "Error -";
        estadoSolicitud.style.color = "red";
        mensajeError.textContent = "El número ingresado es mayor a 20";
        mensajeError.style.color = "red";
        inputNumeroIngresado.value = "";
    }else if(!numeroIngresadoValido){
        estadoSolicitud.textContent = "Error -";
        estadoSolicitud.style.color = "red";
        mensajeError.textContent = "El dato ingresado no es válido";
        mensajeError.style.color = "red";
        inputNumeroIngresado.value = "";
    }

    console.log(numeroIngresadoValido);
    console.log(numeroIngresadoInt)
}