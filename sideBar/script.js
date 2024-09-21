// Write JavaScript code here
const closeBtn = document.getElementById('closeSidebarBtn');
const openBtn = document.getElementById('openSidebarBtn');
const sidebar = document.getElementById('sidebar');

closeBtn.addEventListener('click', () => {
    sidebar.style.right = '-250px';
});

openBtn.addEventListener('click', () => {
    sidebar.style.right = '0px';
});