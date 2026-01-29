// 1. Data Array (State)
const products = [
    { name: "Wireless Headphones", price: "$129.99", category: "electronics" },
    { name: "Cotton T-Shirt", price: "$24.99", category: "clothing" },
    { name: "Bluetooth Speaker", price: "$89.99", category: "electronics" },
    { name: "Denim Jeans", price: "$59.99", category: "clothing" }
];

const grid = document.getElementById('productGrid');
const dropdown = document.getElementById('categorySelect');

// 2. Function to Render Products
function renderProducts(filteredItems) {
    grid.innerHTML = ""; // Pehle purane products clear karo

    filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <span class="price">${item.price}</span>
            <span class="tag ${item.category}">${item.category}</span>
        `;
        grid.appendChild(card);
    });
}

// 3. Dropdown Change Event (Reactive Update)
dropdown.addEventListener('change', (e) => {
    const selected = e.target.value;
    
    // Array Filtering Logic
    if (selected === "all") {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === selected);
        renderProducts(filtered);
    }
});

// Initial Load
renderProducts(products);