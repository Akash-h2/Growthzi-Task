
function addToCart(title, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const item = {
      id: Date.now().toString(),  
      title,
      price
    };
  
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  
    alert(`${title} added to cart!`);
  }
  
  
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const countElement = document.getElementById('cart-count');
    if (countElement) {
      countElement.textContent = cart.length;
    }
  }
  
  
  window.onload = function () {
    updateCartCount();
  };
  