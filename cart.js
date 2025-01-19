const cartItemsContainer = document.querySelector('.cart-items');
const subtotalSpan = document.querySelector('.subtotal');
const totalAmountSpan = document.querySelector('.total-amount');

// Update cart totals (subtotal and total)
function updateCartTotals() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    subtotalSpan.textContent = `$${subtotal.toFixed(2)}`;
    totalAmountSpan.textContent = `$${subtotal.toFixed(2)}`;
}

// Update item quantity in cart
function updateItemQuantity(index, newQuantity) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    if (newQuantity < 1) {
        cartItems.splice(index, 1); // Remove item if quantity is less than 1
    } else {
        cartItems[index].quantity = newQuantity;
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderCart();
}

// Remove item from cart
function removeItem(index) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderCart();
}

// Render cart items
function renderCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItemsContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <span class="fas fa-shopping-cart"></span>
                <p>Your cart is empty</p>
                <a href="genre.html" class="continue-shopping">Continue Shopping</a>
            </div>
        `;
    } else {
        cartItems.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div class="left-panel">
                    <picture class="picture">
                        <img src="${item.image}" alt="${item.title}" class="book-image">
                    </picture>
                </div>
                <div class="right-panel">
                    <h2 class="book-title">${item.title}</h2>
                    <p class="book-author">${item.author}</p>
                    <p class="book-price">$${(item.price * item.quantity).toFixed(2)}</p>

                    <div class="quantity-controls">
                        <button class="subtract fas fa-subtract" onclick="updateItemQuantity(${index}, ${item.quantity - 1})"></button>
                        <span class="book-quantity">${item.quantity}</span>
                        <button class="add fas fa-add" onclick="updateItemQuantity(${index}, ${item.quantity + 1})"></button>
                    </div>

                    <button class="remove-item fas fa-remove" onclick="removeItem(${index})"></button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    updateCartTotals();
}

// Event listener for checkout button
document.addEventListener('DOMContentLoaded', () => {
    renderCart();

    document.querySelector('.checkout-btn').addEventListener('click', () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Proceeding to checkout...');
        }
    });
});
