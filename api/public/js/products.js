const carts = document.querySelectorAll(".cart-icon-bottom");

carts.forEach( button => {
    button.addEventListener("click", cartNumbers);
    button.addEventListener("click", addToCart);
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart (event) {
    const button = event.target;
    const product = button.closest(".product");
    const productID = product.querySelector(".product-id").dataset.productId;
    cart.push(productID);
    localStorage.setItem("cart", JSON.stringify(cart));
}

function onLoadCartNumbers () {
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
        document.querySelector("span").textContent = productNumbers;
    }
}

function cartNumbers () {
    let productNumbers = localStorage.getItem("cartNumbers");

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector("span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector("span").textContent = 1;
    }
}

onLoadCartNumbers();
localStorage.clear()