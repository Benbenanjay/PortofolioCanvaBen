const menuBtn = document.getElementById('menuBtn');
const menuOverlay = document.getElementById('menuOverlay');
const backdropOverlay = document.getElementById('backdropOverlay');

function toggleMenu() {
    menuOverlay.classList.toggle('open');
    backdropOverlay.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleMenu);
backdropOverlay.addEventListener('click', toggleMenu);

const pages = {
    home: document.getElementById('homePage'),
    about: document.getElementById('aboutPage'),
    contact: document.getElementById('contactPage')
};

function navigateToPage(pageId) {
    Object.values(pages).forEach(page => page.classList.remove('active'));
    pages[pageId].classList.add('active');
    if (menuOverlay.classList.contains('open')) toggleMenu();
    window.scrollTo(0, 0);
}

document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        navigateToPage(pageId);
    });
});

document.querySelectorAll('.bg-option').forEach(option => {
    option.addEventListener('click', () => {
        const fromColor = option.getAttribute('data-from');
        const toColor = option.getAttribute('data-to');
        document.body.className = `bg-gradient-to-br from-${fromColor} to-${toColor} min-h-screen`;
    });
});
