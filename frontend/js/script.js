// Dati da mettere poi in un file JSON
const products = [
    {
        id: 1,
        name: "PC Gaming",
        category: "PC",
        price: 950
    },
    {
        id: 2,
        name: "Samsung Galaxy",
        category: "Smartphone",
        price: 634
    },
    {
        id: 3,
        name: "iPad",
        category: "Tablet",
        price: 469
    },
    {
        id: 4,
        name: "Monitor 27 pollici",
        category: "Monitor",
        price: 224
    },
    {
        id: 5,
        name: "Mouse Wireless",
        category: "Accessori",
        price: 23
    }
];

const productsContainer = document.getElementById("products-container");

// Aggiunta della lista dei prodotti
const categoryButtons = document.querySelectorAll("#category-filters button");

function displayProducts(productsToDisplay) {
    productsContainer.innerHTML = "";

    productsToDisplay.forEach(product => {
        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <h3 class="product-name">${product.name}</h3>
            <p>${product.category}</p>
            <p class="product-price">€${product.price}</p>
            <button class="product-button">Dettagli</button>
        `;

        productsContainer.appendChild(card);
    });
}

displayProducts(products);