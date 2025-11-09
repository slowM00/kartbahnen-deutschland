
function openMenu() {
    document.getElementById('sideMenu').classList.add('open');
}
function closeMenu() {
    document.getElementById('sideMenu').classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', openMenu);
    }
    var closeBtn = document.getElementById('closeMenuBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
});
