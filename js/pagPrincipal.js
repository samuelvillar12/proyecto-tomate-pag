const botonHeader = document.getElementById("botonComprar"); 
const boxEnlaces = document.querySelectorAll(".enlaces.Pag") ;     
const BotonSalir =   document.querySelector(".box.botonSalir")
const selectVenta = document.querySelector("#seleccionarDeVenta"); //Si quiero la etiqueta select con sus opctions, es un solo node que necesito y ese node es la etiqueta <select> y no necesito usar querySelectAll() ni un forEach, excesion si quiero seleccionar a varias etiquetas de mismo tipo necesito usar querySelectAll() y un forEach   
// Por cada evento del Mouse sobre el boton de "Comprar" hay un color asignado segun el evento que este ocurriendo
const selectlibras = document.querySelector("#seleccionarDeVentaLibras")
const selectSacos = document.querySelector("#seleccionarDeVentaSacos")
const selectTransport = document.querySelector("#seleccionarDeVentaTransport")
const labelLibras = document.querySelector(".label.libras");
const labelSacos = document.querySelector(".label.Sacos");
const labelTransporte = document.querySelector(".label.transporte");
const VentaInsertada = document.getElementById("InsertarTextoDeVenta")
const textoVenta = document.querySelector(".TEXTventa")


function mouseSobreComprar () {
const ventanaEmergente = document.querySelector(".ventanaClass")
botonHeader.addEventListener("click",  function() {
     ventanaEmergente.style.display = "block"
})

BotonSalir.addEventListener("click", ()=> {
     ventanaEmergente.style.display = "none"
     selectVenta.disabled = false 
     selectVenta.style.background = "#D5303E"
     selectlibras.style.display = "none"
     selectSacos.style.display = "none"
     selectTransport.style.display = "none"
     labelLibras.style.display = "none"
     labelTransporte.style.display = "none"
     labelSacos.style.display = "none"
     VentaInsertada.innerHTML = ""
     textoVenta.textContent = ""
})
BotonSalir.addEventListener("mouseover", () => {
     BotonSalir.style.background = "#D5303E"
     BotonSalir.style.color= "white"
} )
BotonSalir.addEventListener("mouseout", () => {
     BotonSalir.style.background = ''
     BotonSalir.style.color= ''
} )

botonHeader.addEventListener("mouseover", (e) => {


      if ("mouseover") {
     botonHeader.style.background = "#06ce06"
      botonHeader.style.color = "black"
      botonHeader.style.border = "0px" 
     } })
botonHeader.addEventListener("mouseout", () => {
         if ("mouseout" ) 
           botonHeader.style.background = "#008d00" 
          botonHeader.style.color = "white" ;
     } ) }

mouseSobreComprar()

// padreArticulo.appendChild(NuevoTituloDos)
// NuevoTituloDos.appendChild(ntdTexto)


// Por cada evento del Mouse sobre los enlaces hay un color asignado segun el evento que esté ocurriendo
boxEnlaces.forEach( (enlace) => { 
    enlace.addEventListener("mouseover",() => {
     Movermouse(enlace, "#D5303E", "white")
    }

)
     enlace.addEventListener("mouseout",() => {
           Dejarmouse(enlace, "", "black")
     })
     enlace.addEventListener("click", () => {
          clickmouse(enlace, "#008d00")
     })
});

function Dejarmouse(elemento,backgroundcolor, textColor) {
elemento.style.background = `${backgroundcolor}`;
elemento.style.color = `${textColor}`
}
function clickmouse(elemento,backgroundcolor, textColor) {
elemento.style.background = `${backgroundcolor}`;
elemento.style.color = `${textColor}`
}
function Movermouse(elemento,backgroundcolor, textColor) {
elemento.style.background = `${backgroundcolor}`;
elemento.style.color = `${textColor}`
}

selectVenta.addEventListener("change"/*cambiar, es el evento para select, algunos inputs (un input de texto y checkbox)*/, ()=> {
     EliccionVenta( selectVenta.value)// elemento.value para poder usar el switch (===) para una <selects>
})
selectlibras.addEventListener("change", () =>{
     Eliccionlibras(selectlibras.value)
})
selectSacos.addEventListener("change", () =>{
     EliccionSacos(selectSacos.value)
})
selectTransport.addEventListener("change", () =>{
     EliccionSacos(selectTransport.value)
})

function EliccionVenta (elemento){
    
    
         switch(elemento){
           case "libras":
             selectVenta.disabled = true
             selectVenta.style.background = "grey"
             selectlibras.style.display ="block"
             labelLibras.style.display = "block" 
          break;
          case "Sacos":
             selectVenta.disabled = true
             selectVenta.style.background = "grey"
             selectSacos.style.display ="block"
             labelSacos.style.display = "block"   
          
           
          break;
          case "transporte":
             selectVenta.disabled = true
             selectVenta.style.background = "grey"
             selectTransport.style.display ="block"
             labelTransporte.style.display = "block"
                       
          break;
     } 
  }     
          
function Eliccionlibras (elemento){

     switch(elemento){
          case "diez":
               textoVenta.textContent = "Haz comprado 10 libras por 200 RD$, direjase a la suculsal de Tomate fresco mas cerca" 
               VentaInsertada.innerHTML = '<a class="enlaces Pag" href="./codigoDelaVentaUser.html">Tu codigo de la venta</a>'           
          break;
          case "quince":
              textoVenta.textContent = "Haz comprado 15 libras por 700 RD$, direjase a la suculsal de Tomate fresco mas cerca"
              VentaInsertada.innerHTML = '<a class="enlaces Pag" href="./codigoDelaVentaUser.html">Tu codigo de la venta</a>'
              
          break;
          case "vente":
              textoVenta.textContent = "Haz comprado 20 libras por 1,200 RD$, direjase a la suculsal de Tomate fresco mas cerca"
              VentaInsertada.innerHTML = '<a class="enlaces Pag" href="./codigoDelaVentaUser.html">Tu codigo de la venta</a>'
 
          break;
          case "venticisco":
              textoVenta.textContent = "Haz comprado 25 libras por 1,800 RD$, direjase a la suculsal de Tomate fresco mas cerca"
              VentaInsertada.innerHTML = '<a class="enlaces Pag" href="./codigoDelaVentaUser.html">Tu codigo de la venta</a>'
          
          break;
          case "trenta":
              textoVenta.textContent = "Haz comprado 30 libras por 2,400 RD$, direjase a la suculsal de Tomate fresco mas cerca"
              VentaInsertada.innerHTML = '<a class="enlaces Pag" href="./codigoDelaVentaUser.html">Tu codigo de la venta</a>'
              
          break;
     }
  }     

function EliccionSacos (elemento){

     switch(elemento){
          case "Sacos2":
              textoVenta.textContent = "Haz comprado  (cantidad) por (precio) RD$, direjase a la suculsal de Tomate fresco mas cerca"
              VentaInsertada.innerHTML = '<a class="enlaces Pag" href="./codigoDelaVentaUser.html">Tu codigo de la venta</a>'
          break;
          case "Sacos3":
               textoVenta.textContent = "Haz comprado  (cantidad) por (precio) RD$, direjase a la suculsal de Tomate fresco mas cerca"
               VentaInsertada.innerHTML = '<a class="enlaces Pag" href="./codigoDelaVentaUser.html">Tu codigo de la venta</a>'
          break;
          case "Sacos4":
              textoVenta.textContent =  "Haz comprado  (cantidad) por (precio) RD$, direjase a la suculsal de Tomate fresco mas cerca"
              VentaInsertada.innerHTML = '<a class="enlaces Pag" href="./codigoDelaVentaUser.html">Tu codigo de la venta</a>'
          break;
          case "Sacos5":
              textoVenta.textContent = "Haz comprado  (cantidad) por (precio) RD$, direjase a la suculsal de Tomate fresco mas cerca"
              VentaInsertada.innerHTML = '<a class="enlaces Pag" href="./codigoDelaVentaUser.html">Tu codigo de la venta</a>'
          break;
          case "Sacos6":
               textoVenta.textContent = "Haz comprado  (cantidad) por (precio) RD$, direjase a la suculsal de Tomate fresco mas cerca"
               VentaInsertada.innerHTML = '<a class="enlaces Pag" href="./codigoDelaVentaUser.html">Tu codigo de la venta</a>'
          break;
         
     }
  }     
function EliccionTransport (elemento){

     switch(elemento){
           case "7sacos":
              textoVenta.textContent = "Haz comprado  (cantidad) por (precio) RD$, direjase a la suculsal de Tomate fresco mas cerca"
              VentaInsertada.innerHTML = '<a class="enlaces Pag" href="./codigoDelaVentaUser.html">Tu codigo de la venta</a>'
          break;
          case "10sacos":                 
               textoVenta.textContent = "Haz comprado  (cantidad) por (precio) RD$, direjase a la suculsal de Tomate fresco mas cerca"
               VentaInsertada.innerHTML = '<a class="enlaces Pag" href="./codigoDelaVentaUser.html">Tu codigo de la venta</a>'
          break;
          case "15sacos" :                 
               textoVenta.textContent = "Haz comprado  (cantidad) por (precio) RD$, direjase a la suculsal de Tomate fresco mas cerca"
               VentaInsertada.innerHTML = '<a class="enlaces Pag" href="./codigoDelaVentaUser.html">Tu codigo de la venta</a>'
          break;
          case "20sacos":                 
               textoVenta.textContent = "Haz comprado  (cantidad) por (precio) RD$, direjase a la suculsal de Tomate fresco mas cerca"
               VentaInsertada.innerHTML = '<a class="enlaces Pag" href="./codigoDelaVentaUser.html">Tu codigo de la venta</a>'
          break;                 
          case "25sacos":
               textoVenta.textContent = "Haz comprado  (cantidad) por (precio) RD$, direjase a la suculsal de Tomate fresco mas cerca"
               VentaInsertada.innerHTML = '<a class="enlaces Pag" href="./codigoDelaVentaUser.html">Tu codigo de la venta</a>'
          break;
     }
  }     

