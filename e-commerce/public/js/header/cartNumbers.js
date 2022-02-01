function onLoadCartNumbers () {
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
        document.querySelector("span").textContent = productNumbers;
    }
}

onLoadCartNumbers();