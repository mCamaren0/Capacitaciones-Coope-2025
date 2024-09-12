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
    articulos: {
        telefono: 300,
        tele: 220,
        consola: 150
    },

    carrito: [],

    // Metodos - Complete los metodos
    addItem: function(pArticulo) {
        if (this.articulos[pArticulo] !== undefined ) {
            this.carrito = this.carrito.concat(pArticulo);
            console.log(`Agregando ${pArticulo} al carrito`);
            console.log(this.carrito);
        } else {
            console.log(`${pArticulo} no está en el inventario`);
        }

    },
    calculateTotalPrice: function() {
        let total = 0;
        for (let i = 0; i < this.carrito.length; i++) {
            total = total + this.articulos[this.carrito[i]];
        }
        console.log(`Total: ${total}`);
        return total;

    },
    pay: function(pPago) {
        let total = this.calculateTotalPrice();
        let vuelto = 0;

        // Aplicar descuento si el total es mayor a 400
        if (total > 400) {
            total = total - ((total * 10)/100);
            console.log(`Tiene un 10% de descuento, el total a pagar es ${total}`);
        } else {
            console.log(`El total a pagar es ${total}`);
        }

        // Calcular el cambio o indicar si falta dinero
        if (pPago >= total) {
            vuelto = pPago - total;
            if(vuelto > 0){
                console.log(`Su vuelto es de: ${vuelto}`);
                console.log('Gracias por la compra!');
            }
            else{
                console.log('Gracias por la compra!');
            }
            
        } else {
            console.log(`El monto de pago es menor al monto de la compra. Total de la compra: ${total}, dinero faltante: ${total - pPago}`);
        }

    },

}