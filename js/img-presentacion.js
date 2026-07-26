
// hago un array de imagenes
const imagenes = [
    "img/tomate1.jpg",
    "img/tomate2.jpg",
    "img/tomate3.jpg",
    "img/tomate4.jpg"]
  let indiceActual = 0 ;  //creo una variable llamada indiceActual a la cual le doy un valor de 0
// Creo una function llamada CambiarImagenes para que sirva como parametro para la function setInterval
  function CambiarImagenes() {
  
    const imgElemento = document.getElementById("imagenPresentacion"); //creo una variable, a la cual doy un id en donde está el elemento html 
    imgElemento.style.opacity = 0; // le doy a la variableId un style con opacidad de 0 
    
    setTimeout(() => {
        indiceActual = (indiceActual + 1) % imagenes.length;
        imgElemento.src = imagenes[indiceActual];
        imgElemento.style.opacity =1;
    }, 800);
  }

  setInterval(CambiarImagenes, 3000)

