const wishlistContainer =
document.getElementById(
"wishlistContainer"
);

let wishlist =
JSON.parse(
localStorage.getItem(
"wishlist"
)
) || [];

if(wishlist.length === 0){

wishlistContainer.innerHTML =
"<h2>No Products in Wishlist ❤️</h2>";

}

wishlist.forEach(
(product,index)=>{

wishlistContainer.innerHTML += `

<div class="card">

<img src="${product.image}">

<div class="card-content">

<h3>${product.name}</h3>

<p class="price">
₹${product.price}
</p>

<button
class="btn"
onclick="removeWishlist(${index})">

Remove

</button>

</div>

</div>

`;

});

function removeWishlist(index){

wishlist.splice(index,1);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

location.reload();

}