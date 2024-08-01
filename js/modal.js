var m = document.querySelector('.backdrop');
console.log(m);
var modalBtnOpen = document.querySelector('.modal-btn-open');
console.log(modalBtnOpen);
var modalBtnClose = document.querySelector('.modal-btn-close');

var toggleModal = () => m.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);