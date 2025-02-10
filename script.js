// Aggiungi funzionalità responsive al menu
const mobileMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
}

// Gestione scroll per l'header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    // Aggiungi qui eventuali inizializzazioni
});
