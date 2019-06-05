const items = [{
        name: 'iPhoneX',
        price: 70000
    },
    {
        name: 'Защитное стекло',
        price: 1000
    },
    {
        name: 'Чехол',
        price: 2500
    }
];

const renderItem = ({
    name,
    price
}) => `<div class="item"><h3>${name}</h3><span>${price}</span></div>`;

const renderList = (items) => {
    const itemsHtml = items.map(renderItem);
    console.log(itemsHtml);
    document.querySelector('.goods').innerHTML = itemsHtml.join(' ');
};

renderList(items);