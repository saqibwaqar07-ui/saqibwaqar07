// Change header background when clicked
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        header.style.backgroundColor = '#00b4d8';
        alert("Hello! You clicked the header.");
    });
});
