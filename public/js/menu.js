const navlists = document.querySelectorAll('.nav-list-item');
    
navlists.forEach(navlist => {
    navlist.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        navlist.classList.add('active');
    })
})

const active = document.querySelector('#active');
const item = document.querySelectorAll('li');

function slide(e){
    active.style.top = e.offsetTop+"px";
}

item.forEach((e) => {
    e.addEventListener('click', () => {
        slide(e);
    })
})

function verifyWhereIsActive() {
    for (let i = 0; i < item.length; i++) {
        if (item[i].classList.contains('active')) {
            slide(item[i]);
        }
    }
}

verifyWhereIsActive()

// codigo javascript para el dropdown menu
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("user-dropdown");
    const dropdownContent = dropdown.querySelector(".dropdown-content");

    dropdown.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita que el clic se propague a elementos internos
        dropdownContent.classList.toggle("open");
    });

    dropdownContent.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita que el clic en elementos internos se propague al menú
    });
});
