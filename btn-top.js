let distancia = null;
const btnRetorna = document.querySelector('.btn-top i');
let timeOut = null;

iniciarEvento();

function iniciarEvento() {

    document.addEventListener("scroll", contar);
    btnRetorna.addEventListener("click", regresar);

    document.addEventListener("DOMContentLoaded", contar);
}

function contar(e) {

    if (window.scrollY < 210) {
        btnRetorna.style.display = "none";
    } else {
        btnRetorna.style.display = "block";
    }
}


function regresar(e) {

    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        window.scrollBy(0, -50);
        timeOut = setTimeout(function () {
            regresar();
        }, 10);
    } else {
        clearTimeout(timeOut);
    }
}
