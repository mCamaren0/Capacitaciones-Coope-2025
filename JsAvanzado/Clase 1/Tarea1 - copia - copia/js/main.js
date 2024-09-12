const routes = {
    '/': 'main',
    '/plantillas/index.html': 'index.html',
    '/plantillas2/index.html': 'index.html'
};

function loadPage(url) {
    const contentDiv = document.getElementById('content');
    
    if (routes[url] === 'main') {
        contentDiv.innerHTML = '<h1>Bienvenido a la página principal</h1>';
    } else if (routes[url]) {
        fetch(routes[url])
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
                if (url === '/plantillas/index.html') {
                    loadImages('https://dog.ceo/api/breeds/image/random');
                } else if (url === '/plantillas2/index.html') {
                    // Usa la API de The Cat API
                    loadImages('https://api.thecatapi.com/v1/images/search?limit=1');
                }
            })
            .catch(err => console.error('Error loading page:', err));
    } else {
        contentDiv.innerHTML = '<h1>404: Page Not Found</h1>';
    }
}

function navigateTo(url) {
    window.history.pushState({}, '', url);
    loadPage(url);
}

window.onpopstate = () => {
    loadPage(window.location.pathname);
};

document.addEventListener('DOMContentLoaded', () => {
    loadPage(window.location.pathname);

    document.body.addEventListener('click', (event) => {
        if (event.target.matches('[data-link]')) {
            event.preventDefault();
            navigateTo(event.target.getAttribute('href'));
        }
    });
});