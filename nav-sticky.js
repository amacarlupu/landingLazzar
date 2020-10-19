const barraMenu=document.getElementById('bg-head');

// Eventos
cargarEventListeners();

function cargarEventListeners() {
    // Se dispara cuando se hace click en añadir cursos
    barraMenu.addEventListener('scroll', calcularPixeles);
}

function calcularPixeles(e){
    e.preventDefault();

    console.log(e,'hola');
    if(window.scrollY>0){
        barraMenu.style.opacity="0.8";
    }else{
        barraMenu.style.opacity="1";
    }
}

