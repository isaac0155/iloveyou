$(document).ready(function () {
    // Función para crear una nube
    function createCloud() {
        const cloud = document.createElement("div");
        cloud.className = "cloud";
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * 50 + 10; // Ajusta la altura de las nubes
        cloud.style.left = `${x}px`;
        cloud.style.top = `${y}px`;
        document.body.appendChild(cloud);

        // Animación de la nube
        $(cloud).animate(
            { left: -100 },
            15000, // Ajusta la velocidad de la nube
            "linear",
            function () {
                // Cuando la nube sale de la pantalla, la eliminamos
                $(this).remove();
            }
        );
    }

    // Función para crear estrellas parpadeantes
    function createStar() {
        const star = document.createElement("div");
        star.className = "star";
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        document.body.appendChild(star);
    }

    // Crear nubes y estrellas de forma continua
    setInterval(createCloud, 3000); // Ajusta la frecuencia de las nubes
    setInterval(createStar, 1000); // Aumenta la frecuencia de las estrellas
    //background: linear-gradient(to bottom,#002366,#33004d, #660033, #ff3300, #ff5533, #ff7f50, #ffaa80,#ffd5c2);
    //margin-top: 30%;

    // Obtén el contenedor del mensaje
    const messageContainer = document.querySelector('.message-container');

    // Agrega un event listener para detener la animación cuando se haga clic
    messageContainer.addEventListener('click', function () {
        // Clase CSS para detener la animación
        this.classList.add('no-animation');

        // Establece un tiempo de espera antes de volver a habilitar la animación
        setTimeout(() => {
            this.classList.remove('no-animation');
        }, 500); // 500ms es la duración de la animación CSS
    });

});
