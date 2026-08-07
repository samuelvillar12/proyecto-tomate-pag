
// hago un array de imagenes
const imagenes = [
    "img/tomate1.jpg",
    "img/tomate2.jpg",
    "img/tomate3.jpg",
    "img/tomate4.jpg"]
  let indiceActual = 0 ;  //creo una variable llamada indiceActual a la cual le doy un valor de 0

  // ==========================================================
// CAMBIO AUTOMÁTICO DE IMÁGENES (SLIDER / CARRUSEL)
//
// Esta función permite cambiar una imagen de presentación
// automáticamente cada cierto tiempo.
//
// Funcionamiento:
// 1. Obtiene el elemento <img> del HTML.
// 2. Reduce su opacidad para crear un efecto de transición.
// 3. Cambia la imagen después de un tiempo determinado.
// 4. Aumenta nuevamente la opacidad para mostrar la nueva imagen.
//
// Requiere:
// - Un arreglo llamado "imagenes" con las rutas de las imágenes.
// - Una variable "indiceActual" que controla la imagen actual.
// - Un elemento HTML con el id "imagenPresentacion".
//
// Ejemplo:
// <img id="imagenPresentacion" src="imagen1.jpg">
// ==========================================================

  function CambiarImagenes() {
  
      // Obtiene el elemento imagen del documento mediante su ID.
    // Esta variable permitirá modificar sus propiedades desde JavaScript.
    const imgElemento = document.getElementById("imagenPresentacion");  
   
     // Cambia temporalmente la opacidad de la imagen a 0.
    // Esto hace que la imagen desaparezca antes de cambiarla,
    // creando un efecto de transición suave.
    imgElemento.style.opacity = 0; 
    
    // Ejecuta una función después de 800 milisegundos.
    // Se utiliza para esperar a que termine la transición
    // antes de reemplazar la imagen.
    setTimeout(() => {

         // Actualiza el índice de la imagen actual.
        //
        // El operador módulo (%) permite volver al inicio
        // cuando llega al final del arreglo.
        //
        // Ejemplo:
        // Si existen 5 imágenes:
        // 0 → 1 → 2 → 3 → 4 → vuelve a 0
        indiceActual = (indiceActual + 1) % imagenes.length;
       
       // Cambia la ruta de la imagen por la siguiente
        // almacenada en el arreglo "imagenes"
        imgElemento.src = imagenes[indiceActual];
       
         // Devuelve la opacidad a 1 para mostrar
        // la nueva imagen completamente.
        imgElemento.style.opacity =1;
    }, 800);
  }

// Ejecuta la función CambiarImagenes automáticamente
// cada 3000 milisegundos (3 segundos).
//
// Esto crea un cambio automático de imágenes
// sin necesidad de que el usuario presione botones.
  setInterval(CambiarImagenes, 3000)

