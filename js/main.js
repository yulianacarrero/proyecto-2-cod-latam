//cambiando el html a traves del DOM //

// //seleccionar el h1 y cambiar el texto //

// const titulo = document.querySelector("h1");

// titulo.innerText='YULIANA CARRERO ';

// //seleccionar h2 y cambiar el texto//
// const titulo2 = document.querySelector("h2");
// titulo2.innerText='Habilidades';
// //seleccionar article y cambiar texto//
// const article = document.querySelector("article");

// article.innerText='Manejo  en herramientas como tecnologicas como: word, power point, excel, html, css, javascript, entre otras.';


//como desaparecer un texto del html con solo un clic//

  document.getElementById('hider').onclick= function() {
  document.getElementById('text').hidden = true;
}

//boton que cambia estilos */
/*boton que cambia estilos */
const changeFontBtn = document.querySelector('#change-font');
changeFontBtn.addEventListener('click', function() {
  document.body.classList.toggle('change-font');
});


// const menuItems = document.querySelectorAll('.menu-item');
// menuItems.forEach(function (el){
//     el.addEventListener('click', function(e) {
//         const currentItem = document.querySelector('.active');
//         currentItem.classList.remove('active');
//         e.target.classList.add('active');
// });
// });


// let parrafo = document.querySelector('#ejemplo');
/*parrafo.addEventListener('click', function(e) {
 e.target.classList.toggle('parrafo-modificado');
});*/