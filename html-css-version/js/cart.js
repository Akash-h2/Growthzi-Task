function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const countElement = document.getElementById('cart-count');
    if (countElement) {
      countElement.textContent = cart.length;
    }
  }
  
  function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
  }
  
  function removeFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    console.log("Removing item with ID:", itemId);
  
    cart = cart.filter(item => String(item.id) !== String(itemId)); 
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
  }
  
  function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;
  
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    if (cart.length === 0) {
      container.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }
  
    container.innerHTML = '';
  
    cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `
        <h3>${item.title}</h3>
        <p>Price: ${item.price}</p>
        <button onclick="removeFromCart('${item.id}')">Remove</button>
      `;
      container.appendChild(itemDiv);
    });
  }
  
  window.onload = function () {
    updateCartCount();
    renderCartItems();
  };
  