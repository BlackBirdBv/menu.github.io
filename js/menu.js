const navlists = document.querySelectorAll('.nav-list-item');
    
navlists.forEach(navlist => {
    navlist.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        navlist.classList.add('active');
    })
})

// let active = document.querySelector('#active');
// let item = document.querySelectorAll('li');

/*por ahora creo que tenemos un error de logica, ya que el elemento se posiciona encima del elemento li
pero lo sobre pone, cuando se supone que el li debe estar encima del elemento activo, por lo que no se
puede hacer click en el elemento li, ya que el elemento activo lo esta sobre poniendo
*/
// function slide(e){
//     active.style.top = e.offsetTop+"px";
// }

// item.forEach((e) => {
//     e.addEventListener('click', () => {
//         slide(e);
//     })
// })



