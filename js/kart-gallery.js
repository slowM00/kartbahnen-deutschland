// Kart Gallery Toggle Funktionalität
function toggleKartGallery(galleryId) {
    const gallery = document.getElementById(galleryId);
    const button = event.target.closest('.kart-gallery-toggle');
    const arrow = button.querySelector('.arrow');
    
    if (gallery.classList.contains('show')) {
        gallery.classList.remove('show');
        button.classList.remove('active');
        arrow.textContent = '▼';
        button.setAttribute('aria-label', 'Weitere Bilder anzeigen');
    } else {
        gallery.classList.add('show');
        button.classList.add('active');
        arrow.textContent = '▲';
        button.setAttribute('aria-label', 'Bilder ausblenden');
    }
}

// Event Listener für alle Toggle Buttons
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.kart-gallery-toggle');
    
    toggleButtons.forEach(button => {
        // Entferne onclick Attribut und verwende Event Listener
        const onclickAttr = button.getAttribute('onclick');
        if (onclickAttr) {
            const galleryId = onclickAttr.match(/'([^']+)'/)[1];
            button.removeAttribute('onclick');
            
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const gallery = document.getElementById(galleryId);
                const arrow = this.querySelector('.arrow');
                
                if (gallery.classList.contains('show')) {
                    gallery.classList.remove('show');
                    this.classList.remove('active');
                    arrow.textContent = '▼';
                    this.setAttribute('aria-label', 'Weitere Bilder anzeigen');
                } else {
                    gallery.classList.add('show');
                    this.classList.add('active');
                    arrow.textContent = '▲';
                    this.setAttribute('aria-label', 'Bilder ausblenden');
                }
            });
            
            // Keyboard accessibility
            button.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        }
    });
});
