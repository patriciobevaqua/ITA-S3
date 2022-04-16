// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

//Obtengo información del archivo products.json
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:
//         var products []= JSON.parse(xhttp.responseText);
//         //document.getElementById("demo").innerHTML = xhttp.responseText;
//     } // fin del if
// };  // fin de function
// xhttp.open("GET", "products.json", true);
// xhttp.send();


// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    products.forEach((product) => {
        if (id === product.id) {

            cartList.push(product);
        }
    })

    console.log('cartList: ', cartList);
    calculateTotal(cartList); // -> Adiciono Función para calcular el total del carrito (creada en el ejercicio 3)
    generateCart(); // -> Adiciono Función para generar el carrito (creada en el ejercicio 4)
    // console.log('probando función buy');

}

// Exercise 2
function cleanCart() {
    // Itera dentro del array borrando los datos de cada elemento
    products.forEach((product) => {
        if (cartList.length !== 0) {
            cartList.pop();
            // console.log('elemento borrado : ', product.id);  //(-> línea de código para testeo)
            // console.log('cartList : ', cartList);            //(-> línea de código para testeo)
        }
    })

    // cartList.length = 0   (-> sería otra solución posible a la anterior)
    console.log('cartList: ', cartList);
    // console.log('probando función limpiar carrito');         //(-> línea de código para testeo)
}

// Exercise 3
function calculateTotal(cartList) {
    // Calculate total price of the cart using the "cartList" array
    total = 0; // -> Inicialización de la variable total
    i = 1; // -> Inicialización de la variable i
    cartList.forEach((cartProduct) => {
        total += cartProduct.price;
        //console.log('Suma parcial', i++, ':', total);   //muestra por consola suma parcial //(-> línea de código para testeo)
    })

    console.log('Suma Total:     ', total);         //muestra por consola suma total //(-> línea de código para testeo)
    // console.log('probando función calcular total');         //(-> línea de código para testeo)




}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0];
    let newElement = true;
    for (let i = 0; i < cartList.length; i++) {
        newElement = true;

        let lengthCart = cart.length;

        for (let j = 0; j < lengthCart; j++) {

            if (cart[j].id === cartList[i].id) {
                counter[j] = counter[j] + 1;
                cart[j].quantity = counter[j];
                newElement = false;
            }

        }
        if (newElement == true) {
            cart.push(cartList[i]);
            cart[lengthCart].quantity = 1;
        }


    }

    console.log('cart: ', cart);


}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


function open_modal() {
    console.log("Open Modal");
}