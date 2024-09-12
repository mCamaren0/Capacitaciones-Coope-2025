
        function loadImages(url) {
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
        }
        