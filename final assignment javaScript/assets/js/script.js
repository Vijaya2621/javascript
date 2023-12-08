const items = document.querySelector('#cards');
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then((completedata) => {
    document.getElementById('cards').innerHTML = '';
    completedata.forEach((item) => {
      const { id, title, price, image, description, category } = item;
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h1>${title}</h1>
        <div class="images">
          <img src="${image}" class="responsive" alt="image" />
        </div>
        <p class="category">Category: ${category}</p>
        <p class="price">Price: Rs.${price}</p>
        <a href="./pages/description.html?id=${id}">
        <button type="button"id="btn1" class="description-button">Description</button>
      </a>
        <button type="button" id="btn2" class="add-to-cart" data-id="${id}">Add to cart</button>
      `;
      document.getElementById('cards').appendChild(card);
    });
  })
  .catch((err) => {
    console.error(err);
  });

  document.getElementById('cards').addEventListener('click', function (event) {
    if (event.target.classList.contains('add-to-cart')) {
      const itemId = event.target.getAttribute('data-id');
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      cartItems.push(itemId);
      localStorage.setItem('cart', JSON.stringify(cartItems));
      alert("Item added to cart");
    }
  });

