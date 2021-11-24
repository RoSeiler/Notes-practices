let auto = {
   marca:null,
   modelo:null,
   precio:null,
   km:null,
   color:null,
   cuotas:null,
   anio:null,
   patente:null,
   vendido:null,

}
function Auto(marca, modelo, precio, km, color, cuotas, anio, patente, vendido){
   this.marca=marca;
   this.modelo=modelo;
   this.precio=precio;
   this.km=km;
   this.color=color;
   this.cuotas;
   this.anio=anio;
   this.patente=patente;
   this.vendido=vendido;

};
let auto1=new Auto("Ford", "Fiesta",150000,200, "Azul",12, 2019,"APL123",false);
console.log(auto1);
let auto2=new Auto("Toyota" ,"Corolla",100000, 0,"Blanco",14,2019,"JJK116",false);
console.log(auto2);

let autos=[auto1,auto2];
module.export=autos;

