window.onload = function () {
    const activeTab = localStorage.getItem('activeTab') || 'tab1';
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    const activeButton = document.querySelector(`[onclick="redirectToIndex('${activeTab}')"]`);
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
        const imageSrc = localStorage.getItem(trofeo.id);
        if (imageSrc) {
            const celda = document.getElementById(trofeo.celda);
            if (celda) {
                celda.innerHTML = `<img src="${imageSrc}" alt="Tesoro" style="max-width: 100%; height: auto;">`;
            }
        }
    });
};





