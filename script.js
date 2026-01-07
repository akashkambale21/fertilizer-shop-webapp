// Sample product data
const products = [
    { id: 1, name: 'Organic Compost', emoji: '🌱', price: 12.99, description: 'Premium organic compost for all plants' },
    { id: 2, name: 'NPK Fertilizer', emoji: '🧪', price: 15.99, description: 'Balanced NPK fertilizer for vegetables' },
    { id: 3, name: 'Neem Oil', emoji: '🌿', price: 18.99, description: 'Natural pest control solution' },
    { id: 4, name: 'Potassium Sulfate', emoji: '💧', price: 14.99, description: 'Improves plant strength and disease resistance' },
    { id: 5, name: 'Calcium Nitrate', emoji: '⚗️', price: 16.99, description: 'Prevents blossom end rot in fruits' },
    { id: 6, name: 'Growth Booster', emoji: '📈', price: 19.99, description: 'Accelerates plant growth and flowering' }
];

// Cart array
let cart = [];

// Initialize products on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadCartFromStorage();
    updateCartCount();
});

// Load products to the grid
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        saveCartToStorage();
        updateCartCount();
        updateCartDisplay();
        alert(`${product.name} added to cart!`);
    }
}

// Update cart item count in navbar
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Display cart items
function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        totalPriceSpan.textContent = '0.00';
        return;
    }
    
    cartItemsDiv.innerHTML = '';
    let totalPrice = 0;
    
    cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Price: $${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-price">
                <button onclick="removeFromCart(${index})" style="background: #dc3545; color: white; padding: 0.5rem 1rem; border: none; border-radius: 5px; cursor: pointer;">Remove</button>
            </div>
        `;
        cartItemsDiv.appendChild(cartItemDiv);
    });
    
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToStorage();
    updateCartCount();
    updateCartDisplay();
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Thank you for your purchase!\nTotal: $${total.toFixed(2)}\n\nYour order has been placed successfully.`);
    
    // Clear cart
    cart = [];
    saveCartToStorage();
    updateCartCount();
    updateCartDisplay();
}

// Handle contact form submission
function handleContact(event) {
    event.preventDefault();
    
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    
    alert('Thank you for contacting us!\nWe will get back to you soon.');
    form.reset();
}

// LocalStorage functions
function saveCartToStorage() {
    localStorage.setItem('greenGrowCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('greenGrowCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartDisplay();
        } catch (e) {
            console.log('Error loading cart from storage');
        }
    }
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Log welcome message
console.log('🌱 Welcome to GreenGrow Fertilizer Shop!');
console.log('Happy shopping!');
