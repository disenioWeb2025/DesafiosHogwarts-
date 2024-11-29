const player = document.getElementById('player');

// Definir posición inicial y dirección inicial
const posicionInicial = { top: 380, left: 200 };
let position = { ...posicionInicial }; // Copia de la posición inicial
let direction = 0; // Dirección inicial (0 = Norte)

const tesoros = [
    { top: 230, left: 150, id: 'trofeo1', ventana: 'imagenes/ventanaTrofeo1.png', guardar: 'imagenes/trofeo1.png' },
    { top: 330, left: 100, id: 'trofeo2', ventana: 'imagenes/ventanaTrofeo2.png', guardar: 'imagenes/trofeo2.png' },
    { top: 280, left: 175, id: 'trofeo3', ventana: 'imagenes/ventanaTrofeo3.png', guardar: 'imagenes/trofeo3.png' },
    { top: 155, left: 275, id: 'trofeo4', ventana: 'imagenes/ventanaTrofeo4.png', guardar: 'imagenes/trofeo4.png' },
    { top: 130, left: 150, id: 'trofeo5', ventana: 'imagenes/ventanaTrofeo5.png', guardar: 'imagenes/trofeo5.png' },
    { top: 305, left: 100, id: 'trofeo6', ventana: 'imagenes/ventanaTrofeo6.png', guardar: 'imagenes/trofeo6.png' },
    { top: 130, left: 75, id: 'trofeo7', ventana: 'imagenes/ventanaTrofeo7.png', guardar: 'imagenes/trofeo7.png' },
    { top: 130, left: 325, id: 'trofeo8', ventana: 'imagenes/ventanaTrofeo8.png', guardar: 'imagenes/trofeo8.png' },
    { top: 255, left: 275, id: 'trofeo9', ventana: 'imagenes/ventanaTrofeo9.png', guardar: 'imagenes/trofeo9.png' },
    { top: 30, left: 325, id: 'trofeo10', ventana: 'imagenes/ventanaTrofeo10.png', guardar: 'imagenes/trofeo10.png' },
    { top: 380, left: 200, id: 'trofeo11', ventana: 'imagenes/ventanaTrofeo11.png', guardar: 'imagenes/trofeo11.png' },
    { top: 155, left: 350, id: 'trofeo12', ventana: 'imagenes/ventanaTrofeo12.png', guardar: 'imagenes/trofeo12.png' }
];

// Función para rotar el jugador
function rotate(dir) {
    const directions = { Norte: 0, Sur: 180, Este: 90, Oeste: 270 };
    direction = directions[dir] || 0;
    player.style.transform = `rotate(${direction}deg)`;
}

// Función para avanzar en la dirección actual
function advance(steps) {
    const stepSize = 25; // Tamaño de cada paso en píxeles
    let i = 0;

    function moveStep() {
        if (i >= steps) return;

        leaveFootprint(position.top, position.left, direction); // Dejar huella antes de mover
        switch (direction) {
            case 0: position.top = Math.max(0, position.top - stepSize); break; // Norte
            case 180: position.top = Math.min(375, position.top + stepSize); break; // Sur
            case 90: position.left = Math.min(375, position.left + stepSize); break; // Este
            case 270: position.left = Math.max(0, position.left - stepSize); break; // Oeste
        }
        player.style.top = `${position.top}px`;
        player.style.left = `${position.left}px`;

        i++;
        setTimeout(moveStep, 200);
    }

    moveStep();
}

// Función para dejar una huella
function leaveFootprint(top, left, rotation) {
    const footprint = document.createElement('img');
    footprint.src = 'imagenes/huella.png';
    footprint.alt = 'Huella';
    Object.assign(footprint.style, {
        position: 'absolute',
        width: '20px',
        height: '20px',
        top: `${top}px`,
        left: `${left}px`,
        transform: `rotate(${rotation}deg)`
    });

    document.querySelector('.map').appendChild(footprint);
}

// Función para excavar
function excavar() {
    const currentTop = parseInt(position.top, 10);
    const currentLeft = parseInt(position.left, 10);
    const tesoroEncontrado = tesoros.find(t => t.top === currentTop && t.left === currentLeft);

    if (tesoroEncontrado) {
        showPopup(tesoroEncontrado.ventana);
        sessionStorage.setItem(tesoroEncontrado.id, tesoroEncontrado.guardar);
    } else {
         // Mostrar la imagen de "no hay nada aquí" (ventanaTrofeo0.png)
         console.log(`Current Position: Top=${position.top}, Left=${position.left}`);
         showPopup('imagenes/ventanaTrofeo0.png');
    }
}

// Función para mostrar la ventana emergente
function showPopup(image) {
    const overlay = document.getElementById('overlay');
    const popup = document.querySelector('.popup');
    popup.innerHTML = `<img src="${image}" alt="Tesoro" style="max-width: 100%; height: auto;">`;
    overlay.style.display = 'flex';
}

// Función para cerrar la ventana emergente
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
}

// Función para reiniciar al jugador
function reset() {
    position = { ...posicionInicial };
    direction = 0;
    player.style.top = `${position.top}px`;
    player.style.left = `${position.left}px`;
    player.style.transform = 'rotate(0deg)';
    document.querySelectorAll('.map img').forEach(footprint => footprint.remove());
}

// Función para cambiar de pestaña
function switchTab(tabId) {
    localStorage.setItem('activeTab', tabId);

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none';
    });

    document.querySelectorAll('.tabs .tab').forEach(tab => tab.classList.remove('active'));

    const activeContent = document.getElementById(`${tabId}-content`);
    if (activeContent) {
        activeContent.classList.add('active');
        activeContent.style.display = 'block';
    }

    const activeTab = document.querySelector(`[onclick="switchTab('${tabId}')"]`);
    if (activeTab) activeTab.classList.add('active');
}

// Configurar pestaña activa al cargar la página
window.onload = () => {
    const activeTab = localStorage.getItem('activeTab') || 'tab1';
    switchTab(activeTab);
    reset();
};
