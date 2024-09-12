
        /*function loadImages(url) {
            const apiUrl = 'https://dog.ceo/api/breeds/image/random'; // URL correcta de la API
        
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const imageContainer = document.getElementById('imageContainer');
                    if (imageContainer) {
                        imageContainer.innerHTML = '';
                        const img = document.createElement('img');
                        img.src = data.message;
                        imageContainer.appendChild(img);
                    }
                })
                .catch(error => console.error('Error al cargar las imágenes:', error));
        }*/
        

        /*function loadImages(apiUrl) {
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const imageContainer = document.getElementById('imageContainer');
                    if (imageContainer) {
                        imageContainer.innerHTML = '';
                        if (apiUrl.includes('dog.ceo')) {
                            const img = document.createElement('img');
                            img.src = data.message;
                            imageContainer.appendChild(img);
                        } else if (apiUrl.includes('cataas.com')) {
                            const img = document.createElement('img');
                            img.src = `https://cataas.com/cat?${data.url}`;
                            imageContainer.appendChild(img);
                        }
                    }
                })
                .catch(error => console.error('Error al cargar las imágenes:', error));
        }*/

                /*function loadImages(apiUrl) {
                    // Si la URL es para la API de cataas, añade un parámetro aleatorio para obtener diferentes imágenes
                    const modifiedApiUrl = apiUrl.includes('cataas.com')
                        ? `${apiUrl}&${Date.now()}` // Añade un parámetro de timestamp para evitar caché
                        : apiUrl;
                
                    fetch(modifiedApiUrl)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then(data => {
                            const imageContainer = document.getElementById('imageContainer');
                            if (imageContainer) {
                                imageContainer.innerHTML = '';
                                if (apiUrl.includes('dog.ceo')) {
                                    const img = document.createElement('img');
                                    img.src = data.message;
                                    imageContainer.appendChild(img);
                                } else if (apiUrl.includes('cataas.com')) {
                                    const img = document.createElement('img');
                                    img.src = `https://cataas.com/cat?${data.url}`;
                                    imageContainer.appendChild(img);
                                }
                            }
                        })
                        .catch(error => console.error('Error al cargar las imágenes:', error));
                }*/
                
                        const API_KEY = 'DEMO-API-KEY'; // Reemplaza esto con tu clave API

                        function loadImages(apiUrl) {
                            const modifiedApiUrl = apiUrl.includes('thecatapi.com')
                                ? `${apiUrl}&api_key=${API_KEY}` // Añade la clave API a la URL
                                : apiUrl;
                        
                            fetch(modifiedApiUrl)
                                .then(response => {
                                    if (!response.ok) {
                                        throw new Error('Network response was not ok');
                                    }
                                    return response.json();
                                })
                                .then(data => {
                                    const imageContainer = document.getElementById('imageContainer');
                                    if (imageContainer) {
                                        imageContainer.innerHTML = '';
                                        if (apiUrl.includes('dog.ceo')) {
                                            const img = document.createElement('img');
                                            img.src = data.message;
                                            imageContainer.appendChild(img);
                                        } else if (apiUrl.includes('thecatapi.com')) {
                                            data.forEach(item => {
                                                const img = document.createElement('img');
                                                img.src = item.url; // La URL de la imagen viene en `item.url`
                                                imageContainer.appendChild(img);
                                            });
                                        }
                                    }
                                })
                                .catch(error => console.error('Error al cargar las imágenes:', error));
                        }
                        
