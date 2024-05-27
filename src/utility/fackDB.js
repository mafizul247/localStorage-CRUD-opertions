
const addToDB = (id) => {

    let shoppingCart = {};

    const savedCart = JSON.parse(localStorage.getItem('shopping-cart'));
    
    if(savedCart) {
        shoppingCart = savedCart;
    }

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    } else {
        const quantity = 1;
        shoppingCart[id] = quantity;
        // localStorage.setItem(id, quantity);
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDB = (id) => {
    const storedCart = JSON.parse(localStorage.getItem('shopping-cart'));
    if(storedCart) {
        if(id in storedCart) {
            delete storedCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(storedCart));
        }
    }
}

const removeAllFromDB = () => {
    localStorage.removeItem('shopping-cart');
}

export { 
    addToDB,
    removeFromDB,
    removeAllFromDB
 };