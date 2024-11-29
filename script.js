const player = document.getElementById('player');

// Definir posición inicial y dirección inicial
const posicionInicial = { top: 380, left: 200 };
let position = { ...posicionInicial }; // Copia de la posición inicial
let direction = 0; // Dirección inicial (0 = Norte)

const tesoros = [
    { top: 230, left: 150, id: 'trofeo1', ventana: 'imagenes/ventanaTrofeo1.png', guardar: 'imagenes/trofeo1.png' },
    { top: 300, left: 200, id: 'trofeo2', ventana: 'imagenes/ventanaTrofeo2.png', guardar: 'imagenes/trofeo2.png' },
    { top: 100, left: 250, id: 'trofeo3', ventana: 'imagenes/ventanaTrofeo3.png', guardar: 'imagenes/trofeo3.png' },
    { top: 50, left: 100, id: 'trofeo4', ventana: 'imagenes/ventanaTrofeo4.png', guardar: 'imagenes/trofeo4.png' },
    { top: 300, left: 350, id: 'trofeo5', ventana: 'imagenes/ventanaTrofeo5.png', guardar: 'imagenes/trofeo5.png' },
    { top: 200, left: 50, id: 'trofeo6', ventana: 'imagenes/ventanaTrofeo6.png', guardar: 'imagenes/trofeo6.png' },
    { top: 150, left: 300, id: 'trofeo7', ventana: 'imagenes/ventanaTrofeo7.png', guardar: 'imagenes/trofeo7.png' },
    { top: 80, left: 200, id: 'trofeo8', ventana: 'imagenes/ventanaTrofeo8.png', guardar: 'imagenes/trofeo8.png' },
    { top: 320, left: 100, id: 'trofeo9', ventana: 'imagenes/ventanaTrofeo9.png', guardar: 'imagenes/trofeo9.png' },
    { top: 180, left: 180, id: 'trofeo10', ventana: 'imagenes/ventanaTrofeo10.png', guardar: 'imagenes/trofeo10.png' },
    { top: 250, left: 250, id: 'trofeo11', ventana: 'imagenes/ventanaTrofeo11.png', guardar: 'imagenes/trofeo11.png' },
    { top: 350, left: 50, id: 'trofeo12', ventana: 'imagenes/ventanaTrofeo12.png', guardar: 'imagenes/trofeo12.png' }
];


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

function excavar() {
    const currentTop = parseInt(position.top);
    const currentLeft = parseInt(position.left);

    // Buscar el tesoro en la posición actual
    const tesoroEncontrado = tesoros.find(t => t.top === currentTop && t.left === currentLeft);

    if (tesoroEncontrado) {
        // Mostrar la imagen de la ventana emergente
        showPopup(tesoroEncontrado.ventana);

        // Guardar la imagen del trofeo en el localStorage
        localStorage.setItem(tesoroEncontrado.id, tesoroEncontrado.guardar);
    } else {
        alert('No hay nada aquí para excavar.');
    }
}


// Función para mostrar la ventana emergente
function showPopup(image) {
    const overlay = document.getElementById('overlay');
    const popup = document.querySelector('.popup');

    // Mostrar la imagen de la ventana emergente
    popup.innerHTML = `<img src="${image}" alt="Tesoro" style="max-width: 100%; height: auto;">`;
    overlay.style.display = 'flex'; // Mostrar el overlay
}


// Función para cerrar la ventana emergente
function closePopup() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

// Función para reiniciar al jugador
function reset() {
    position = { ...posicionInicial };
    direction = 0;

    player.style.top = position.top + 'px';
    player.style.left = position.left + 'px';
    player.style.transform = `rotate(${direction}deg)`;

    // Eliminar todas las huellas
    document.querySelectorAll('.map img').forEach(footprint => footprint.remove());
}

// Configurar pestaña activa al cargar la página
window.onload = () => {
    const activeTab = localStorage.getItem('activeTab') || 'tab1';
    switchTab(activeTab);
    reset(); // Posicionar al jugador en la posición inicial
};

function switchTab(tabId) {
    // Guardar la pestaña activa en el localStorage
    localStorage.setItem('activeTab', tabId);

    // Ocultar todas las pestañas de contenido
    const allContents = document.querySelectorAll('.tab-content');
    allContents.forEach(content => content.classList.remove('active'));

    // Eliminar la clase "active" de todas las pestañas
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.classList.remove('active'));

    // Mostrar la pestaña de contenido correspondiente
    const activeContent = document.getElementById(`${tabId}-content`);
    if (activeContent) activeContent.classList.add('active');

    // Añadir la clase "active" a la pestaña seleccionada
    const activeTab = document.querySelector(`[onclick="switchTab('${tabId}')"]`);
    if (activeTab) activeTab.classList.add('active');
}
