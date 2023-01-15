function products () {
    fetch ("https://dummyjson.com/products/")
    .then(response => {
        if (!response.ok) {
            throw Error("ERROR"); //#1 Проверка ошибки URL
        }
        return response.json();
    })
    .then(data => {
        const objectlist = data.products.slice(0, 10).map(products => {      //#3 Добавление списка объектов object-list (+лимит 10шт) и добавление описания object-content
            
            return `
                <div class="object-list">
                    <p class="draggableTitle" draggable="true">${products.title}</p>
                        <div class="object-content">                       
                            <p class="draggable" draggable="true">${products.description}</p>
                            <p class="draggable" draggable="true">Price: ${products.price}</p>
                            <p class="draggable" draggable="true">Discount: ${products.discountPercentage}</p>
                            <p class="draggable" draggable="true">Rating: ${products.rating}</p>
                            <p class="draggable" draggable="true">Stock: ${products.stock}</p>
                            <p class="draggable" draggable="true">Brand: ${products.brand}</p>
                            <p class="draggable" draggable="true">Category: ${products.category}</p>
                            <img class="draggable" draggable="true" src="${products.thumbnail}" alt=""></img>
                            
                        </div>
                </div>
            `;
        })
        .join(""); 
        document                                                          //#4 Вставка данных после класса .menu
        .querySelector(".menu")
        .insertAdjacentHTML("afterbegin", objectlist);    

    })
    .catch(error => {
        console.log(error); //#2 Выдача ошибки при не правильном URL
    });
    
};

products();

const draggables = document.querySelectorAll('.draggable');       //#5 Перетаскивание объектов
                                                                                
draggables.forEach(draggable => {
draggable.addEventListener("dragstart", () => {
    console.log("drag start");
    });
});
    // draggable.addEventListener('dragend', () => {
    //     draggable.classList.remove('dragging')
    // })
    // draggables.forEach(draggable => {
    //     draggable.addEventListener('dragover', e => {
    //         e.preventDefault()
    //         const draggable = document.querySelector('.dragging')
    //         draggable.appendChild(draggable)
    //     })
    // <img class="draggable" draggable="true" src="${products.images}" alt=""></img> })






