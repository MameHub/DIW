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

// Actividad 1.
window.addEventListener("DOMContentLoaded", function() {
    let canvas = document.getElementById('miCanvas1');
    let contexto = canvas.getContext('2d');

    // Definir los rectángulos
    const rectangulos = [
      { x: 50, y: 50, width: 50, height: 50, dx: 2, dy: 2, color: 'rgba(0,250,250,0.7)' },
      { x: 150, y: 150, width: 50, height: 50, dx: 3, dy: 1, color: 'rgba(150,0,250,0.7)' }
    ];

    // Función para dibujar un rectángulo
    function dibujarRectangulo(rect) {
        contexto.fillStyle = rect.color;
        contexto.fillRect(rect.x, rect.y, rect.width, rect.height);
    }

    // Función para mover los rectángulos
    function moverRectangulos() {
        contexto.clearRect(0, 0, canvas.width, canvas.height); // Limpiar canvas

        rectangulos.forEach(rect => {
            // Dibujar el rectángulo
            dibujarRectangulo(rect);

            // Actualizar la posición
            rect.x += rect.dx;
            rect.y += rect.dy;

            // Detectar colisiones con los bordes del canvas
            if (rect.x + rect.width > canvas.width || rect.x < 0) {
                rect.dx = -rect.dx; // Cambiar dirección en X
              }
              if (rect.y + rect.height > canvas.height || rect.y < 0) {
                rect.dy = -rect.dy; // Cambiar dirección en Y
              }
            });

            requestAnimationFrame(moverRectangulos); // Bucle de animación
    }

    moverRectangulos(); // Iniciar la animación
});

// Actividad 2.
window.addEventListener("DOMContentLoaded", function() {
    let contexto = cargaContextoCanvas("miCanvas2");
    if(contexto){
        contexto.fillStyle = "rgba(0,250,0,0.7)";
        contexto.fillRect(0,0,200,200);
    }
});