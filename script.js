document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Control de Música
    const musicBtn = document.getElementById('musicBtn');
    const audio = document.getElementById('bgMusic');
    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            musicBtn.innerText = "♪ Reproducir Nuestra Canción";
            musicBtn.style.background = "transparent";
        } else {
            audio.play();
            musicBtn.innerText = "II Pausar Música";
            musicBtn.style.background = "var(--red-goth)";
            musicBtn.style.color = "white";
        }
        isPlaying = !isPlaying;
    });

    // 2. Efecto de aparición al hacer scroll (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Seleccionamos todos los párrafos y secciones
    const elementsToAnimate = document.querySelectorAll('p, .scroll-paper, .quote-box, .personal-letter');
    
    elementsToAnimate.forEach(el => {
        // Estilos iniciales para la animación
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 1s ease-out';
        observer.observe(el);
    });

});
