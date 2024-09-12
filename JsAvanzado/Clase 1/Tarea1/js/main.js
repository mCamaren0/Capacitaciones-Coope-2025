// Agregar evento sobre el click
document.addEventListener("click", (e) => {
    // Tomamos el evento del click
    const { target } = e; // Obtenemos el elemento que se hizo click
    if (!target.matches("nav div ul li a")) {  // Validamos si el elemento al que se hizo click, es un enlace o link
        return;   // Si no es un enlace, no hacemos nada
    }
    e.preventDefault();  // Prevenimos el comportamiento por defecto del enlace
    // Funcion que procese el enlace o la URL
    urlRouter();
});

const routes = {
    "/": {
        title: "Home",
        template: "/index.html",
        url: "/",
        description: "Home page"
    },
    "/fotos1": {
        title: "About",
        template: "/plantillas/index.html",
        url: "/fotos1",
        description: "About us page"
    },
    "/fotos2": {
        title: "Contact",
        template: "/plantillas2/index.html",
        url: "/fotos2",
        description: "Contact us page"
    }
}

const urlRouter = (event) => {
    event = event || window.event; // Obtenemos el evento del enlace
    event.preventDefault(); // Prevenimos el comportamiento por defecto del enlace
    window.history.pushState({}, "", event.target.href); // Cambiamos la URL en el navegador
    // Procesamos la URL -> Funcion
    urlChange();
}

const urlChange = async () => {
    const location = window.location.pathname; // Obtenemos la URL actual
    if (location.length == 0) {
        location = "/";
    }
    const route = routes[location] || routes['404']; // Obtenemos la ruta de la URL
    const content = await fetch(route.template)
    .then( (response) => response.text()
    ); // Obtenemos el contenido de la plantilla
    const contentDiv = document.getElementById("content"); // Obtenemos el div con el id content
    contentDiv.innerHTML = content; // Agregamos el contenido a la pagina
    document.title = route.title; // Cambiamos el titulo de la pagina
    // document
    //  .querySelector('meta[name="description"]')
    //  .setAttribute("content", route.description); // Cambiamos la descripcion de la pagina
}

window.onpopstate = urlChange;
window.route = urlRouter;
urlChange();


const script = document.createElement('script');
script.src = 'main1.js';
document.head.appendChild(script);

const script2 = document.createElement('script');
script.src = 'main2.js';
document.head.appendChild(script2);