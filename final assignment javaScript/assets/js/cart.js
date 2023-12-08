document.addEventListener('DOMContentLoaded', function () {
  const cartItemsContainer = document.getElementById('cart_items');
  const cartItemIds = JSON.parse(localStorage.getItem('cart')) || [];

  Promise.all(cartItemIds.map(fetchCartItemDetails))
    .then((cartItems) => {
      cartItems.forEach((item) => {
        const cartItem = createCartItemElement(item);
        cartItemsContainer.appendChild(cartItem);
      });

      // Calculate and display the total price
      const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      displayTotalPrice(totalPrice);
    })
    .catch((err) => {
      console.error(err);
    });

  function fetchCartItemDetails(itemId) {
    return fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then(response => response.json());
  }

  function createCartItemElement(item) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <h1 class="heading">${item.title}</h1>
      <hr>
      <div class="details">
        <div class="images">
          <img src="${item.image}" class="responsive" alt="image" />
        </div>
        <div class="data">
          <p class="category">Category: ${item.category}</p>
          <p class="description">Details: ${item.description}</p>
          <p class="price">Price: Rs.${item.price}</p>
          <p class="quantity"> Quantity:<input type="number" class="quantity-input p-2" value="${item.quantity}" min="1" max="10" placeholder="1" onchange="updateQuantity(${item.id}, this.value)"></p>
          <a href ="../pages/invoice.html"><button class="buynow">Buy Now</button></a>
          <button class="remove" data-item-id="${item.id}">Remove</button>
        </div>
        <div><p><p></div>
      </div>
    `;
    const removeButton = cartItem.querySelector('.remove');
    removeButton.addEventListener('click', function() {
      removeItem(cartItem);
    });

    return cartItem;
  }

  function displayTotalPrice(totalPrice) {
    const totalContainer = document.getElementById('total_price');
    totalContainer.textContent = `Total Price: Rs.${totalPrice.toFixed(2)}`;
  }

  function removeItem(cartItem) {
    if (cartItem) {
      cartItem.remove();
    }
    const itemId = cartItem.querySelector('.remove').getAttribute('data-item-id');
    const updatedCartItems = cartItemIds.filter(id => id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  }
});

