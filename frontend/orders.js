const ordersContainer = document.getElementById("ordersContainer");
const orders = JSON.parse(localStorage.getItem("orders")) || [];

if (!ordersContainer) {
    console.error("ordersContainer not found");
} else if (orders.length === 0) {
    ordersContainer.innerHTML = `
        <h2 style="text-align:center; margin-top:30px;">No orders placed yet</h2>
    `;
} else {
    ordersContainer.innerHTML = "";

    orders.forEach(order => {
        let itemsHTML = "";

        if (order.items && order.items.length > 0) {
            itemsHTML = order.items.map(item => `
                <div style="display:flex; gap:15px; align-items:center; margin-bottom:15px; padding:10px; border-bottom:1px solid #ddd;">
                    <img 
                        src="${item.image || 'https://via.placeholder.com/120?text=No+Image'}" 
                        alt="${item.name}"
                        style="width:100px; height:100px; object-fit:cover; border-radius:8px;"
                        onerror="this.src='https://via.placeholder.com/120?text=No+Image'"
                    >
                    <div>
                        <h3 style="margin:0;">${item.name}</h3>
                        <p><b>Price:</b> ₹${item.price}</p>
                        <p><b>Category:</b> ${item.category || "Product"}</p>
                        ${item.size ? `<p><b>Size:</b> ${item.size}</p>` : ""}
                    </div>
                </div>
            `).join("");
        }

        ordersContainer.innerHTML += `
            <div class="order-card" style="background:#fff; padding:20px; border-radius:12px; margin-bottom:20px; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
                <h2 style="margin-bottom:10px;">Order ID: ${order.id}</h2>
                <p><b>Name:</b> ${order.customerName}</p>
                <p><b>Phone:</b> ${order.phone}</p>
                <p><b>Address:</b> ${order.address}</p>
                <p><b>Payment:</b> ${order.paymentMethod}</p>
                <p><b>Date:</b> ${order.orderDate}</p>
                <hr style="margin:15px 0;">
                ${itemsHTML}
            </div>
        `;
    });
}