// Called from index.html
function addToCart(productName, productPrice) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: productName, price: productPrice });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} has been added to your cart!`);
}

// Called from cart.html
window.onload = function () {
  const cartItems = document.getElementById("cart-items");
  const billing = document.getElementById("billing");
  if (!cartItems) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItems.innerHTML = "<li>Your cart is empty.</li>";
    billing.innerHTML = "";
    return;
  }

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  billing.innerHTML = `Total Amount: ₹${total}`;
};

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}
