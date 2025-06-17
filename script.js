// Simple product data
const products = [
    {
        id: 1,
        name: "MacBook Pro 16\"",
        category: "laptops",
        price: 2399,
        description: "Powerful laptop with M2 Pro chip, perfect for professionals and creators.",
        image: "💻"
    },
    {
        id: 2,
        name: "iPhone 15 Pro",
        category: "phones",
        price: 999,
        description: "Latest iPhone with titanium design and advanced camera system.",
        image: "📱"
    },
    {
        id: 3,
        name: "iPad Pro 12.9\"",
        category: "tablets",
        price: 1099,
        description: "Professional tablet with M2 chip and Liquid Retina XDR display.",
        image: "📱"
    },
    {
        id: 4,
        name: "Dell XPS 13",
        category: "laptops", 
        price: 1299,
        description: "Ultra-portable laptop with stunning display and premium build quality.",
        image: "💻"
    }
];

// Global state
let currentUser = null;
let shoppingCart = [];
let currentFilter = 'all';
let currentProduct = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupNavigation();
    updateCartCount();
    
    // Simulate loading state
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 500);
});

// Setup navigation
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// Load products
function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">${product.image}</div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">
                <span class="price">$${product.price}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Scroll to products section
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Product functions
function filterProducts(category) {
    currentFilter = category;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    loadProducts();
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const productGrid = document.getElementById('productGrid');
    
    if (!searchTerm) {
        loadProducts();
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    productGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; color: #666; grid-column: 1/-1;">No products found matching your search.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Modal functions
function toggleSearch() {
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');
    
    searchContainer.classList.toggle('active');
    
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
        loadProducts();
    }
}

function showLogin() {
    closeAllModals();
    document.getElementById('loginModal').classList.add('active');
}

function closeLogin() {
    document.getElementById('loginModal').classList.remove('active');
}

function showRegister() {
    closeAllModals();
    document.getElementById('registerModal').classList.add('active');
}

function closeRegister() {
    document.getElementById('registerModal').classList.remove('active');
}

function showProductDetail(product) {
    currentProduct = product;
    
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('productImage').src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="%23f8f9fa"/><text x="50%" y="50%" font-size="48" text-anchor="middle" dy=".3em">${product.image}</text></svg>`;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('quantity').value = 1;
    
    document.getElementById('productModal').classList.add('active');
}

function closeProductDetail() {
    document.getElementById('productModal').classList.remove('active');
    currentProduct = null;
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

// Cart functions
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        showMessage('Product not found!', 'error');
        return;
    }
    
    const existingItem = shoppingCart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        shoppingCart.push({
            ...product,
            quantity: quantity
        });
    }
    
    updateCartCount();
    showMessage(`${product.name} added to cart!`, 'success');
    
    // Close product modal if open
    if (document.getElementById('productModal').classList.contains('active')) {
        closeProductDetail();
    }
}

function addToCartFromDetail() {
    if (!currentProduct) return;
    
    const quantity = parseInt(document.getElementById('quantity').value);
    addToCart(currentProduct.id, quantity);
}

function removeFromCart(productId) {
    shoppingCart = shoppingCart.filter(item => item.id !== productId);
    updateCartCount();
    displayCartItems();
    showMessage('Item removed from cart', 'info');
}

function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = shoppingCart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartCount();
        displayCartItems();
    }
}

function updateCartCount() {
    const totalItems = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
}

function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    
    if (cartModal.classList.contains('active')) {
        cartModal.classList.remove('active');
    } else {
        displayCartItems();
        cartModal.classList.add('active');
    }
}

function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const totalAmount = document.getElementById('totalAmount');
    
    if (shoppingCart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.style.display = 'none';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = '';
    
    shoppingCart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-price">$${item.price} × ${item.quantity} = $${itemTotal}</div>
            </div>
            <div class="quantity-controls">
                <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <input type="number" value="${item.quantity}" min="1" 
                       onchange="updateCartQuantity(${item.id}, parseInt(this.value))">
                <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    totalAmount.textContent = total.toFixed(2);
    cartTotal.style.display = 'block';
}

function proceedToCheckout() {
    if (shoppingCart.length === 0) {
        showMessage('Your cart is empty!', 'error');
        return;
    }
    
    if (!currentUser) {
        toggleCart();
        showLogin();
        showMessage('Please login to proceed with checkout', 'info');
        return;
    }
    
    // Simulate checkout process
    showMessage('Redirecting to secure checkout...', 'info');
    
    setTimeout(() => {
        shoppingCart = [];
        updateCartCount();
        toggleCart();
        showMessage('Order placed successfully! Thank you for your purchase.', 'success');
    }, 2000);
}

// Quantity functions
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

// Form functions
function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Simulate login
    setTimeout(() => {
        currentUser = { email: email, name: email.split('@')[0] };
        document.querySelector('.login-btn').textContent = `Welcome, ${currentUser.name}`;
        closeLogin();
        showMessage('Login successful!', 'success');
    }, 1000);
}

function register(event) {
    event.preventDefault();
    
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    
    if (!name || !email || !password || !confirmPassword) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }
    
    // Simulate registration
    setTimeout(() => {
        currentUser = { email: email, name: name };
        document.querySelector('.login-btn').textContent = `Welcome, ${currentUser.name}`;
        closeRegister();
        showMessage('Registration successful!', 'success');
    }, 1000);
}

function submitContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        showMessage('Please fill in all required fields', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        document.getElementById('contactForm').reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        showMessage('Message sent successfully! We\'ll get back to you soon.', 'success');
    }, 2000);
}

// Utility functions
function showMessage(text, type = 'info') {
    // Remove existing messages
    document.querySelectorAll('.message').forEach(msg => msg.remove());
    
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    // Insert at top of body
    document.body.insertBefore(message, document.body.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 5000);
}

// Footer link functions (simulate different pages)
function showHelp() {
    showMessage('Help Center: How can we assist you today?', 'info');
}

function showShipping() {
    showMessage('Shipping Info: Free worldwide shipping on all orders!', 'info');
}

function showReturns() {
    showMessage('Returns: 30-day hassle-free return policy.', 'info');
}

function showWarranty() {
    showMessage('Warranty: All products come with manufacturer warranty.', 'info');
}

function showPrivacy() {
    showMessage('Privacy Policy: Your data is secure with us.', 'info');
}

function showTerms() {
    showMessage('Terms of Service: Please read our terms and conditions.', 'info');
}

// Simulate some dynamic behavior
function simulateUserActivity() {
    // Simulate page view tracking
    console.log('Page view tracked:', window.location.href);
    
    // Simulate analytics events
    setTimeout(() => {
        console.log('User engagement tracked');
    }, 5000);
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error occurred:', e.error);
    showMessage('Something went wrong. Please try again.', 'error');
});

// Initialize activity simulation
simulateUserActivity();

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Tab navigation improvements
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Performance monitoring simulation
const performanceData = {
    pageLoadTime: Math.random() * 3000 + 1000,
    domContentLoaded: Math.random() * 2000 + 500,
    timeToInteractive: Math.random() * 4000 + 2000
};

console.log('Performance metrics:', performanceData); 