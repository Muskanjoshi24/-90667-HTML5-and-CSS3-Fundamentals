// Cart and Wishlist
// Initialize cart and wishlist arrays
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Function to update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length; // Update the count based on the cart array length
}

// Function to update wishlist count
function updateWishlistCount() {
    const wishlistCount = document.getElementById('wishlist-count');
    wishlistCount.textContent = wishlist.length; // Update the count based on the wishlist array length
}

// Function to add item to cart
function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); // Update the cart count
    alert(`${name} has been added to your cart!`);
}

// Function to add item to wishlist
function addToWishlist(name, price) {
    const item = { name, price };
    wishlist.push(item);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount(); // Update the wishlist count
    alert(`${name} has been added to your wishlist!`);
}

// Function to display wishlist items
function displayWishlist() {
    const wishlistItemsContainer = document.getElementById('wishlist-items');
    wishlistItemsContainer.innerHTML = ''; // Clear existing items

    if (wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = '<tr><td colspan="2">Your wishlist is empty.</td></tr>';
    } else {
        wishlist.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${item.name}</td><td>₹ ${item.price}</td>`;
            wishlistItemsContainer.appendChild(row);
        });
    }
}

// Function to display cart items
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<tr><td colspan="2">Your cart is empty.</td></tr>';
    } else {
        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${item.name}</td><td>₹ ${item.price}</td>`;
            cartItemsContainer.appendChild(row);
        });
    }
}

// Function to clear the wishlist
function clearWishlist() {
    localStorage.removeItem('wishlist');
    wishlist = []; // Reset the wishlist array
    displayWishlist();
    updateWishlistCount();
    alert('Your wishlist has been cleared.');
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart');
    cart = []; // Reset the cart array
    displayCart();
    updateCartCount();
    alert('Your cart has been cleared.');
}

// Event listeners for Add to Cart buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-name');
        const productPrice = this.getAttribute('data-price');
        addToCart(productName, productPrice);
    });
});

// Event listeners for Add to Wishlist buttons
document.querySelectorAll('.add-to-wishlist-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-name');
        const productPrice = this.getAttribute('data-price');
        addToWishlist(productName, productPrice);
    });
});

// Display wishlist and cart items on page load
window.onload = function() {
    displayWishlist();
    displayCart();
    updateCartCount();
    updateWishlistCount();
};
// Cart and Wishlist end

//search

document.getElementById("search-input").addEventListener("input", function () {
    const query = this.value.toLowerCase();

    // Select all product elements from all sections
    const productElements = document.querySelectorAll(
        ".collection-list .col-md-6, .special-list .col-md-6, #popular .d-flex"
    );

    // Loop through each product and check for matches
    productElements.forEach((product) => {
        const productName = product.querySelector("p").textContent.toLowerCase();

        if (productName.includes(query)) {
            product.style.opacity = "1"; // Show the product
            product.style.pointerEvents = "auto"; // Allow interaction
        } else {
            product.style.opacity = "0"; // Hide the product
            product.style.pointerEvents = "none"; // Disable interaction
        }
    });
});
// search end

//fliter
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button-group button');
    const productItems = document.querySelectorAll('.product-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            
            // Remove 'active-filter-btn' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active-filter-btn'));
            
            // Add 'active-filter-btn' to the clicked button
            button.classList.add('active-filter-btn');

            // Show/hide products based on filter
            productItems.forEach(item => {
                if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
        });
    });
});

// filter end


