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
