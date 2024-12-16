import books from './data.js'

document.getElementById('root').insertAdjacentHTML('beforeend', `
    <header>New York Times Bestsellers</header>
    <div class="cards">
        ${books.map((bookObj, index) => `
            <div class="card">
                <span class="number">${index + 1}</span>
                <h1>${bookObj.sub}</h1>
                <h2>${bookObj.title}</h2>
                <p>${bookObj.text}</p>
                <button class="card-button">read more</button>
            </div>
        `).join("")}
    </div>
`);