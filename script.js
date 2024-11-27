const player = document.getElementById('player');
let position = { top: 380, left: 200 };
let direction = 0;

function rotate(dir) {
    switch (dir) {
        case 'Norte': direction = 0; break;
        case 'Sur': direction = 180; break;
        case 'Este': direction = 90; break;
        case 'Oeste': direction = 270; break;
    }
    player.style.transform = `rotate(${direction}deg)`;
}

function advance(steps) {
    const stepSize = 25;
    for (let i = 0; i < steps; i++) {
        const currentTop = position.top;
        const currentLeft = position.left;

        switch (direction) {
            case 0: position.top = Math.max(0, position.top - stepSize); break;
            case 180: position.top = Math.min(375, position.top + stepSize); break;
            case 90: position.left = Math.min(375, position.left + stepSize); break;
            case 270: position.left = Math.max(0, position.left - stepSize); break;
        }

        leaveFootprint(currentTop, currentLeft, direction);

        player.style.top = position.top + 'px';
        player.style.left = position.left + 'px';
    }
}

function leaveFootprint(top, left, rotation) {
    const footprint = document.createElement('img');
    footprint.src = 'huella.png';
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
    alert('¡Excavando en la posición actual!');
}

function reset() {
    position = { top: 380, left: 200 };
    direction = 0;
    player.style.top = position.top + 'px';
    player.style.left = position.left + 'px';
    player.style.transform = `rotate(${direction}deg)`;

    document.querySelectorAll('.map img').forEach(footprint => footprint.remove());
}


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



function excavar() {
    alert('¡Excavando en la posición actual!');
}

function reset() {
    position = { top: 380, left: 200 };
    direction = 0;
    player.style.top = position.top + 'px';
    player.style.left = position.left + 'px';
    player.style.transform = `rotate(${direction}deg)`;

    document.querySelectorAll('.map img').forEach(footprint => footprint.remove());
}
