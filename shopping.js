const addToCartBtn = document.querySelector('.addToCart');
const subtractBtn = document.querySelector('.subtract');
const addBtn = document.querySelector('.add');
const quantitySpan = document.querySelector('.book-quantity');
let quantity = 1;
function updateQuantityDisplay() {
    quantitySpan.textContent = quantity;
}
subtractBtn.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        updateQuantityDisplay();
    }
});
addBtn.addEventListener('click', () => {
    quantity++;
    updateQuantityDisplay();
});
addToCartBtn.addEventListener('click', () => {
    const bookTitle = document.querySelector('.book-title').textContent;
    const bookAuthor = document.querySelector('.book-author').textContent;
    const bookPrice = parseFloat(document.querySelector('.price').textContent.replace('$', ''));
    const bookImage = document.querySelector('.book-image').src;

    const cartItem = {
        title: bookTitle,
        author: bookAuthor,
        price: bookPrice,
        quantity: quantity,
        image: bookImage
    };
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.title === bookTitle);
    if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity += quantity;
    } else {
        cartItems.push(cartItem);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert("Added into the cart");
});