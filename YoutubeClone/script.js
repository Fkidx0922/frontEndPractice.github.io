const toggleMenu = document.querySelector('.toggle-menu');
const sidebar = document.querySelector('.sidebar');
const mainContainer = document.querySelector('.main-container');
const backdropFilter = document.querySelector('.backdrop-filter');

// TOGGLE ITEMS FUNCTION
const toggleItem = () => {
    sidebar.classList.toggle('active');
    mainContainer.classList.toggle('active'); 
    backdropFilter.classList.toggle('active');
};

// TOGGLE MENU EVENT CLICK
toggleMenu.addEventListener('click', toggleItem);
// BACKDROP FILTER MENU EVENT CLICK
backdropFilter.addEventListener('click', toggleItem);