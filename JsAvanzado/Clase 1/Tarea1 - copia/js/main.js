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
                loadImages(url);
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
