function mostrarFormulario() {
    document.getElementById('form-container').style.display = 'block';
}

function agregarReseña() {
    const reseñaInput = document.getElementById('reseña-input').value;
    const estrellas = document.getElementById('estrellas').value;

    if (reseñaInput.trim() === '') {
        alert('Por favor, escribe una reseña.');
        return;
    }

    const reseñasContainer = document.getElementById('reseñas-container');
    const nuevaReseña = document.createElement('div');
    nuevaReseña.className = 'reseña';
    nuevaReseña.innerHTML = `
        <p>${reseñaInput}</p>
        <p class="estrellas">${'★'.repeat(estrellas)}${'☆'.repeat(5 - estrellas)}</p>
    `;

    reseñasContainer.appendChild(nuevaReseña);
    document.getElementById('reseña-input').value = '';
    document.getElementById('estrellas').value = 5;
    document.getElementById('form-container').style.display = 'none';
}

let estrellasSeleccionadas = 0;

function mostrarFormulario() {
    document.getElementById('form-container').style.display = 'block';
    estrellasSeleccionadas = 0; // Reinicia la selección al mostrar el formulario
    actualizarEstrellas();
}

function agregarReseña() {
    const reseñaInput = document.getElementById('reseña-input').value;

    if (reseñaInput.trim() === '' || estrellasSeleccionadas === 0) {
        alert('Por favor, escribe una reseña y selecciona una calificación.');
        return;
    }

    const reseñasContainer = document.getElementById('reseñas-container');
    const nuevaReseña = document.createElement('div');
    nuevaReseña.className = 'reseña';
    nuevaReseña.innerHTML = `
        <p>${reseñaInput}</p>
        <p class="estrellas">${'★'.repeat(estrellasSeleccionadas)}${'☆'.repeat(5 - estrellasSeleccionadas)}</p>
    `;

    reseñasContainer.appendChild(nuevaReseña);
    document.getElementById('reseña-input').value = '';
    estrellasSeleccionadas = 0;
    actualizarEstrellas();
    document.getElementById('form-container').style.display = 'none';
}

function actualizarEstrellas() {
    const estrellas = document.querySelectorAll('.estrella');
    estrellas.forEach((estrella, index) => {
        if (index < estrellasSeleccionadas) {
            estrella.classList.add('seleccionada');
        } else {
            estrella.classList.remove('seleccionada');
        }
    });
}

// Agregar evento de clic a las estrellas
document.querySelectorAll('.estrella').forEach(estrella => {
    estrella.addEventListener('click', function() {
        estrellasSeleccionadas = parseInt(this.getAttribute('data-value'));
        actualizarEstrellas();
    });
});
