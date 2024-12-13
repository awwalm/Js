// fetch(<URL>, {})

const simpleAsyncFetch = () => {
    fetch('https://dummyjson.com/products/1', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Apple iPhone',
            description: 'iPhone 15 Pro Max',
            price: 1000.00,
            rating: '9/10'
        })
    })
    .then(response => response.json())
    .then(data => console.table(data))
    .catch(error => console.log(error));
}

const getAllProducts = async () => {
    try {
       const response = await fetch('https://dummyjson.com/products/');
        const json = await response.json();
        console.table(json); 
    } catch (error) {
        console.log(error);
    } 
}

simpleAsyncFetch();
getAllProducts().then(r => console.log(r));

