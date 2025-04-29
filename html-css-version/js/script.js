
function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.getElementById("mobile-menu").style.display = "none";
    }
});
