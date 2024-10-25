function cargaContextoCanvas(miCanvas){
    let elemento = document.getElementById(miCanvas);
    if(elemento && elemento.getContext){
        let contexto = elemento.getContext('2d');
        if(contexto){
            return contexto;
        }
    }
    return false;
}

window.addEventListener("DOMContentLoaded", function() {
    let contexto = cargaContextoCanvas("miCanvas1");
    if(contexto){
        contexto.strokeRect(0,0,200,200);
        contexto.fillStyle('#FF0000');
    }
});

window.addEventListener("DOMContentLoaded", function() {
    let contexto = cargaContextoCanvas("miCanvas2");
    if(contexto){
        contexto.strokeRect(0,0,200,200);
        contexto.strokeStyle('#FFFF00');
    }
});