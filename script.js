document.addEventListener('DOMContentLoaded', () => {


    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const moonIcon = '<i class="fas fa-moon"></i>';
    const sunIcon = '<i class="fas fa-sun"></i>';


    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if(darkModeToggle) darkModeToggle.innerHTML = sunIcon;
        } else {
        if(darkModeToggle) darkModeToggle.innerHTML = moonIcon;
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.innerHTML = sunIcon;
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeToggle.innerHTML = moonIcon;
            }
        });
    }

    // Affichage de l'année actuelle dans le footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});