document.addEventListener('DOMContentLoaded', () => {
    fetch('entries.json')
        .then(response => response.json())
        .then(data => {
            displayEntries(data);
            displayHashtags(data);
            setupSearch(data);
        })
        .catch(error => console.error('Error al cargar las entradas del blog:', error));
});

function displayEntries(entries) {
    const blogEntries = document.getElementById('blog-entries');
    blogEntries.innerHTML = '';

    entries.forEach(entry => {
        const article = document.createElement('article');
        article.classList.add('blog-entry');

        const img = document.createElement('img');
        img.src = entry.image;
        article.appendChild(img);

        const title = document.createElement('h2');
        const link = document.createElement('a');
        link.href = entry.link;
        link.textContent = entry.title;
        title.appendChild(link);
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
}

function displayHashtags(entries) {
    const hashtagsSection = document.getElementById('hashtags');
    const allHashtags = new Set();

    entries.forEach(entry => {
        entry.hashtags.forEach(tag => allHashtags.add(tag));
    });

    allHashtags.forEach(tag => {
        const span = document.createElement('span');
        span.classList.add('hashtag');
        span.textContent = tag;
        span.addEventListener('click', () => filterByHashtag(tag, entries));
        hashtagsSection.appendChild(span);
    });
}

function filterByHashtag(tag, entries) {
    const filteredEntries = entries.filter(entry => entry.hashtags.includes(tag));
    displayEntries(filteredEntries);
}

function setupSearch(entries) {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredEntries = entries.filter(entry =>
            entry.title.toLowerCase().includes(query) ||
            entry.description.toLowerCase().includes(query) ||
            entry.author.toLowerCase().includes(query)
        );
        displayEntries(filteredEntries);
    });
}
