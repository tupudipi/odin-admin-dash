const openNav = document.querySelector('.burger-button');
const closeNav = document.querySelector('.close-nav');
const nav = document.querySelector('.sidebar-buttons');

openNav.addEventListener('click', () => {
    nav.style.visibility = 'visible';
    nav.style.opacity = '1';
    openNav.style.visibility = 'hidden';
});

closeNav.addEventListener('click', () => {
    nav.style.visibility = 'hidden';
    nav.style.opacity = '0';
    openNav.style.visibility = 'visible';
});

const announcementsBtn = document.querySelector('.announcements-button');
const trendingBtn = document.querySelector('.trending-button');
const announcementsContent = document.querySelector('.announcements-content');
const trendingContent = document.querySelector('.trending-content');

announcementsBtn.addEventListener('click', () => {
    announcementsContent.classList.toggle('show');
});

trendingBtn.addEventListener('click', () => {
    trendingContent.classList.toggle('show');
});

