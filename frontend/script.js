let defaultProducts = [
{
    id:1,
    name:"Wireless Mouse",
    price:499,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    category:"Electronics"
},
{
    id:2,
    name:"Gaming Keyboard",
    price:899,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400",
    category:"Electronics"
},
{
    id:3,
    name:"Bluetooth Headphones",
    price:1499,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category:"Electronics"
},
{
    id:4,
    name:"Smart Watch",
    price:2499,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category:"Electronics"
},
{
    id:5,
    name:"Samsung Galaxy S24",
    price:69999,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    category:"Electronics"
},
{
    id:6,
    name:"iPhone 15",
    price:79999,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",
    category:"Electronics"
},
{
    id:7,
    name:"OnePlus 13",
    price:54999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400",
    category:"Electronics"
},
{
    id:8,
    name:"Sony Earbuds",
    price:2999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?w=400",
    category:"Electronics"
},
{
    id:9,
    name:"Portable Speaker",
    price:1999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400",
    category:"Electronics"
},
{
    id:10,
    name:"Web Camera",
    price:2499,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    category:"Electronics"
},
{
    id:11,
    name:"HP Laptop",
    price:45999,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    category:"Laptops"
},
{
    id:12,
    name:"Dell Inspiron Laptop",
    price:55999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=400",
    category:"Laptops"
},
{
    id:13,
    name:"Lenovo IdeaPad",
    price:49999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=400",
    category:"Laptops"
},
{
    id:14,
    name:"Asus VivoBook",
    price:52999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400",
    category:"Laptops"
},
{
    id:15,
    name:"Acer Aspire 7",
    price:47999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
    category:"Laptops"
},
{
    id:16,
    name:"MacBook Air",
    price:89999,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=400",
    category:"Laptops"
},
{
    id:17,
    name:"MSI Gaming Laptop",
    price:75999,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
    category:"Laptops"
},
{
    id:18,
    name:"Samsung Galaxy Book",
    price:68999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
    category:"Laptops"
},
{
    id:19,
    name:"Men's T-Shirt",
    price:699,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    category:"Fashion",
    sizes:["S","M","L","XL"]
},
{
    id:20,
    name:"Polo T-Shirt",
    price:899,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400",
    category:"Fashion",
    sizes:["S","M","L","XL"]
},
{
    id:21,
    name:"Nike Shoes",
    price:2999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    category:"Fashion",
    sizes:["6","7","8","9","10"]
},
{
    id:22,
    name:"Puma Running Shoes",
    price:2499,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=400",
    category:"Fashion",
    sizes:["6","7","8","9","10"]
},
{
    id:23,
    name:"Casual Hoodie",
    price:1499,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    category:"Fashion",
    sizes:["S","M","L","XL"],
    description:"Warm and trendy hoodie for casual outings."
},
{
    id:24,
    name:"Denim Jacket",
    price:1999,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
    category:"Fashion",
    sizes:["S","M","L","XL"],
    description:"Stylish denim jacket for all seasons."
},
{
    id:25,
    name:"Women's Kurti",
    price:1199,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
    category:"Fashion",
    sizes:["S","M","L","XL"],
    description:"Beautiful kurti for traditional and casual wear."
},
{
    id:26,
    name:"Jeans for Men",
    price:1599,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    category:"Fashion",
    sizes:["28","30","32","34","36"],
    description:"Comfort fit jeans for everyday use."
},
{
    id:27,
    name:"Women's Handbag",
    price:1899,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
    category:"Fashion",
    description:"Elegant handbag for daily and party use."
},
{
    id:28,
    name:"Sunglasses",
    price:999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    category:"Fashion",
    description:"Trendy sunglasses with UV protection."
},
{
    id:29,
    name:"Gold Necklace",
    price:12999,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400",
    category:"Jewellery",
    description:"Elegant gold necklace with premium finish."
},
{
    id:30,
    name:"Diamond Ring",
    price:18999,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
    category:"Jewellery",
    description:"Beautiful diamond ring for special occasions."
},
{
    id:31,
    name:"Silver Bracelet",
    price:3999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
    category:"Jewellery",
    description:"Silver bracelet with elegant design."
},
{
    id:32,
    name:"Pearl Earrings",
    price:2999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400",
    category:"Jewellery",
    description:"Pearl earrings perfect for festive wear."
},
{
    id:33,
    name:"Wedding Necklace Set",
    price:22999,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1627293509201-cd0c7800430d?w=400",
    category:"Jewellery",
    description:"Luxury necklace set for weddings and parties."
},
{
    id:34,
    name:"Rose Gold Pendant",
    price:4999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
    category:"Jewellery",
    description:"Stylish rose gold pendant with modern design."
},
{
    id:35,
    name:"Cooking Pan Set",
    price:1999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1584990347449-ae5fdf0f57f4?w=400",
    category:"Household",
    description:"Durable non-stick pan set for cooking."
},
{
    id:36,
    name:"Vacuum Cleaner",
    price:4999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400",
    category:"Household",
    description:"Powerful vacuum cleaner for easy cleaning."
},
{
    id:37,
    name:"Dinner Set",
    price:2499,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=400",
    category:"Household",
    description:"Elegant dinner set for family dining."
},
{
    id:38,
    name:"Water Bottle Set",
    price:799,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    category:"Household",
    description:"Reusable bottle set for home and travel."
},
{
    id:39,
    name:"Table Lamp",
    price:1499,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
    category:"Household",
    description:"Modern table lamp for bedroom or study."
},
{
    id:40,
    name:"Wall Clock",
    price:999,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
    category:"Household",
    description:"Decorative wall clock for home interiors."
},
{
    id:41,
    name:"Storage Basket",
    price:699,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    category:"Household",
    description:"Handy basket for storage and organization."
},
{
    id:42,
    name:"Java Programming Book",
    price:599,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    category:"Books",
    description:"Beginner-friendly Java programming guide."
},
{
    id:43,
    name:"Data Structures Book",
    price:699,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    category:"Books",
    description:"Complete guide to data structures concepts."
},
{
    id:44,
    name:"Operating Systems Book",
    price:749,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
    category:"Books",
    description:"Detailed operating systems concepts and examples."
},
{
    id:45,
    name:"DBMS Concepts",
    price:649,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400",
    category:"Books",
    description:"Database management systems explained clearly."
},
{
    id:46,
    name:"Computer Networks",
    price:799,
    rating:"★★★★★",
    image:"https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
    category:"Books",
    description:"Computer networking fundamentals and protocols."
},
{
    id:47,
    name:"Aptitude Preparation Book",
    price:499,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
    category:"Books",
    description:"Useful aptitude book for placements and exams."
},
{
    id:48,
    name:"USB Pendrive 64GB",
    price:799,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=400",
    category:"Electronics",
    description:"64GB USB drive for storage and file transfer."
},
{
    id:49,
    name:"Power Bank 20000mAh",
    price:1799,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
    category:"Electronics",
    description:"Fast charging power bank with high capacity."
},
{
    id:50,
    name:"Laptop Backpack",
    price:1499,
    rating:"★★★★☆",
    image:"https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400",
    category:"Fashion",
    description:"Stylish backpack suitable for laptop and travel."
}
];

let adminProducts = JSON.parse(localStorage.getItem("products")) || [];
let products = [...defaultProducts, ...adminProducts];

const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("searchInput");

function displayProducts(productsToShow){
    if(!productsContainer) return;

    productsContainer.innerHTML = "";

    if(productsToShow.length === 0){
        productsContainer.innerHTML = `<p style="text-align:center; width:100%;">No products found</p>`;
        return;
    }

    productsToShow.forEach(product => {
        productsContainer.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <div class="card-content">
                    <span class="product-category">${product.category}</span>
                    <div class="product-header">
                        <h3>${product.name}</h3>
                        <span class="wishlist-icon" onclick="addToWishlist(${product.id})">❤️</span>
                    </div>
                    <p class="rating">${product.rating}</p>
                    <p class="price">₹${product.price}</p>
                    <a href="product.html?id=${product.id}">
                        <button class="btn">View Details</button>
                    </a>
                </div>
            </div>
        `;
    });
}

function filterProducts(category){
    if(category === "All"){
        displayProducts(products);
        return;
    }

    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
}

if(searchInput){
    searchInput.addEventListener("keyup", () => {
        const value = searchInput.value.toLowerCase();
        const filtered = products.filter(p =>
            p.name.toLowerCase().includes(value)
        );
        displayProducts(filtered);
    });
}

function addToWishlist(productId){
    const product = products.find(p => p.id === productId);
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.some(item => item.id === productId);
    if(exists){
        alert("Already in Wishlist ❤️");
        return;
    }

    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Added to Wishlist ❤️");
}

displayProducts(products);