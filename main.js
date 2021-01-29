//PROGRAMAR BOTON PARA SELECCIONAR MENU
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');//toggle para seleccionar y para deseleccionar    
}) ;

/*AGREGAR CLASES A EVENTO PARA EFECTO DE SCROLL*/
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-bannerone', {delay: 500});
ScrollReveal().reveal('.cards-bannertwo', {delay: 500});