const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

let open = false;
// menu.style.display = 'none';
menuButton.addEventListener('click', function (event) {
  event.preventDefault();
  if (open) {
    menu.style.display = 'none';
    open = false;
  } else {
    menu.style.display = 'block';
    open = true;
  }
  //
  // menu.style.display = 'block';
});

const scrollContainer = document.querySelector('.scroll-container');

function scrollLeft() {
  scrollContainer.scrollLeft -= 50; // Adjust the scroll speed as needed
}

function scrollRight() {
  scrollContainer.scrollLeft += 50; // Adjust the scroll speed as needed
}
