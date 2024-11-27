const player = document.getElementById('player');

// Definir posición inicial y dirección inicial
const posicionInicial = { top: 380, left: 200 };
let position = { ...posicionInicial }; // Copia de la posición inicial
let direction = 0; // Dirección inicial (0 = Norte)

// Función para rotar el jugador
function rotate(dir) {
    switch (dir) {
        case 'Norte': direction = 0; break;
        case 'Sur': direction = 180; break;
        case 'Este': direction = 90; break;
        case 'Oeste': direction = 270; break;
    }
    player.style.transform = `rotate(${direction}deg)`;
}

// Función para avanzar en la dirección actual
function advance(steps) {
    const stepSize = 25; // Tamaño de cada paso en píxeles

    let i = 0;

    function moveStep() {
        if (i >= steps) return; // Detener el bucle cuando se completen los pasos

        // Crear la huella en la posición actual ANTES de mover al jugador
        leaveFootprint(position.top, position.left, direction);

        // Calcular nueva posición basada en la dirección
        switch (direction) {
            case 0: position.top = Math.max(0, position.top - stepSize); break; // Norte
            case 180: position.top = Math.min(375, position.top + stepSize); break; // Sur
            case 90: position.left = Math.min(375, position.left + stepSize); break; // Este
            case 270: position.left = Math.max(0, position.left - stepSize); break; // Oeste
        }

        // Actualizar visualmente la posición del jugador
        player.style.top = position.top + 'px';
        player.style.left = position.left + 'px';

        i++; // Incrementar el contador de pasos
        setTimeout(moveStep, 200); // Llamar al siguiente paso con un retraso de 200ms
    }

    moveStep(); // Iniciar el movimiento
}

// Función para dejar una huella en la posición actual
function leaveFootprint(top, left, rotation) {
    const footprint = document.createElement('img');
    footprint.src = 'imagenes/huella.png'; // Ruta a la imagen de la huella
    footprint.alt = 'Huella';
    footprint.style.position = 'absolute';
    footprint.style.width = '20px';
    footprint.style.height = '20px';
    footprint.style.top = top + 'px';
    footprint.style.left = left + 'px';
    footprint.style.transform = `rotate(${rotation}deg)`;

    document.querySelector('.map').appendChild(footprint);
}

// Función para excavar en la posición actual
function excavar() {
    alert(`¡Excavando en la posición actual! Posición: top=${position.top}, left=${position.left}`);
}

// Función para reiniciar al jugador
function reset() {
    // Restaurar la posición inicial
    position = { ...posicionInicial };
    direction = 0;

    // Actualizar la posición y dirección del jugador
    player.style.top = position.top + 'px';
    player.style.left = position.left + 'px';
    player.style.transform = `rotate(${direction}deg)`;

    // Eliminar todas las huellas
    document.querySelectorAll('.map img').forEach(footprint => footprint.remove());
}

// Función para cambiar de pestaña
function switchTab(tabId) {
    // Oculta todo el contenido
    const allContents = document.querySelectorAll('.tab-content');
    allContents.forEach(content => content.style.display = 'none');

    // Elimina la clase "active" de todas las pestañas
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.classList.remove('active'));

    // Muestra el contenido de la pestaña seleccionada
    const activeContent = document.getElementById(`${tabId}-content`);
    if (activeContent) activeContent.style.display = 'block';

    // Añade la clase "active" a la pestaña seleccionada
    const activeTab = document.querySelector(`[onclick="switchTab('${tabId}')"]`);
    if (activeTab) activeTab.classList.add('active');
}

// Configurar posición inicial al cargar la página
window.onload = () => reset();
