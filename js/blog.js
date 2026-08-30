// ===============================
// LÓGICA DEL MODO CLARO Y OSCURO
// ===============================

// Obtiene el elemento raíz del documento (<html>).
// Aquí se agregará el atributo data-theme para cambiar los estilos.

const HTML = document.documentElement 


// Busca el botón encargado de cambiar el tema.
// El botón debe tener el atributo: data-theme-toggle
const BotonToggle = document.querySelector("[data-theme-toggle]")


// ---------------------------------------------
// Función para aplicar el tema seleccionado
// ---------------------------------------------
const setTheme = theme => { 
     // Agrega o actualiza el atributo data-theme del elemento <html>.
    // Ejemplo:
    // <html data-theme="dark">
    // <html data-theme="light">
    HTML.setAttribute("data-theme", theme)

    // Guarda la preferencia del usuario en el navegador,
    // para mantener el mismo tema cuando vuelva a abrir la página.
    localStorage.setItem("theme",theme)
}

// Obtiene el tema almacenado anteriormente.
// Si nunca se ha guardado uno, devolverá null.
const savedTheme = localStorage.getItem('theme')

// ------------------------------------------------------
// Configuración inicial del tema al cargar la página
// ------------------------------------------------------

// Si existe un tema guardado por el usuario,
// se utiliza ese tema.
if (savedTheme){
    setTheme(savedTheme)

// Si no existe un tema guardado,
// se verifica la preferencia del sistema operativo.
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
    
    // Si el sistema está en modo oscuro,
    // se aplica automáticamente.
    setTheme('dark')

} else {

    // En caso contrario,
    // el tema predeterminado será claro.
    setTheme("light")
}

// ------------------------------------------------------
// Evento para cambiar entre modo claro y oscuro
// ------------------------------------------------------

// Escucha el click sobre el botón de cambio de tema.
BotonToggle.addEventListener("click", ()=>{
    
    // Obtiene el tema actualmente aplicado.
    const current = HTML.getAttribute("data-theme");

    // Si el tema actual es oscuro,
    // cambia a claro.
    // Si es claro,
    // cambia a oscuro.
    const newTheme = current === "dark" ? "light" : "dark" ;
    
    // Aplica el nuevo tema y lo guarda en localStorage.
    setTheme(newTheme)
});
//



const BotonOcultarSection = document.getElementById("botonOcultarSectionNav")
ocultaNavSection( BotonOcultarSection, "click","block")
ocultaNavSection(BotonOcultarSection, "dblclick", "none")
function ocultaNavSection(elemento, evento, valor  ){
    
    const SectionNav = document.querySelector(".contenido.navegacion")

    
    elemento.addEventListener(evento, () => {
        SectionNav.style.display = valor
    
   
    })
    
}

// ============================================================
// BUSCADOR DE ARTÍCULOS
// ============================================================

// Obtiene el elemento HTML que tiene el id "search-heard".
// Este elemento será el campo donde el usuario escribirá
// el texto que desea buscar.

const buscar = document.getElementById("search-heard");
const textoPrincipal = document.querySelector(".texto.principal")

// Escucha el evento "keyup", que se ejecuta cada vez que
// el usuario suelta una tecla después de escribir.
buscar.addEventListener("input", e => {

        // Obtiene el texto escrito por el usuario mediante
    // e.target.value y lo convierte a minúsculas.
    // Esto permite realizar búsquedas sin importar
    // si el usuario utiliza mayúsculas o minúsculas.
   let valorEvento = e.target.value.toLowerCase();
   
   // Selecciona todos los elementos que tengan la clase
    // "tituloArticulo".
    const articulosBuscar = document.querySelectorAll(".tituloArticulo")

     // Recorre cada uno de los títulos encontrados.
    // La variable "articulo" representa el título actual.
    articulosBuscar.forEach((articulo) => {
        // Obtiene el texto del título mediante textContent
        // y lo convierte a minúsculas para poder compararlo
        // con el texto introducido por el usuario.
   let contenido = articulo.textContent.toLowerCase();

        // Comprueba si el contenido del título incluye
        // el texto que el usuario está buscando.
    if (contenido.includes(valorEvento)) {

            // Si existe una coincidencia, se muestra el artículo.
            // parentNode.parentNode permite acceder al elemento
            // que contiene el título y modificar su visualización.
        articulo.parentNode.parentNode.style.display = 'block'
        textoPrincipal.innerHTML= ` <h1>Bienvenido al blog del Tomate.</h1>
                <br>
                
                <p class="texto principal" style="margin-left: 195px; margin-right: 195px; font-size: 22px;">Bienvenidos al Blog del Tomate, un espacio creado para conocer más sobre uno de los alimentos más importantes y utilizados en nuestra cocina.
                <br>
                <br>
                Aquí encontrarás información interesante sobre el tomate, sus variedades, beneficios, formas de cultivo, curiosidades y diferentes maneras de utilizarlo en recetas y preparaciones.
                <br>
                <br>
               
                 </p>
                            <br>`
    }else { 
        // Si no existe coincidencia, se oculta el artículo.
      articulo.parentNode.parentNode.style.display = "none";
       textoPrincipal.innerHTML = "<h1>No hay resultados</h1>"

    }      
    })
  
})


const proximosArticulos = [
    {
        imagen:"./img/tomate5.jpg" ,
        titulo:"Historia del tomate"  ,
        "Descripcion breve":"Un breve recorrido por el origen y la expansión del tomate por el mundo. " ,
    },
    {
        imagen: "img/tomate3.jpg",
        titulo:"Cómo cultivar tomates",
        "Descripcion breve": "Consejos básicos para sembrar, cuidar y cosechar tomates en casa." ,
    },
    {
        imagen: "img/tomate2.jpg",
        titulo:"Plagas del tomate " ,
        "Descripcion breve":"Aprende a identificar las principales plagas que pueden afectar las plantas de tomate."
,
    },
    {
        imagen: "img/tomate1.jpg",
        titulo:"Tomate y nutrición" ,
        "Descripcion breve": "Descubre cómo incorporar el tomate a una alimentación equilibrada",
    },
    {
        imagen: "img/tomate4.jpg" ,
        titulo:"Tomates orgánicos" ,
        "Descripcion breve":"Conoce las ventajas de cultivar tomates utilizando métodos naturales y sostenibles." ,
    }
] 


function InsertarArticulosProximos (arreglo){
const ContenidoProximo = document.querySelector(".contenido.proximo")
const div = document.createElement('div')
div.setAttribute('class','boxProximo')
div.innerHTML = `<div>
                    <img class="imag proximo" src=${proximosArticulos[arreglo].imagen} alt=" imagen de tomate">
                    <div class="proximo text">
                        <h3 class="titulo proximo">${proximosArticulos[arreglo].titulo}</h3>
                        <p class="descripcion proximo">${proximosArticulos[arreglo]["Descripcion breve"]}</p>
                    <div> 
                </div>`

ContenidoProximo.append(div)



}
InsertarArticulosProximos(0)
InsertarArticulosProximos(1)
InsertarArticulosProximos(2) 
InsertarArticulosProximos(3)
InsertarArticulosProximos(4)

const autor = {
    nombre: "Carlos Mendoza",
    imagen: "img/usuario.jpg",
    profesion: "Especialista en agricultura",
    usuario: 123456789,
    edad : 27,
    contacto :{
        telefono: "809-000-0000", correo: "carlos_mendoza@email.com"
    },
    historia: "Comenzó su interés por los tomates al descubrir la importancia que tienen en la alimentación y la agricultura. Con el tiempo, decidió crear Blog del Tomate, un espacio dedicado a compartir información, curiosidades, consejos de cultivo y recetas relacionadas con este fruto.",
    perfil() {
    const autoria = document.querySelector(".autoria")
    autoria.innerHTML = ` <div class="autor imagen"> 
                            <img src=${this.imagen} class="imag-autor" alt="Carlos Mendoza">
                          </div>  
                          <div class="autor persona"> 
                        
                            <h2 class="nombre-autor">${this.nombre}</h2>
                           
                            <div>
                                <p>${this.profesion}</p>
                                <p><strong>Edad:</strong> ${this.edad} años</p>
                                <p><strong>ID de usuario:</strong> ${this.usuario}</p>
                            </div>    
                          </div>  
                          <div class="autor contacto">  
                            <h3>Contacto</h3>
                            <p><strong>Teléfono:</strong> ${this.contacto.telefono}</p>
                            <p><strong>Correo:</strong> ${this.contacto.correo}</p>
                          </div>
                          <div class="autor historia">
                            <h3>Mi Historia</h3>
                            <p> ${this.historia}</p>
                          </div>` 
}}

autor.perfil()