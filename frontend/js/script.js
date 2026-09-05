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
const categoryButtons = document.querySelectorAll("#category-filters button");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const emptyMessage = document.getElementById("empty-message");

let selectedCategory = "all";

// Mostra i prodotti nella pagina
function displayProducts(productsToDisplay) {
    productsContainer.innerHTML = "";
    // Inserimento messaggio di errore se non ci sono prodotti da visualizzare
    if (productsToDisplay.length === 0) {
        emptyMessage.hidden = false;
        return;
    }

    emptyMessage.hidden = true;

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

// Funzionalità della barra di ricerca
function filterProducts() {
    const search = searchInput.value.toLowerCase().trim();

    const filteredProducts = products.filter(product => {
        const categoryMatch =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        const searchMatch =
            product.name.toLowerCase().includes(search);

        return categoryMatch && searchMatch;
    });

    displayProducts(filteredProducts);
}

// Click sui bottoni per filtrare i prodotti
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category;

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        filterProducts();
    });
});


searchForm.addEventListener("submit", event => {
    event.preventDefault();
    filterProducts();
});


displayProducts(products);