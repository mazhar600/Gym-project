const products = [
    { id: 1, name: "Wireless Headphones", price: 59.99, image: "assets/headphone.jpg" },
    { id: 2, name: "Smart Watch", price: 99.99, image: "assets/watch.jpg" },
    { id: 3, name: "Running Shoes", price: 79.99, image: "assets/shoes.jpg" },
    { id: 4, name: "Minimalist Backpack", price: 45.00, image: "assets/laptop.jpg" }
];

const productGrid = document.getElementById("product-grid");
const cartCount = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartBtn = document.getElementById("cart-btn");
const searchInput = document.getElementById("search-input");

let cart = [];

// Display Products on UI
function displayProducts(productsToDisplay) {
    productGrid.innerHTML = "";
    productsToDisplay.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between";
        productCard.innerHTML = `
            <div>
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-lg mb-4">
                <h4 class="font-semibold text-lg mb-1">${product.name}</h4>
                <p class="text-indigo-600 font-bold mb-4">$${product.price.toFixed(2)}</p>
            </div>
            <button onclick="addToCart(${product.id})" class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                Add to Cart
            </button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Search Products Function
function searchProducts() {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
}

// Toggle Cart Sidebar
function toggleCart() {
    cartModal.classList.toggle("hidden");
}

// Open cart when clicking the cart button
cartBtn.addEventListener("click", toggleCart);

// Add to Cart Logic
function addToCart(productId) {
    const selectedProduct = products.find(p => p.id === productId);
    cart.push(selectedProduct);
    updateCart();
}

// Update Cart UI & Count
function updateCart() {
    cartCount.innerText = cart.length;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="text-gray-500">Your cart is empty.</p>`;
        cartTotal.innerText = "$0.00";
        return;
    }

    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const cartItemEl = document.createElement("div");
        cartItemEl.className = "flex justify-between items-center bg-gray-50 p-3 rounded-lg";
        cartItemEl.innerHTML = `
            <div>
                <h5 class="font-semibold text-sm">${item.name}</h5>
                <p class="text-sm text-gray-600">$${item.price.toFixed(2)}</p>
            </div>
            <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700 font-bold text-sm">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });

    cartTotal.innerText = `$${total.toFixed(2)}`;
}

// Remove Item from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Checkout Function
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Order placed successfully! Thank you for shopping with AuraMart.");
    cart = [];
    updateCart();
    toggleCart();
}

// Initialize Page
displayProducts(products);
// Contact Form Handler
function handleContact(event) {
    event.preventDefault();
    const name = document.getElementById("contact-name").value;
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    event.target.reset();
}
