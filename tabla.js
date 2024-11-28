// Verificar si el trofeo debe aparecer en la tabla
window.onload = function() {
    // Leer la pestaña activa desde localStorage
    const activeTab = localStorage.getItem('activeTab') || 'tab1';

    // Asegurarse de que todas las pestañas pierdan la clase activa
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Agregar la clase activa a la pestaña correspondiente
    const activeButton = document.querySelector(`[onclick="redirectToIndex('${activeTab}')"]`);
    if (activeButton) activeButton.classList.add('active');
};


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



