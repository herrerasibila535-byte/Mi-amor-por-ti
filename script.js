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

});<style>
    .contenedor-corazones-doble {
        display: flex;
        justify-content: center; /* Centra los dos corazones */
        gap: 20px;               /* Espacio entre los dos corazones */
        padding: 20px 0;
        background-color: transparent;
    }

    .corazon-animado {
        width: 150px;           /* Tamaño más pequeño para que quepan dos */
        height: auto;
        
        /* Resplandor rojo gótico */
        filter: drop-shadow(0 0 15px #ff0000);
        
        /* Animación de latido */
        animation: latido 2s infinite ease-in-out;
    }

    /* Hace que el segundo corazón lata un poco después para que no sean idénticos */
    .corazon-animado:last-child {
        animation-delay: 0.5s;
    }

    @keyframes latido {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
</style>
            
