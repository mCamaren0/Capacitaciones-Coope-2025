const apiUrl1 = "https://picsum.photos/v2/list?page=2&limit=30";

// fetch(apiUrl).then(response => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     } else {
//         return response.json();
//     }
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.error(error);
// });

// Funcion que carga la lista de imagenes del API
async function fetchImages() {
    const response = await fetch(apiUrl1); // Usa el API Fetch para hacer la peticion
    if (!response.ok) {   // Validar si la respuesta tiene errores
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {  // Si no hay errores, retorna los datos en formato JSON
        const data = await response.json();
        return data;
    }
}

// Funcion que construye un elemento de imagen
function buildImageElement(image) {
    const img = document.createElement("img");  // Creacion de un elemento <img>
    // Asignamos los atributos a la imagen creada
    img.src = image.download_url;
    img.alt = image.author;
    img.width = 200;
    img.height = 200;
    // Agregamos un evento de click a la imagen
    img.addEventListener("click", selectImage);
    // Retornamos el nuevo <img> creado
    return img;
}

// Funcion que construye una lista de imagenes usando ul li img 
function buildImageGallery(images) {
    const listElement = document.createElement("ul");  // Creamos un elemento de lista desordenada
    images.forEach(image => {    // Recorrecomos cada imagen y creamos un elemento de lista
        const listItem = document.createElement("li");
        const imgElement = buildImageElement(image);  // Usamos la funcion de crear imagen
        listItem.appendChild(imgElement);  // Agregar la img al elemento <li>
        listElement.appendChild(listItem); // Agregar el <li> al elemento <ul>
    })
    return listElement; // Retornamos la lista de imagenes
}

function selectImage(event) {
    const img = event.target;
    const selectedImageElement = document.getElementById("selectedImage");
    selectedImageElement.src = img.src;
    selectedImageElement.alt = img.alt;
}

function main() {
    // hacemos una llamada asincrona a la funcion fetchImages
    fetchImages().then(images => {   // Esperamos a que retorne las imagenes
        const galleryElement = buildImageGallery(images);
        const contentDiv = document.getElementById("imgList");
        contentDiv.appendChild(galleryElement);
    })
}

// .then() es una funcion que se ejecuta cuando la promesa se resuelve
// Pero no detiene la ejecucion del programa como el await
main();

