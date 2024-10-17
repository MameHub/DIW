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
        let img = new Image();
        img.src="edit-jardin.jpg";
        img.addEventListener('load', function(){
            contexto.drawImage(img,0.0);
        })
    }
});