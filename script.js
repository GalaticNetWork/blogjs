document.addEventListener('DOMContentLoaded', () => {
    fetch('entries.json')
        .then(response => response.json())
        .then(data => {
            const blogEntries = document.getElementById('blog-entries');
            data.forEach(entry => {
                const article = document.createElement('article');
                article.classList.add('blog-entry');

                const img = document.createElement('img');
                img.src = entry.image;
                article.appendChild(img);

                const title = document.createElement('h2');
                title.textContent = entry.title;
                article.appendChild(title);

                const description = document.createElement('p');
                description.textContent = entry.description;
                article.appendChild(description);

                const hashtags = document.createElement('p');
                hashtags.classList.add('hashtags');
                hashtags.textContent = entry.hashtags.join(' ');
                article.appendChild(hashtags);

                const author = document.createElement('p');
                author.textContent = `Autor: ${entry.author}`;
                article.appendChild(author);

                blogEntries.appendChild(article);
            });
        })
        .catch(error => console.error('Error al cargar las entradas del blog:', error));
});
