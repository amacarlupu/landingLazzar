const parallax = document.querySelector('.parallax');
const parallaxCaracter = document.querySelector('.parallaxCarac');
const parallaxCaracter02 = document.querySelector('.parallaxCarac02');



cargarEventListeners();

function cargarEventListeners(){
    document.addEventListener('scroll', efectoParallax);
}

function efectoParallax( e ){

    e.preventDefault();
    
    let scrollPosition = window.pageYOffset;
    // console.log('Scroll',scrollPosition);
    parallax.style.transform = 'translateY(' + scrollPosition*0.2 + 'px)';
    parallaxCaracter.style.transform = 'translateY(' + scrollPosition*0.4 + 'px)';
    // parallaxCaracter02.style.transform = 'translateY(' + scrollPosition*0.4 + 'px)';

}