// Mobile Menu Toggle
const mobileMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display === 'flex' ? 
    navMenu.style.display = 'none' : 
    navMenu.style.display = 'flex';
}

// Sostituisci la funzione con questa versione corretta
const highlightActiveSection = () => {
    const links = document.querySelectorAll('.nav-link');
    const currentPage = window.location.href.split('/').pop();
    
    links.forEach(link => {
        const linkPage = link.href.split('/').pop();
        if(currentPage === linkPage) {
            link.classList.add('active');
        }
    });
}

// PDF Preview Modal
/*const initPDFPreview = () => {
    const pdfLinks = document.querySelectorAll('.download-btn');
    
    pdfLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pdfUrl = link.parentElement.parentElement.dataset.pdf;
            openPDFModal(pdfUrl);
        });
    });
}

const openPDFModal = (pdfUrl) => {
    const modal = document.createElement('div');
    modal.className = 'pdf-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <iframe src="${pdfUrl}#view=fitH" frameborder="0"></iframe>
            <button class="close-modal">&times;</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
}*/

// Copy Code Functionality
const addCopyButtons = () => {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(codeBlock => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.innerHTML = '<i class="far fa-copy"></i>';
        
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(codeBlock.textContent)
                .then(() => {
                    copyButton.innerHTML = '<i class="fas fa-check"></i>';
                    setTimeout(() => {
                        copyButton.innerHTML = '<i class="far fa-copy"></i>';
                    }, 2000);
                });
        });
        
        codeBlock.parentElement.insertBefore(copyButton, codeBlock);
    });
}

// Theme Switcher (Light/Dark Mode)
function initThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeIcon(themeToggle, currentTheme);

    themeToggle.addEventListener("click", () => {
        let newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(themeToggle, newTheme);
    });
}

function updateThemeIcon(button, theme) {
    button.innerHTML = theme === "dark" 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
}

// Inizializza il tema al caricamento della pagina
document.addEventListener("DOMContentLoaded", initThemeToggle);

// Smooth Scroll
const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialize All Functions
document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        window.scrollY > 100 ? 
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)' : 
            header.style.boxShadow = 'none';
    });

    highlightActiveSection();
    initPDFPreview();
    addCopyButtons();
    initThemeSwitcher();
    smoothScroll();

    // Mobile Menu Handler
    document.querySelector('.menu-toggle').addEventListener('click', mobileMenu);
});

// Utility Functions
function debounce(func, timeout = 100) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}