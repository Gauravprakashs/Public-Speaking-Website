
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');

   
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <p>${item.name}</p>
                <p>Price: $${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <button onclick="updateQuantity(${item.id}, 'increase')">+</button>
                <button onclick="updateQuantity(${item.id}, 'decrease')">-</button>
                <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
            </div>
        `;
        
        cartItemsContainer.appendChild(itemElement);
    });


    const totalCost = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    cartTotalContainer.innerHTML = `<p>Total: ₹${totalCost}</p>`;
}

function updateQuantity(id, action) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === id);

    if (item) {
        if (action === 'increase') {
            item.quantity += 1;
        } else if (action === 'decrease' && item.quantity > 1) {
            item.quantity -= 1;
        }

        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart(); 
    }
}


function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);

   
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}


window.onload = updateCart;
