/**
 * Handle menu toggle
 */
const toggleMenuHandler = event => {
    const menuOptions = document.getElementById('mobile-navbar');
    if (menuOptions.style.display !== 'none') {
        menuOptions.style.display = 'none';
    } else {
        menuOptions.style.display = 'flex';
    }
};
document.querySelector('.menu').addEventListener('click', toggleMenuHandler);