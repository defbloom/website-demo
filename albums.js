import { albums } from './albumData.js';

function displayAlbums(selectedGenre = "All") {
    const albumContainer = document.getElementById('album-container');
    albumContainer.innerHTML = ""; // Clear existing albums

    albums
        .filter(album => selectedGenre === "All" || album.genre === selectedGenre)
        .forEach(album => {
            const albumElement = document.createElement('div');
            albumElement.classList.add('album-card');

            // Check if related albums exist
            const hasRelated = album.related && album.related.title;

            albumElement.innerHTML = `
                <div class="card">
                    <img src="${album.imageUrl}" class="card-img-top" alt="${album.title}">
                    <div class="card-body">
                        <h5 class="card-title">${album.title}</h5>
                        <p class="card-text">${album.artist}</p>
                        <p class="card-text"><small>${album.year}</small></p>
                        <p class="card-text">${album.description}</p>
                        ${hasRelated ? `
                            <button
                                type="button"
                                class="btn btn-outline-info btn-sm related-info"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="<strong>${album.related.title}</strong><br><em>${album.related.artist}</em><br>
                                       <img src='${album.related.imageUrl}' alt='${album.related.title}' style='width:100%;border-radius:5px;'>
                                       <p>${album.related.description}</p>"
                            >
                                 Related Album
                            </button>` : ""}
                    </div>
                </div>
            `;

            albumContainer.appendChild(albumElement);
        });

    // Initialize tooltips after rendering
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Event listener for genre filter
document.getElementById('genre-filter').addEventListener('change', (event) => {
    displayAlbums(event.target.value);
});

// Initialize the album display when the page loads
document.addEventListener('DOMContentLoaded', () => displayAlbums());
