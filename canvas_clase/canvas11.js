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
        contexto.fillSyle = '#ff0000';
        contexto.fillRect(0,0,150,150);

        contexto.traslate(100,50);

        // Pintamos otro cuadrado.
        contexto.fillSyle = 'rgba(0,0,255,0.5)';
        contexto.fillRect(0,0,150,150);
        
        // Save te permite guardar el "estado" actual del canvas.
        // Estos pueden ser restaurados en cualquier momento por restore. Esta técnica es muy útil para animaciones y para intercambiar estados mientras dibujamos de forma dinámica.
        contexto.save()

        contexto.fillStyle = 'green';
        contexto.fillRect(10,10,150,150);

        // Restauramos el contexto
        contexto.restore();
        contexto.fillRect(200,0,150,150);
    }
});