var cart = [];

function addToCart(product) {
    var existingProduct = cart.find(p => p.name === product.name);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    var cartList = document.querySelector('.cart-list');
    var cartTotal = document.querySelector('.cart-total');

    cartList.innerHTML = '';

    var total = 0;

    cart.forEach(product => {
        var listItem = document.createElement('li');
        listItem.textContent = product.quantity + 'x ' + product.name;

        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', function(){
            removeFromCart(product);
        })

        listItem.appendChild(removeButton);

        cartList.appendChild(listItem);
        total += product.price * product.quantity;
    });

    cartTotal.textContent = 'Total: ' + total + ' SEK';
}

function removeFromCart(product) {
    var index = cart.findIndex(p => p.name === product.name);

    if (index !== -1) {
        cart[index].quantity--;

        if(cart[index].quantity === 0) {
            cart.splice(index, 1);
        }

        updateCartDisplay();
    }
}

document.querySelector('.line1 .btn-line a').addEventListener('click', function() {
    addToCart({ name: 'Haircut Touch Up', price: 550});
});

document.querySelector('.line2 .btn-line a').addEventListener('click', function() {
    addToCart({ name: 'Beard Touch Up', price: 200});
});

document.querySelector('.line3 .btn-line a').addEventListener('click', function() {
    addToCart({ name: 'Hair Coloring', price: 800});
});

function checkout(){
    cart = [];

    updateCartDisplay();

    alert('Thank you for the order! Drop in at anytime!')
}