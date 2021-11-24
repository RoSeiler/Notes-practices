let persona = {

    nombre:"Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000


}


let auto = {

    marca: "Ford",
    modelo: "Fiesta",
    precio: 150000,
    km: 50,
    color: "Azul",
    cuotas: 12,
    anio: 2019,
    patente: null,
    vendido: false,


}

//console.log(auto)

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

let auto2 = new Auto("Toyota", "Corolla", 100000, 500, "Blanco", 14, 2019, null, false);
let auto3 = new Auto("Fitito", "Corolla", 100000, 0, "Blanco", 14, 2019, null, true);
let auto4 = new Auto("Peugeot", "206", 2100000, 400, "Blanco", 14, 2019, null, true);
let auto5 = new Auto("Honda", "Civic", 7500000, 0, "Blanco", 14, 2014, null, true);

//console.log(auto2);
//console.log(auto3);


let autos = [auto, auto2, auto3, auto4, auto5];
//let autos=[];




/*Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba por parámetro 
la patente y devuelva el auto al cual le corresponde. 
En caso de no encontrar el mismo, deberá retornar null.
Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior.*/






/*Etapa 3
Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar 
al automóvil, le asigna el estado de vendido.
¿Cómo lo resuelven?
Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. 
Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto.*/



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
    },
    autosParaLaVenta: function () {
        let autosParaLaVenta = this.autos.filter(autos => autos.vendido === false)
        return autosParaLaVenta; /// por que no se usa el this en los argumentos de la arrow function 
    },
    autosNuevos: function () {
        let autosDisponibles = this.autosParaLaVenta();
        let ceroKm = autosDisponibles.filter(auto => auto.km <= 100);
        return ceroKm;
    },
    listaDeVentas: function () {
        let ventas = this.autos.filter(autos => autos.vendido === true).map(function (autos) {
            return autos.precio
        });
        return ventas;

    },
    totalDeVentas: function () {
        let ventas = this.listaDeVentas();
        let resultado = ventas.reduce((acc, ind) => acc = acc + ind, 0);//en caso de no recibir acumuladores, tomaba el 0 y me lo devolvía---el 0 se agrega a lo que ya me da el reduce, se hay un numero se suma, en este caso como no hay nada, se agrega y me da 0
        return resultado;
    },
    puedeComprar: function (auto, persona ){
        if(auto.precio>persona.capacidadDePagoTotal){
            return false;
        }
        //auto.precio/cantidad de cuotas-------> valor de la cuota
        if( (auto.precio/auto.cuotas)>persona.capacidadDePagoEnCuotas){
            return false
        }
        return true;
    },
    autosQuePuedeComprar: function(persona){
        let paraVenta= this.autosParaLaVenta();
        let arrayResultado=[];
        for(let i=0; i<paraVenta.length; i++){
            if(true===this.puedeComprar(paraVenta[i], persona)){
                arrayResultado.push(paraVenta[i]);
            }

        }
        return arrayResultado;

    }
};
console.log("-------------------------AUTOS PARA VENDER------------------------");
console.log(concesionaria.autosQuePuedeComprar(persona));




/*María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. Resulta que a la concesionaria
 le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. Tené en cuenta que María considera que
  un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad 
  autosNuevos.
¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?
Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.*/