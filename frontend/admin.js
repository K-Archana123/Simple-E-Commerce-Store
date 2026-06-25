const isAdmin =
localStorage.getItem("admin");

if(isAdmin !== "true"){

    alert(
    "Admin Access Only"
    );

    window.location.href =
    "login.html";

}
let products =
JSON.parse(
localStorage.getItem("products")
) || [];
let orders =
JSON.parse(localStorage.getItem("orders")) || [];

displayProducts();

function addProduct(){

    const name =
    document.getElementById("productName").value;

    const price =
    document.getElementById("productPrice").value;

    const category =
    document.getElementById("productCategory").value;
    const sizes =
document.getElementById(
"productSizes"
).value.split(",");

    const image =
document.getElementById("productImage").value;

    if(!file){
        alert("Please select an image");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(){
const product = {
    id: Date.now(),

    name,

    price,

    category,

    image: reader.result,

    sizes,

    rating:"★★★★★"
};

        let products =
        JSON.parse(
        localStorage.getItem("products")
        ) || [];

        products.push(product);

        try{

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );


}catch(error){

    alert(
        "Storage Full! Cannot save more images."
    );

    console.log(error);

}

        alert("Product Added!");

        location.reload();
    };

    reader.readAsDataURL(file);
}

function displayProducts(){

    const container =
    document.getElementById(
    "adminProducts"
    );

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `

        <div class="card">

            <img
            src="${product.image}"
            width="150">

            <h3>
            ${product.name}
            </h3>

            <p>
            ₹${product.price}
            </p>

            <button
            onclick="deleteProduct(${product.id})"
            >
            Delete
            </button>

        </div>

        `;

    });

}

function deleteProduct(id){

    products =
    products.filter(
    p => p.id !== id
    );

    localStorage.setItem(
    "products",
    JSON.stringify(products)
    );

    displayProducts();
}
function adminLogout(){

    localStorage.removeItem(
    "admin"
    );

    window.location.href =
    "login.html";

}