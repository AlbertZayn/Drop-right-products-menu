function products () {
    fetch ("https://dummyjson.com/products")
    .then(response => {
        console.log(response); 
        if (!response.ok) {
            throw Error("ERROR"); //Проверка ошибки URL
        }
        return response.json();
    })
    .then(data => {
        console.log(data.products);

        const objectlist = data.products.map(products => {      //Добавление списка объектов
            return `<p>${products.title}</p>`;
        })
        .join("");
        document
        .querySelector(".object-list")
        .insertAdjacentHTML("afterbegin", objectlist);

        const objectContent = data.products.map(products => {   //Добавление описания к объектам
            return `
            <p>${products.description}</p>
            <p>${products.price}</p>
            <p>${products.discountPercentage}</p>
            <p>${products.rating}</p>
            <p>${products.stock}</p>
            <p>${products.brand}</p>
            <p>${products.category}</p>
            <img src="${products.thumbnail}" alt=""></img>
            <img src="${products.images}" alt=""></img>
            `
        })
        .join("");
        document
        .querySelector(".object-content")
        .insertAdjacentHTML("afterbegin", objectContent);

    })
    .catch(error => {
        console.log(error); //Выдача ошибки при не правильном URL
    });
}

products();