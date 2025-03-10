
// Modo Oscuro
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const body = document.body;
const sunIcon = '<i class="ri-sun-line"></i>';
const moonIcon = '<i class="ri-moon-line"></i>';

// Comprobar el estado guardado del modo oscuro en el localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleDarkModeButton.innerHTML = moonIcon;
}

toggleDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Guardar el estado del modo oscuro en el localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleDarkModeButton.innerHTML = moonIcon;
    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleDarkModeButton.innerHTML = sunIcon;
    }
});

// Validación del formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const anniversaryDate = document.getElementById("anniversaryDate").value;
    // Modifica aquí la fecha de tu aniversario - AAAA-MM-DD
    if (anniversaryDate === "2002-09-07") {
        // Guardar la fecha de aniversario en localStorage
        localStorage.setItem("anniversaryDate", anniversaryDate);
        window.location.href = "dashboard.html"; // Redirige al dashboard
    } else {
        document.getElementById("errorMessage").classList.remove("hidden");
    }
});

// Animación de los corazones flotantes


// Crear corazones de forma continua


document.addEventListener('DOMContentLoaded', function () {
    // Verifica si Driver.js está cargado
    if (typeof window.driver === 'undefined' || typeof window.driver.js === 'undefined') {
        console.error('Driver.js no está cargado. Verifica la red o el CDN.');
        return;
    }

    console.log('Driver.js está listo para usarse.');

    // Verifica si el usuario ya ha visto el tour
    if (localStorage.getItem('tourVisto') === 'true') {
        console.log('El usuario ya ha visto el tour.');
        return; // No mostrar el tour si ya lo ha visto
    }

    const driver = window.driver.js.driver;

    const driverObj = driver({
        showProgress: true,
        showButtons: ['next', 'previous'],
        steps: [
            {
                element: '#toggleDarkMode',
                popover: {
                    title: 'Modo Oscuro/Claro',
                    description: 'Haz clic aquí para cambiar entre el modo oscuro y claro.',
                    side: 'bottom',
                    align: 'center'
                }
            },
            {
                element: '#anniversaryDate',
                popover: {
                    title: 'Fecha de mi cumple',
                    description: 'Pon la fecha de mi cumpleaños en estapacio te dare una pista es en año 2002.',
                    side: 'top',
                    align: 'center'
                }
            },
            {
                element: '#loginForm button',
                popover: {
                    title: 'Ingresar',
                    description: 'Haz clic aquí para enviar el formulario y continuar.',
                    side: 'top',
                    align: 'center'
                }
            }
        ]
    });

    console.log('Pasos del tour definidos.');

    // Iniciar el tour automáticamente cuando la página se carga
    driverObj.drive();
    console.log('Tour iniciado.');

    // Marcar que el usuario ha visto el tour
    localStorage.setItem('tourVisto', 'true');
});
