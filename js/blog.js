const EnlacesHeader = document.querySelectorAll(".headerEnlaces") //Seleciono a los enlaces del Header
const ImagenesModos =[
    "img/modo-claro.png",
    "img/modo_nocturno_blanco.png"
];
const ImagenModo = document.getElementById("modo")



EnlacesHeader.forEach(enlace => { 
    modificarEnlaces(enlace, "white", "#D5303E", "mouseover")
    modificarEnlaces(enlace, "", "", "mouseout")
    
});

function modificarEnlaces(elemento, color, fondo,evento){
    elemento.addEventListener(evento, () => {
        elemento.style.color = color
        elemento.style.background = fondo
    } )

}
CambioModo(ImagenModo, "click", 1, "#121212", "#330000", "#DFDDDD" )
CambioModo(ImagenModo, "dblclick", 0, "#FFF8E7" ,"#DFDDDD","#330000")


function CambioModo (elemento, evento, arreglo, UnoFondo, DosFondo, UnoColor ){
    const body= document.querySelector("body")
    const contenidos = document.querySelectorAll(".contenido")
    const Header = document.querySelector(".headerBlog")
    const footer = document.querySelector("footer")
    
 elemento.addEventListener(evento, ()=>{
    
    elemento.src = ImagenesModos[arreglo]
    body.style.background =  UnoFondo
    Header.style.background = DosFondo
    body.style.color = UnoColor
    document.getElementById("OcultarSectionNav").src = "img/grid_blanco.png"
    contenidos.forEach((contenido) =>{
     contenido.style.background = DosFondo
    })
 })   
}
ocultaNavSection("click", "block", 1)
ocultaNavSection("dblclick", "none", 0)

function ocultaNavSection( evento, Valor1, array){
    const ImagOcultarSection = document.getElementById("OcultarSectionNav")
    const SectionNav = document.querySelector(".contenido.navegacion")

    const arreglo =[
        "img/grid.png",
        "img/sidebar.png"
    ]
    ImagOcultarSection.addEventListener(evento, () => {
        SectionNav.style.display = Valor1
        ImagOcultarSection.src = arreglo[array]
    })
    
}
