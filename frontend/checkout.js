const orderDetails = document.getElementById("orderDetails");

const buyNowProduct = JSON.parse(localStorage.getItem("buyNowProduct"));
const cart = JSON.parse(localStorage.getItem("cart")) || [];

let checkoutItems = [];

// Decide what should be shown on checkout page
if (buyNowProduct) {
    checkoutItems = [buyNowProduct];
} else if (cart.length > 0) {
    checkoutItems = cart;
} else {
    checkoutItems = [];
}

// Show order details
if (checkoutItems.length === 0) {
    orderDetails.innerHTML = `
        <p style="text-align:center; color:red;">No product selected for checkout.</p>
    `;
} else {
    let total = 0;

    orderDetails.innerHTML = checkoutItems.map(item => {
        total += Number(item.price || 0);

        return `
            <div style="display:flex; gap:15px; align-items:center; background:#fff; padding:15px; border-radius:10px; margin-bottom:15px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
                <img 
                    src="${item.image || 'https://via.placeholder.com/120?text=No+Image'}" 
                    alt="${item.name}"
                    style="width:120px; height:120px; object-fit:cover; border-radius:10px;"
                    onerror="this.src='https://via.placeholder.com/120?text=No+Image'"
                >
                <div>
                    <h3 style="margin:0 0 8px;">${item.name}</h3>
                    <p style="margin:4px 0;"><b>Price:</b> ₹${item.price}</p>
                    <p style="margin:4px 0;"><b>Category:</b> ${item.category || "Product"}</p>
                    ${item.size ? `<p style="margin:4px 0;"><b>Size:</b> ${item.size}</p>` : ""}
                </div>
            </div>
        `;
    }).join("");

    orderDetails.innerHTML += `
        <h3 style="text-align:right; margin-top:15px;">Total: ₹${total}</h3>
    `;
}

function placeOrder() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const payment = document.querySelector('input[name="payment"]:checked')?.value || "Cash On Delivery";

    if (checkoutItems.length === 0) {
        alert("No product selected.");
        return;
    }

    if (!name || !phone || !address) {
        alert("Please fill all delivery details.");
        return;
    }

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
        id: Date.now(),
        items: checkoutItems,
        customerName: name,
        phone: phone,
        address: address,
        paymentMethod: payment,
        orderDate: new Date().toLocaleString()
    };

    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Clear checkout source
    localStorage.removeItem("buyNowProduct");
    localStorage.removeItem("cart");

    alert("Order placed successfully!");
    window.location.href = "orders.html";
}