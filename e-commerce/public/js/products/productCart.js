window.onload = async () => {
    const container = document.querySelector(".flex");

    const result = await fetch("http://localhost:3050/api/products/all");
    const products = await result.json();
    const data = products.data;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let newCart = [];

    cart.forEach((id) => {
        newCart.push(parseInt(id));
    });

    data
    .filter((product) => {
        return newCart.includes(product.id);
    })
    .forEach((product) => {
        const productWrapper = document.createElement("div");
        productWrapper.setAttribute("class", "product-wrapper");

        const article = document.createElement("article");
        article.setAttribute("class", "product");
        article.setAttribute("id", "product");

        const productHyperLink = document.createElement("a");
        productHyperLink.setAttribute("href", `/products/${product.id}`);
        productHyperLink.setAttribute("class", "product-id");
        productHyperLink.setAttribute("id", "product-id");
        productHyperLink.setAttribute("data-product-id", `${product.id}`);

        const productImage = document.createElement("img");
        productImage.setAttribute("class", "product-img");
        productImage.setAttribute("src", `${product.image}`);

        const productContent = document.createElement("div");
        productContent.setAttribute("class", "product-content");

        const productName = document.createElement("p");
        productName.textContent = `${product.name}`;
        productName.setAttribute("class", "name");

        const productPrice = document.createElement("p");
        productPrice.textContent = `$${product.price}`;
        productPrice.setAttribute("class", "price");

        const productDiscount = document.createElement("p");
        productDiscount.textContent = "40% off";
        productDiscount.setAttribute("class", "discount");

        const cartButton = document.createElement("div");
        cartButton.setAttribute("class", "cart-icon-bottom");
        cartButton.setAttribute("id", "cart-icon");

        const cartIcon = document.createElement("i");
        cartIcon.setAttribute("class", "fas fa-cart-plus");

        container.appendChild(productWrapper);
        productWrapper.appendChild(article);
        article.appendChild(productHyperLink);
        productHyperLink.appendChild(productImage);
        article.appendChild(productContent);
        productContent.appendChild(productName);
        productContent.appendChild(productPrice);
        productContent.appendChild(productDiscount);
        productContent.appendChild(cartButton);
        cartButton.appendChild(cartIcon);
    });

    const carts = document.querySelectorAll(".cart-icon-bottom");
    carts.forEach( button => {
        button.addEventListener("click", deleteFromCart);
    });
    function deleteFromCart (event) {
        const button = event.target;
        const product = button.closest(".product");
        const productID = product.querySelector(".product-id").dataset.productId;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i] === productID) {
                cart.splice(i, 1);
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    //const deleteCart = document.getElementById("delete-sale");
    //deleteCart.addEventListener("click", localStorage.setItem("cart", null));
}