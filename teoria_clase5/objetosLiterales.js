//los objetos llevan clave: valor,
//las claves y valores son las "propiedades" del objeto
/*let miPais={
nombre:"Argentina",
poblacion:40000000,
capital: "Buenos Aires"
};*/

//para acceder a una propiedad de un objeto:
//.haciendo referencia al objeto al cual quieremos acceder
//objeto.propiedad

//console.log("La capital de "+miPais.nombre +"es "+miPais.capital);

//otro ejemplo:

/*let curso={
 cantidadAlumnos:30,
 docentes: ["Nacho", "Javi"],//como son + de 1 hago un array
horario: "de 19 a 21 hs.",

}
*/
//console.log(curso);//hasta aca me muestra el objeto completo

//console.log(curso.docentes);//aca me muestra solo docentes



//los objetos literales tmb tienen metodos: SON FUNCIONES que se asignan como valor a una clave y hacen algo mas que un dato

/*let miPais={
    nombre:"Argentina",
    poblacion:40000000,
    capital: "Buenos Aires",
    decirNacionalidad: function(){
return "Nací en Argentina";
    }
    };
    console.log(miPais.decirNacionalidad());*/

//podemos reemplazar la palabra "Argentina", que está 2 veces así:

/*let miPais={
    nombre:"Argentina",
    poblacion:40000000,
    capital: "Buenos Aires",
    decirNacionalidad: function(){
return "Nací en "+ this.nombre;
    }
    };

console.log(miPais.decirNacionalidad());*/


//otro ejemplo:



/*let curso={
    cantidadAlumnos:30,
    docentes: ["Nacho", "Javi"],
   horario: "de 19 a 21 hs.",
   notificaciones: function(){

    return "el horario es "+ this.horario
} 
   }

   console.log(curso.notificaciones());*/



//CONSTRUCTOR DE OBJETOS:
//la funcion constructora inicia con mayuscula.
//nos permite armar un molde y luego crear todos los objetos que necesitemos. Recibe por parametro cada propiedad que queremos asignarle al objeto

/*function Auto(marca, modelo){

    this.marca=marca;//los valores de las propiedades SON LOS QUE VIENEN POR PARAMETRO, por eso el mismo nombre
    this.modelo=modelo;
} */

/// INSTANCIAR: crear un objeto particular a partir de su funcion molde
//para crear un objeto Auto usando "new" y llamando a la funcion pasandole los parametros que espera:

//let miAuto= new Auto("ford",2008)


/*Vamos a ver cómo crear nuestro objeto "perro":
Declarar una variable llamada perro de tipo objeto literal.
Esa variable debe tener 3 propiedades:
1. nombre, con un valor de tipo String.
2. edad, con un valor de tipo Number.
3. vacunado, con un valor de tipo Boolean.
*/

/*let perro = {
    nombre: "Olivia",
    edad: 8,
    vacunado: true
};*/




/*Utilizando los métodos de los objetos
Vamos a reforzar el concepto de un objeto literal tratando de representar un deportista y pedirle que entrene.
Para este ejercicio contamos con un objeto literal deportista ya definido, que tiene los siguientes atributos: 
nombre, energia, experiencia.
Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función entrenarHoras.
La función entrenarHoras tiene las siguientes tres características:
Recibe por parámetro la cantidad de horas.
Resta a su energía (this.energia) la cantidad de horas x 5.
Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del 
deportista por consola.*/


let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cantidadDeHoras){
        this.energia=this.energia-cantidadDeHoras*5
        this.experiencia=this.experiencia+cantidadDeHoras*2

}
};


console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);