# Sprint 3 IT Academy | Shop

## Introduction

Una empresa del sector e-commerce nos ha pedido una aplicación web, que le permita ofrecer la compra de sus productos a través de internet.

Serás el encargado de montar una versión inicial de demo de la aplicación para el cliente: gestión del carrito de la compra y la aplicación de las promociones sobre el precio final. Tienes 2 semanas de plazo, que es lo que dura este sprint.

<br>

## Requirements

Nivel 1

- Ejercicio 1
En primer lugar, al tratarse de un e-commerce, haremos que el usuario pueda añadir productos al carrito.

La función que tienes que completar es dice buy(), la cual recibe el id del producto a añadir. Tienes que buscar el producto utilizando este id recibido en el array products, para finalmente añadirlo al array cartList.

Los botones que deben ejecutar la función buy() son los azules que se encuentran en cada producto:
[IMAGE]

Para realizar este ejercicio y los siguientes, no tienes que modificar los nombres de las funciones ni sus parámetros de entrada, ni traducir ninguno de los datos que están en inglés.

Ayuda: para buscar el producto en el array products mediante el id, puedes utilizar un bucle for.

Ayuda: Tomate los ejercicios con calma, no es fácil aprender a programar.

- Ejercicio 2
Ahora implementaremos una función que permita al usuario eliminar el array generado en el anterior ejercicio: vaciar el carrito.

En este caso, deberás rellenar la función cleanCart(), la cual debe reinicializar la variable cartList.

Ayuda: aquí encontrarás información de cómo vaciar un array.

- Ejercicio 3
Genial, el e-commerce va tomando forma! es el momento de calcular el total del importe del carrito.

Se debe implementar un bucle "for" para ir sumando el importe de todos los productos.

- Ejercicio 4
Lo estás haciendo muy bien, casi has completado el nivel 1!

Como habrás podido observar, tenemos muchos items repetidos en el carrito de la compra. Sería más conveniente que no aparecieran repetidos, si no que cada producto del carrito contara con un campo cantidad.

Para ello, deberás completar la función generateCart(), la cual recibe el array cartList, generando el array cart.

Un ejemplo de cada elemento del array cart es:

{
  name: 'cooking oil',
  price: 10.5,
  type: 'grocery',
  quantity: 3,
  subtotal: 31.5,
},

Ayuda: Simplemente se debe hacer un bucle sobre el array cartList, y en cada iteración del bucle, es decir, pero cada elemento de cartList, debemos validar si existe este producto en el array cart:

En caso de que no exista, lo añadimos al array cart (cuenta, no se te olvide agregar la propiedad quantity con valor 1 al producto antes de hacer push).
Si en cambio ya existe este producto en el carrito, deberemos incrementar el campo cuánto.

- Ejercicio 5
Para ser un buen e-commerce, nos falta implementar promociones, apartado importantísimo en cualquier tienda.

Para ello, el cliente nos ha transmitido dos tipos de promociones que quiere para su e-commerce:

Si el usuario compra 3 o más botellas de aceite, el precio del producto desciende a 10 euros.
Al comprarse 10 o más mezclas para hacer pastel, su precio se rebaja a 2/3.


En este ejercicio debes completar la función applyPromotionsCart(), la cual recibe el array cart, modificando el campo subtotalWithDiscount en caso de que se aplique promoción:

{
  name: 'cooking oil',
  price: 10.5,
  type: 'grocery',
  quantity: 3,
  subtotal: 31.5,
  subtotalWithDiscount: 30
},

Ayuda: como cada aproducto del carrito tiene cantidad, ya puedes validar si tiene descuento:

En caso de que un producto tenga descuento, se debe guardar el precio total con descuento en el campo: subtotalWithDiscount.
En caso de que no se le tenga que aplicar descuento, no hace falta que guardes nada.

- Ejercicio 6
Hasta este ejercicio solo hemos implementado la lógica de la pantalla principal de la tienda. Ahora implementaremos la validación del formulario de checkout que se encuentra en el archivo checkout.js.

Para acceder a esta pantlla, tienes que clicar en el icono del carrito de la parte superior derecha de la pantalla, apareciendo un modal con el boto que te llevará a esta pantalla.

Podrás observar que hay un formulario con los campos nombre, apellidos, email, contraseña, dirección y teléfono:
[IMAGE]

En este ejercicio deberás implementar la lógica para que los campos del formulario cumplan las siguientes condiciones:

- Todos los campos son obligatorios.

- Todos los campos deben tener al menos 3 caracteres.

- El nombre y apellidos deben contener sólo letras.

- El teléfono debe contener sólo números.

- La contraseña debe incluir números y letras.

- El email debe tener formato de email.

Cuando el usuario introduzca un campo que no cumpla las condiciones anteriores, el input debe resaltarse en rojo y mostrar un mensaje en la parte inferior a manera de feedback al usuario, para que sepa cómo rectificar.

Ayuda: podrás colorear en el borde del input rojo y mostrar el mensaje de error manipulando el domo, aunque también puedes usar la clase is-invalid de bootstrap.

En este enlace tienes información que te puede ayudar a hacer la validación con JavaScript: https://www.w3schools.com/js/js_validation.asp

<br>