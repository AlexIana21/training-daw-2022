window.addEventListener("load", function() {
    console.log('documento cargado');
    
    // Obtener enlaces 
    const enlaces = document.querySelectorAll('[id^="enlace_"]');
    
    
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(event) {
            event.preventDefault();
            toggleContent(enlace);
        });
    });
});

function toggleContent(enlace) {

    const numero = enlace.id.split("_")[1];
    const contenido = document.getElementById(`contenidos_${numero}`);
    
    if (contenido.style.display === "none") {
        contenido.style.display = "block";
        enlace.innerHTML = "Ocultar contenidos";
    } else {
        contenido.style.display = "none";
        enlace.innerHTML = "Mostrar contenidos";
    }
}