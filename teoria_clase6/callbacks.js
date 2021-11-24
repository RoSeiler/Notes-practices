/*let sumar=(numero1, numero2)=>numero1+numero2;
let restar=(numero1, numero2)=>numero1-numero2;
let multiplicar=(numero1, numero2)=>numero1*numero2;
let dividir=(numero1, numero2)=>numero1/numero2;

let calculadora=(numero1, numero2, operacion)=> operacion(numero1, numero2);

console.log(calculadora(3,2,restar));

*/





/*Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.
La primera función se llamará doble. Esta recibirá un número y retornará el doble.
La segunda función se llamará triple. Esta recibirá un número y retornará el triple.
La tercera función se llamará aplicarCallback y recibirá por parámetro un numero y una función. 
Esta retornará el valor de aplicar dicha función al valor que recibió.*/


/*function doble(unNumero){

    return unNumero*2

};

function triple(unNumero){

return unNumero*3

};

function aplicarCallback (unNumero,funcion){

    return funcion(unNumero)
};

console.log(aplicarCallback(2,triple));
*/



/*Creemos cuatro funciones que realicen las operaciones principales de una calculadora. 
Nuestro trabajo será definir la función suma, resta, multiplicacion y division. 
Cada una de ellas recibirá dos parámetros y deberá realizar la operación matemática según corresponda. 
Por ejemplo, la función suma deberá retornar la suma de ambos parámetros; la función resta, la resta de 
ambos parámetros, y así sucesivamente.
Ahora sí, con esas funciones ya definidas, creemos la función calculadora. 
Esta función recibirá dos parámetros numéricos y una función, que será nuestro callback.*/


/*function suma(unNumero,otroNumero){ 
    return unNumero+otroNumero
};
function resta(unNumero,otroNumero){
    return unNumero-otroNumero
};
function multiplicacion(unNumero,otroNumero){
    return unNumero*otroNumero
};
function division(unNumero,otroNumero){
    return unNumero/otroNumero
};

function calculadora(unNumero,otroNumero,operacion){
    return operacion(unNumero,otroNumero)
};

/* otra opcion mas larga para entenderlo mejor:
function sum2(numero1,numero2){
    let resultado=0;
    resultado=numero1+numero2;
    return resultado;
}


console.log(calculadora(2,1,resta));*/



/*Vamos a ejecutar una función que recibimos por parámetro a cada uno de los elementos de un array. 
Para esto debemos completar la función procesar. Esta recibe dos parámetros:
1. El primer parámetro es un array.
2. El segundo parámetro que recibe es una función (al que solemos llamar callback).
La función deberá retornar un array donde cada elemento es el resultado de aplicar la función pasada 
a un elemento del array pasado.

*/
function agregarHttp (array){
    for(let i=0; i<array.length ;i++)
    {
        array[i]="http://www."+array[i];
    }
    return array;
}

/*function agregarMaceta (array){
    for(let i=0; i<array.length ;i++)
    {
        array[i]="maceta"+array[i];
    }
    return array;

}*/

function procesar(array1,funcionParaArray){
    funcionParaArray(array1);
    return array1;
}


console.log(procesar(["google.com","yahoo.com"],agregarHttp));
//console.log(agregarHttp(["google.com","yahoo.com"]));