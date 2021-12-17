window.onload = async () => {
    const response = await fetch("http://localhost:3050/api/products");
    const result = await response.json();
    const data = result.data;
    console.log(data);

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log(favorites);

    data
    .filter((product) => {
        return favorites.includes(product.id);
    })
    .forEach((product) => {
        console.log(product);
    });
}