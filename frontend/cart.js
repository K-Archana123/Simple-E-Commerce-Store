const cartContainer = document.getElementById("cartContainer");
const cartTotal = document.getElementById("cartTotal");

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function displayCart() {
  if (!cartContainer || !cartTotal) return;

  const cart = getCart();
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <h2 style="text-align:center; margin-top:30px;">
        Your cart is empty
      </h2>
    `;
    cartTotal.innerText = "Total: ₹0";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const price = Number(item.price) || 0;
    total += price;

    cartContainer.innerHTML += `
      <div class="cart-item" style="display:flex; gap:20px; align-items:center; background:#fff; padding:15px; border-radius:10px; margin-bottom:20px; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
        <img 
          src="${item.image || 'https://via.placeholder.com/150?text=No+Image'}" 
          alt="${item.name}"
          style="width:140px; height:140px; object-fit:cover; border-radius:10px;"
          onerror="this.src='https://via.placeholder.com/150?text=No+Image'"
        >

        <div class="cart-item-info" style="flex:1;">
          <h3>${item.name || "Product"}</h3>
          <p><b>Price:</b> ₹${price}</p>
          <p><b>Category:</b> ${item.category || "Product"}</p>
          ${item.size ? `<p><b>Size:</b> ${item.size}</p>` : ""}
          <button class="btn" onclick="removeFromCart(${index})" style="margin-top:10px; max-width:200px;">
            Remove
          </button>
        </div>
      </div>
    `;
  });

  cartTotal.innerText = `Total: ₹${total}`;
}

function removeFromCart(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  displayCart();
}

function goToCheckout() {
  const cart = getCart();

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  window.location.href = "checkout.html";
}

displayCart();