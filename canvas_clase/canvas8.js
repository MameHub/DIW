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
        img.src='images.jpg';
        img.addEventListener('load', function(){
            contexto.drawImage(img,0.0);
            contexto.drawImage(img,0,500,200,200);
            contexto.drawImage(img,60,60,400,250,0,700,400,250);
            contexto.drawImage(img,710,20,150,200,0,1110,450,600);
        })
    }
});