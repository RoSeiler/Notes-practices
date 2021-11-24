/* /*En base a las definiciones técnicas tomadas con el equipo deberás declarar la variable autos. Esta debe contener
 los siguientes vehículos:
*El primer auto es un Ford Fiesta Azul, del 2019, con 200 kilómetros, cuyo precio es 150000, disponible en 12 cuotas, con la patente APL123 que no está vendido.
*El segundo auto es un Toyota Corolla Blanco, del 2019, 0 kilómetros, cuyo precio es 100000, disponible en 14 cuotas, con la patente JJK116 que no está vendido.
Cada auto debe tener los siguientes atributos: marca, modelo, precio, km, color, cuotas, anio, patente, vendido.*/


let auto = {

    marca: "Ford",
    modelo: "Fiesta",
    precio: 150000,
    km: 200,
    color: "Azul",
    cuotas: 12,
    anio: 2019,
    patente: null,
    vendido: false,

}

console.log(auto)

function Auto(marca, modelo, precio, km, color, cuotas, anio, patente, vendido) {
    this.marca = marca
    this.modelo = modelo
    this.precio = precio
    this.km = km
    this.color = color
    this.cuotas = cuotas
    this.anio = anio
    this.patente = patente
    this.vendido = vendido
}

let auto2 = new Auto("Toyota", "Corolla", 100000, 0, "Blanco", 14, 2019, null, false);

console.log(auto2);


let autos = [auto, auto2];
module.export = autos;






/*Etapa 1
En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo donde 
estás trabajando.
Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el 
cliente solicita.
Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles 
importada anteriormente.*/

//requerir módulo autos 
/*const autos=require("./autos");
const concesionaria = {

    //completar 
     autos: autos,
};
*/






/*Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba por parámetro 
la patente y devuelva el auto al cual le corresponde. 
En caso de no encontrar el mismo, deberá retornar null.
Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior.*/
/*const autos = require("./autos");
const concesionaria = {

    autos: autos,

    //necesitamos la extension de objetos para que busque patente

    buscarAuto: function (patente) {

        for (let i = 0; i < autos.length; i++) {
            if (this.autos[i].patente == patente) {
                return this.autos[i];
            }
        }
        return null;


    }

}





/*Etapa 3
Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar 
al automóvil, le asigna el estado de vendido.
¿Cómo lo resuelven?
Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. 
Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto.*/


/*const autos = require("./autos");
let concesionaria = {
    autos: autos,

    buscarAuto: function (patente) {
        for (let i = 0; i < autos.length; i++) {
            if (this.autos[i].patente == patente) {
                return this.autos[i];
            }
        }
        return null;
    },

    venderAuto: function (patente) {

        this.buscarAuto(patente).vendido = true
    }
};*/





/*Funcionalidad extra
La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta. 
A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, usando la función 
autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían de aparecer los autos que ya fueron 
vendidos. Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior. 
Tené en cuenta que estamos optimizando nuestro código, por lo cual, deberíamos utilizar el método filter.*/


const autosrequeridos = require("./autos");
let concesionaria = {
    autos: autosrequeridos,
    autosParaLaVenta: this.autos.filter(function () {
        vendido == false;


    })
} 