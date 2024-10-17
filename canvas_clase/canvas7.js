function cargaContextoCanvas(idCanvas){
    let elemento = document.getElementById(idCanvas);
    if(elemento && elemento.getContext){
        let contexto = elemento.getContext('2d');
        if(contexto){
            return contexto;
        }
    }
    return false;
}

window.addEventListener("DOMContentLoaded", function() {
    let contexto = cargaContextoCanvas("micanvas");
    if(contexto) {
        contexto.beginPath();
        contexto.arc(75,75,60,Math.PI,Math.PI*0.5,false);
        contexto.stroke();
    }
});