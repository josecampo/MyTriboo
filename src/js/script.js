


main();

function main() {
    var numeroCola = 0, arrayCola = [];
    var numeroPila = 0, arrayPila = [];

    if ( arrayCola < 1 ) {
        document.getElementById("boton_extraer_cola").setAttribute("disabled", " ");
        
    } else {
        document.getElementById("boton_extraer_cola").setAttribute("enhabled", " ");
        
    };
    document.getElementById("boton_agregar_cola").onclick = agregarEnCola;

    document.getElementById("boton_agregar_pila").onclick = agregarEnPila;

    document.getElementById("boton_extraer_Cola").onclick = extraerDeCola;

    document.getElementById("boton_extraer_pila").onclick = extraerDePila;

    function agregarEnCola() {
    
        numeroCola++;

        arrayCola.push(numeroCola);

        document.getElementById("dato_cola").innerHTML = arrayCola;

        if (arrayCola.length == 100) {

            document.getElementById("boton_agregar_cola").setAttribute("disabled", " ");
        }
    };

    function agregarEnPila() {

        numeroPila++;

        arrayPila.unshift(numeroPila);

        document.getElementById("dato_pila").innerHTML = arrayPila;

        if (arrayPila.length == 100) {

            document.getElementById("boton_agregar_pila").setAttribute("disabled", " ");
        }
    };

    function extraerDeCola() {
        
    
    };

    function extraerDePila() {

        numCola.pop();

        alert("Se ha extraido el numero " + numPila + "de la pila");

    };

};

