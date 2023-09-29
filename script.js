const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', function () {
  menu.classList.toggle('open');
});

const scrollContainer = document.querySelector('.scroll-container');

function scrollLeft() {
  scrollContainer.scrollLeft -= 50; // Adjust the scroll speed as needed
}

function scrollRight() {
  scrollContainer.scrollLeft += 50; // Adjust the scroll speed as needed
}
