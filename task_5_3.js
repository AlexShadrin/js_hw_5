const catalog = {
    items: [
        {
            name: 'plate',
            model: "A1",
            color: "white",
            price: 115,
            count: 1,
        },
        {
            name: 'fork',
            model: "B2",
            color: "silver",
            price: 34,
            count: 2,
        },
        {
            name: 'spoon',
            model: "C3",
            color: "grey",
            price: 32,
            count: 1,
        },
        {
            name: 'knife',
            model: "D4",
            color: "black",
            price: 80,
            count: 2,
        },
    ],

    render() {
        const catalogWrapperElem = document.getElementById('catalog');
        const catalogElem = document.createElement('div');
        this.items.forEach(item => {
            const itemElem = document.createElement('div');

            const itemH2Elem = document.createElement('h2');
            itemH2Elem.textContent = item.name;
            itemElem.appendChild(itemH2Elem);

            const itemPElem = document.createElement('p');
            itemPElem.innerHTML = item.price;
            itemElem.appendChild(itemPElem);

            catalogElem.appendChild(itemElem);
        });

        catalogWrapperElem.appendChild(catalogElem);
    }
}

catalog.render();