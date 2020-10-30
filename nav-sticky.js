const barraMenu=document.getElementById('bg-head');

// Eventos
cargarEventListeners();

function cargarEventListeners() {
    // Se dispara cuando se hace click en añadir cursos
    document.addEventListener('scroll', calcularPixeles);
}

function calcularPixeles(e){
    e.preventDefault();


    if(window.scrollY>0){
        barraMenu.style.boxShadow="2px 2px 6px rgba(0,0,0,1)";
        barraMenu.style.opacity="0.3";
    }else{
        barraMenu.style.opacity="1";
        barraMenu.style.boxShadow="0px 0px 0px";

    }
}

