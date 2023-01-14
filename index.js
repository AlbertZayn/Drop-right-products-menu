function products () {
    fetch ("https://dummyjson.com/products/")
    .then(response => {
        console.log(response); 
        if (!response.ok) {
            throw Error("ERROR"); //Проверка ошибки URL
        }
        return response.json();
    })
    .then(data => {
        console.log(data.products);

        const objectlist = data.products.slice(0, 10).map(products => {      //Добавление списка объектов object-list (+лимит) и добавление описания object-content
            return `
                <div class="object-list">
                    <p>${products.title}</p>
                        <div class="object-content">                       
                            <p>${products.description}</p>
                            <p>Price: ${products.price}</p>
                            <p>Discount: ${products.discountPercentage}</p>
                            <p>Rating: ${products.rating}</p>
                            <p>Stock: ${products.stock}</p>
                            <p>Brand: ${products.brand}</p>
                            <p>Category: ${products.category}</p>
                            <img src="${products.thumbnail}" alt=""></img>
                            <img src="${products.images}" alt=""></img>
                        </div>
                </div>
            `;
        })
        .join(""); 
        document                                                          //Вставка данных после класса .menu
        .querySelector(".menu")
        .insertAdjacentHTML("afterbegin", objectlist);    

    })
    .catch(error => {
        console.log(error); //Выдача ошибки при не правильном URL
    });
}

products();