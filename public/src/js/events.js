window.onload = () => {
    const bars = document.querySelector('#bars');
const navMenu = document.querySelector('#navMenu');
console.log(navMenu)

bars.addEventListener('click', showMenu);

function showMenu () {
    navMenu.classList.toggle('show-menu');
}
}