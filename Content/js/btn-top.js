let distancia = null;
const btnRetorna = document.querySelector('.btn-top i');
let timeOut = null;

iniciarEvento();

function iniciarEvento() {

    document.addEventListener("scroll", contar);
    document.addEventListener("DOMContentLoaded", contar);
}

function contar(e) {

    if (window.scrollY < 210) {
        btnRetorna.style.display = "none";
    } else {
        btnRetorna.style.display = "block";
    }
}

