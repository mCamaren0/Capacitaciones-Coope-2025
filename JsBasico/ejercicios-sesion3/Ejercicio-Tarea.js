/*
Construya un máquina registradora

Esta debe poder:
1 - Agregar objetos al carrito, 
2 - Calcular el precio total de la venta
3-  Calcular descuentos
4 - Pagar

Los items del inventario para la caja serán 3:
Telefono - 300
Tele - 220
Consola - 150

Para compras mayores a 400 se debe aplicar un descuento del 10%

El carrito de la máquina debe iniciar vacio siempre

Los métodos a agregar son:
   addItem 
      -> Tiene como parametro el objeto a comprar.
         El objeto tiene que estar dentro de la lista de inventario

    calculateTotalPrice 
      -> Método que itera sobre el carrito de compras y suma los precios

    pay 
      -> Toma como parámetro el monto con el que el cliente va a pagar
         Calcula el precio del carrito con la función anterior
         Verifica si hay que aplicar descuentos
         Debe calcular el cambio, en caso de que haya y desplegarlo
         Si el pago es menor a lo del carrito debe indicarlo también



**************************
Para probar use lo siguiente

cashRegister.addItem("telefono");
cashRegister.addItem("tele");
console.log(cashRegister.calculateTotalPrice());
cashRegister.pay(700);

********************************
Las salidas en consola deben ser

Agregando telefono al carrito
Agregando tele al carrito
520
Tiene un 10% de descuento, el total a pagar es 468
Su cambio es 232
Gracias por la compra!
**********************************
*/

const cashRegister = {
    // Atributos - Agregue los atributos

    // Metodos - Complete los metodos
    addItem: function() {

    },
    calculateTotalPrice: function() {

    },
    pay: function() {

    },

}


