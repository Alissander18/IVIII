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
