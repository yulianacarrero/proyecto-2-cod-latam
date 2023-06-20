/*boton que cambia estilos */
const changeFontBtn = document.querySelector('#change-font');
changeFontBtn.addEventListener('click', function() {
  document.body.classList.toggle('change-font');
});
