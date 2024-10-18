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
        // Cuadrado
        contexto.strokeRect(0,0,300,300);

        // sombra vaso
        contexto.fillStyle = 'gray';
        contexto.beginPath();
        contexto.moveTo(175,262);
        contexto.quadraticCurveTo(142,273,115,258);
        contexto.bezierCurveTo(60,268,155,286,175,262);
        contexto.fill();

        // Vaso
        contexto.beginPath();
        contexto.moveTo(194,79);
        contexto.lineTo(95,79);
        contexto.bezierCurveTo(96,98,95,102,95,102);
        contexto.bezierCurveTo(90,125,100,150,100,150);
        contexto.bezierCurveTo(111,184,5,110,262,110,262);
        contexto.bezierCurveTo(143,274,175,262,175,262);
        contexto.bezierCurveTo(177,188,191,145,191,145);
        contexto.bezierCurveTo(191,145,199,121,194,102.5);
        contexto.lineTo();
        contexto.stroke();

        // Relleno de la bebida
        let lineGrad = contexto.createLinearGradient(150,81,150,268);
        lineGrad.addColorStop(0,'#fff');
        lineGrad.addColorStop(0.05,'#450c0c');
        lineGrad.addColorStop(0.6,'#874040');
        lineGrad.addColorStop(1,'rgba(202,147,147,0.6)');
        contexto.fillStyle = lineGrad;
        contexto.fill();

        // Primera burbuja
        contexto.strokeStyle = 'rgba(255,255,255,0.5)';
        contexto.lineWidth = 2;
        let radGrad = contexto.createRadialGradient(116,107,1,120,110,10);
        radGrad.addColorStop(0,'white');
        radGrad.addColorStop(0.9,'rgba(255,255,255,0)');
        contexto.fillStyle = radGrad;
        contexto.beginPath();
        contexto.arc(120,110,10.0,Math.PI*2,false);
        contexto.fill();
        contexto.stroke();
        
        // Segunda burbuja
        contexto.strokeStyle = 'rgba(255,255,255,0.5)';
        radGrad = contexto.createRadialGradient(164,140,1,168,143,8);
        radGrad.addColorStop(0,'white');
        radGrad.addColorStop(0.9,'rgba(255,255,255,0)');
        contexto.fillStyle = radGrad;
        contexto.beginPath();
        contexto.arc(168,143,8.0,Math.PI*2,false);
        contexto.fill();
        contexto.stroke();
        
        // Tercera burbuja
        contexto.strokeStyle = 'rgba(255,255,255,0.5)';
        radGrad = contexto.createRadialGradient(116,107,1,120,110,10);
        radGrad.addColorStop(0,'white');
        radGrad.addColorStop(0,'rgba(255,255,255,0)');
        contexto.fillStyle = radGrad;
        contexto.beginPath();
        contexto.arc(130,188,6,0,Math.PI*2,false);
        contexto.fill();
        contexto.stroke();
    }
});