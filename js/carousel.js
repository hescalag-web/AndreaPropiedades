// Carrusel simple
const imgs = document.querySelectorAll('.carousel img');
let index = 0;
setInterval(() => {
imgs.forEach(i => i.style.display = 'none');
imgs[index].style.display = 'block';
index = (index + 1) % imgs.length;
}, 3000);