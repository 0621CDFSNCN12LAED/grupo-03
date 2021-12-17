const cartIcon = document.getElementsByClassName("cart-icon-bottom");

for (const [clave, valor] of Object.entries(cartIcon)) {
    valor.onclick = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites.push(valor.dataset);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        console.log(favorites);
    };
}
