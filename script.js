/* General */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

h1 {
    margin-top: 20px;
    color: #4d2e1e;
}

/* Sección de Introducción */
.intro {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    background-color: #e8dcc2; /* Igual al fondo del marco principal */
    padding: 20px;
    border-radius: 10px; /* Bordes redondeados */
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1); /* Sombra ligera */
    width: 90%;
    max-width: 1200px; /* Coincide con el marco principal */
    margin: 20px auto; /* Centrado */
}

.intro-text {
    flex: 1;
    color: #4d2e1e;
    font-family: 'Georgia', serif;
    font-size: 16px;
    line-height: 1.6;
}

.intro-image img {
    width: 200px;
    height: auto;
    border-radius: 10px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
}

/* Contenedor Principal */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 20px auto;
    width: 90%;
    max-width: 1200px;
}

/* Tabs Container */
.tabs-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

/* Línea horizontal */
.tabs-container .separator {
    width: 100%;
    max-width: 1200px;
    height: 2px;
    background-color: #6b3f29; /* Marrón oscuro */
    margin: 0;
    position: relative;
    top: -6px; /* Ajuste para que la línea quede tocando las pestañas nuevas */
}

/* Pestañas Nuevas */
.tabs-new {
    display: flex;
    gap: 10px;
    justify-content: center;
    position: relative;
    top: 5px; /* Eleva las pestañas nuevas ligeramente para que se apoyen sobre la línea */
}

/* Pestañas Numeradas */
.tabs {
    display: flex;
    gap: 10px;
    justify-content: center;
}

/* Contenedor Secundario (Mapa, Controles y Contenido) */
.main-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    background-color: #e8dcc2; /* Fondo igualado con la introducción */
    padding: 20px;
    border-radius: 10px; /* Bordes redondeados */
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1); /* Sombra ligera */
}

/* Controles */
.controls {
    width: 200px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #6b3f29;
    padding: 15px;
    border-radius: 10px;
    color: white;
    font-size: 14px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

/* Botones */
button {
    background-color: #4d2e1e;
    color: #fff;
    border: 1px solid #000;
    padding: 8px 10px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
    margin: 5px 0;
}

button:hover {
    background-color: #3e2418;
}

button:active {
    background-color: #29170e;
}

/* Mapa */
.map-image {
    width: 400px;
    height: 400px;
    background-color: #ddd;
    position: relative; /* Necesario para posicionar el jugador */
}

.map {
    width: 100%;
    height: 100%;
    background: url('mapa.png') no-repeat center center;
    background-size: cover;
    border: 5px solid #333;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
}

.player {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid black;
    position: absolute;
    bottom: 10px; /* Alineado al fondo del mapa */
    left: 50%;
    transform: translateX(-50%);
}

/* Marco de Contenidos */
.content-frame {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* Estilo de Pestañas */
.tab {
    background-color: #6b3f29;
    color: white;
    border: 1px solid #333;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
}

.tab:hover {
    background-color: #4d2e1e;
}

.tab:active {
    background-color: #29170e;
}

/* Cuando está activa, se invierten colores */
.tab.active {
    background-color: white;
    color: #6b3f29;
    font-weight: bold;
}

/* Tabs-New Estilo (Con esquinas superiores redondeadas) */
.tabs-new .tab {
    background-color: #6b3f29; /* Igual que las pestañas originales */
    color: #fff;
    border: 1px solid #333;
    border-top-left-radius: 10px; /* Bordes superiores redondeados */
    border-top-right-radius: 10px;
}

.tabs-new .tab.active {
    background-color: white;
    color: #6b3f29;
}

/* Contenido de las Pestañas */
.tab-content {
    flex: 1;
    max-width: 400px;
    height: auto;
    background-color: #fdf4e6;
    border: 2px solid #6b3f29;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    text-align: left;
    overflow-y: auto;
    display: none;
    font-family: 'Georgia', serif; /* Cambiado para que coincida con la introducción */
    font-size: 16px;
    line-height: 1.6;
}

.tab-content.active {
    display: block;
}
