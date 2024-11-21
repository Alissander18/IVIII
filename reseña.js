function mostrarFormulario() {
    const formContainer = document.getElementById('form-container');
    formContainer.style.display = 'block'; // Muestra el formulario
}

function agregarReseña() {
    const reseñaInput = document.getElementById('reseña-input');
    const reseñasContainer = document.getElementById('reseñas-container');

    if (reseñaInput.value.trim() !== "") { // Verifica que no esté vacío
        const nuevaReseña = document.createElement('div');
        nuevaReseña.textContent = reseñaInput.value; // Agrega el texto de la reseña
        reseñasContainer.appendChild(nuevaReseña); // Añade la reseña al contenedor

        reseñaInput.value = ""; // Limpia el campo de entrada
        document.getElementById('form-container').style.display = 'none'; // Oculta el formulario
    } else {
        alert("Por favor, escribe una reseña antes de enviar.");
    }
}
