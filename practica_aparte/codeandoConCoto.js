/*.1)Realizar una funcion que al invocarla nos salude "Hola qué tal"*/

function saludo(){

    return ("Hola que tal");
}

/*console.log(saludo());*/

/*2)Realizar una funcion que reciba un NOMBRE por parametro y realice elmismo saludo que el anterior
pero personalizado*/

function saludoPersonalizado(nombre){

    return ("hola"+" "+nombre+" "+"que tal");
}

/*console.log(saludoPersonalizado("Coto"));*/

/*3)Realizar una funcion que reciba 2 numeros por parametro y realice su suma, multiplicacion, resta y division*/

function sumarNumeros(unNumero, otroNumero){

    suma=unNumero+otroNumero

    return suma
}

/*console.log(sumarNumeros(2,3));*/


function restarNumeros(unNumero, otroNumero){

    resta=unNumero-otroNumero

    return resta
}
 /*console.log(restarNumeros(5,5));*/

 function multiplicarNumeros(unNumero, otroNumero){

    multiplicacion=unNumero*otroNumero

    return multiplicacion
}
 /*console.log(multiplicarNumeros(5,5));*/

 /*function dividirNumeros(unNumero, otroNumero){

    division=unNumero/otroNumero

    return division
}*/
 /*console.log(dividirNumeros(14,2));*/

 /*4)Realizar la funcion juanCarlos la cual consiste en hacer una calculadora pidiendo
 por parametros qué funcion se desea realizar y los dos numeros respectivos*/

/*function juanCarlos(, unNumero,otroNumero){

    return 
}


*/

/*function esPar(numero){

    return numero/2== true;
    
    
    };
    
    console.log(esPar(5));*/

    /*Escribir las siguientes tres funciones:

anterior: recibe un número como parámetro y devuelve ese número menos uno.
triple: recibe un número como parámetro y devuelve el triple de ese número.
anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores, 
tendrá que devolver el número 
recibido multiplicado por 3 (tres) y al resultado restarle 1 (uno).*/


/*function anterior(x){

    return x-1;

};*/

//console.log(anterior(4)); 

/*let triple= function triple(y){

    return y*3;
}*/

//console.log(triple(3));

/*function  anteriorDelTriple(z){

    return anterior(triple(z))//aca podemos llamar a las funciones. Yo lo habia hecho
                            // return z= z*3 -1; y tmb funcionaba, pero el ejecicio
                            // decia que llame a las funciones.
};

console.log(anteriorDelTriple(5));


*/


/*Declaremos una variable con el nombre dato y asignémosle un valor booleano.
Luego, deberemos hacer un if que evalúe esa variable y, si el valor es igual a  true, 
que imprima por consola "es true". Caso contrario, que imprima por consola "es false".*/

/*let dato=true;

if(dato==true){

    console.log("es true");
}

else {

    console.log("es false");
};
*/

/*En este ejercicio nos viene dada una variable llamada lenguaje, que tiene asignado un string. 
Nuestro trabajo es construir un condicional if/else para que, si la variable contiene "javascript", 
imprima por consola el texto "Estoy aprendiendo". 
De lo contrario, que imprima"Lo aprenderé más adelante".*/

/*let lenguaje = "javascript";

if(lenguaje=="javascript"){

    console.log("Estoy aprendiendo");
}

else {

    console.log("Lo aprenderé más adelante");
};

*/


/*Debemos completar la función puedePasar para que, analizando el nombre que recibe por parámetro, 
determine si la persona puede pasar o no. Si la persona se llama "Cosme Fulanito"", no lo dejará pasar 
y lo indicará retornando false; si la persona se llama de otra forma, 
lo dejará pasar y lo indicará retornando true.*/


/*function puedePasar(nombre) {
    if(nombre=="Cosme Fulanito"){
return false;
    ;
        
    }
    else {
        return true;
    }
}
console.log(puedePasar("Cosme Fulanito"));
*/



