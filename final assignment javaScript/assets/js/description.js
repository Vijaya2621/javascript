
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('id');
fetch(`https://fakestoreapi.com/products/${itemId}`)
  .then(response => response.json())
  .then((item) => {
    document.getElementById('productdescription').innerHTML = `
      <h1>${item.title}</h1>
      <div class="images">
        <img src="${item.image}" class="responsive" alt="image" />
      </div>
      <p class="category">Category: ${item.category}</p>
      <p class="price">Price: Rs.${item.price}</p>
      <p class="description">Details: ${item.description}</p>
      <a href="../pages/cart.html" ><button class ="addbtn">Add to cart</button></a>
    `;
  })
  .catch((err) => {
    console.error(err);
  });
