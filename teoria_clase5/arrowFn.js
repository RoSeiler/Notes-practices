/*let laMitad=numero=>numero/2
// declaro una variable que va a tomar un numero y le digo que ese numero lo / por dos

console.log(laMitad(2));

let dividir=(numeroA, numeroB)=>numeroA/numeroB;

console.log(dividir(20,4));*/


/*let tengoQueEstudiar= dia => {

if(dia=="Sábado" || dia=="Domingo"){
    return "podes descansar";
}

else {
    return "Tenes que estudiar";

}
};

console.log(tengoQueEstudiar("Domingo")); */


/*Convertir a arrow function
Empecemos por practicar la sintaxis de una arrow function que no recibe parámetros.
Para este ejercicio vamos a dar tres funciones ya definidas.
 Nuestro trabajo será cambiarle la sintaxis y volver a escribirlas para que sean funciones de tipo arrow.*/


 /*function dameCinco() {
    return [1,2,3,4,5];
}*/

/////COTO/////////
let numeros=[1,2,3,4,5];
let dameCinco=() => numeros
console.log(dameCinco());



/*function multiplicarPorDos() {
  return 123 * 2 ;
}

let multiplicarPorDos=numero=>numero*2;
console.log(multiplicarPorDos(4));


function mostrarNombre() {
  return "Mi nombre es Hernán";
}

let mostrarNombre=()=>"Mi nombre es Hernán";
console.log(mostrarNombre());
*/



/*Arrow function con parámetro
Ahora nuestro trabajo será refactorizar la función saludar() que recibe un parámetro, es decir, escribirla con la sintaxis 
necesaria para convertirla en una arrow function.*/

/*unction saludar(nombre) {
    return 'Hola, ' + nombre + '!';
}*/

/*let saludar=nombre=>"Hola "+ nombre+ " !";

console.log(saludar("Rocio"));*/



/*Ahora probemos con más de uno
¡Vamos a pasar nuestra función declarada a una arrow!
Y sí, solo nos falta practicar la sintaxis de una arrow function que reciba más de un parámetro. 
Tomemos la función saludar(), que esta vez recibe un nombre y un apellido, y veamos de convertirla en una arrow function.*/

/*function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' +  apellido + '!';
}*/

let saludar=(nombre,apellido)=>"Hola, "+nombre+" "+ apellido + "!";
console.log(saludar("Rocio","Seiler"));
