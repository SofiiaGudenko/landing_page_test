const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const body = document.body;

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
  body.classList.toggle('lock');
});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    burger.classList.remove('active');
    body.classList.remove('lock');
  });
});