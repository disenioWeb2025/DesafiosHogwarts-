/*Manoje de pestañas*/
function redirectToIndex(tabId) {
    try {
        // Guardar la pestaña activa en localStorage
        localStorage.setItem('activeTab', tabId);

        // Redirigir a index.html
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Error al redirigir:', error);
    }
}


window.onload = function () {
    // Configuración inicial para mantener activa la pestaña "Baúl Mágico"
    const tabs = document.querySelectorAll('.tabs .tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    const activeButton = document.querySelector(`[onclick="window.location.href='tabla.html'"]`);
    if (activeButton) activeButton.classList.add('active');

    // Mostrar los trofeos encontrados en la tabla
    const trofeos = [
        { id: 'trofeo1', celda: 'celda1' },
        { id: 'trofeo2', celda: 'celda2' },
        { id: 'trofeo3', celda: 'celda3' },
        { id: 'trofeo4', celda: 'celda4' },
        { id: 'trofeo5', celda: 'celda5' },
        { id: 'trofeo6', celda: 'celda6' },
        { id: 'trofeo7', celda: 'celda7' },
        { id: 'trofeo8', celda: 'celda8' },
        { id: 'trofeo9', celda: 'celda9' },
        { id: 'trofeo10', celda: 'celda10' },
        { id: 'trofeo11', celda: 'celda11' },
        { id: 'trofeo12', celda: 'celda12' }
    ];

    trofeos.forEach(trofeo => {
        const imageSrc = sessionStorage.getItem(trofeo.id);
        const celda = document.getElementById(trofeo.celda);
        if (celda) {
            celda.innerHTML = imageSrc
                ? `<img src="${imageSrc}" alt="Tesoro" style="max-width: 100%; height: auto;">`
                : '<img src="imagenes/marcoTrofeos.png" alt="Marco vacío" style="max-width: 100%; height: auto;">';
        }
    });
};
