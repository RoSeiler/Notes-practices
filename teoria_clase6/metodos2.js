
//LOS METODOS DE ARRAY SE EJECUTAN SOBRE UN ARRAY



//map() recibe un callback por parametro recorre el array y retorna uno nuevo con la misma cantidad de elementos:

/*let numero=[3,5,9];

let elDobleDelNumero=numero.map(function(numero){

    return numero*2;
});

console.log(elDobleDelNumero);*/

//otro ejemplo: 

/*let notas =[ 10, 4, 6, 9, 2, 8];

let notaHastaEl100=notas.map(function(numero){ //como es una funcion hago que reciba un numero por parametero para que despues lo use adentro de la funcion.

    return numero*10;

});
//console.log(notaHastaEl100);*/






//filter() filtra los elementos de un array devolviendo solo los que le pedimos en la funcion. Puede dar un array vacio si ninguno de
// los elementos cumple con la condicion dada:

/*let edades=[18,69,4,12,37];
let mayores=edades.filter(function(unaEdad){

return unaEdad>=18;

});
console.log(mayores);*/

//otro ejemplo, si yo quiero filtrar solo las notas aprobadas:

//let notas =[ 10, 4, 6, 9, 2, 8]
/*let notasAprobadas = notas.filter(function(numero){

return numero>=7;

});

//console.log(notasAprobadas);
*/





//reduce() el objetivo es reducir el array lo mas que se pueda devolviendo un unico valor. El callback aca recibe 2 parametros
//el primero es el acumulador, el que va juntando, y el segundo va a ser el elemento actual que va tomando del array


//Si quiero sumar todas esas notas:
//let notas =[ 10, 4, 6, 9, 2, 8]

/*let sumaNotas= notas.reduce(function(estado,numero){
//cada vez que se sume una nueva nota lo voy a estar guardando en estado al que se le van sumando los nuevos elementos
return estado+numero;

});

//console.log(sumaNotas);

*/





//forEach() itera sobre el array, no devuelve nada.
//si quiero mostrar pais por pais en pantalla:
/*let paises=["Austria","Alemania","Andorra","Argentina"];

paises.forEach(function(unPais){

    console.log(unPais);
});
*/
//si queremos realizar una operacion por cada uno de los elementos de nuestro array:

//let notas =[ 10, 4, 6, 9, 2, 8]
/*notas.forEach(function(valor,indice){
//recibe 2 parametros, el valor de cada uno de los elementos del array y el indice de cada uno de los elementos

//como lo quiero ver por consola directamente hacemos console.log:

console.log("En la posición "+ indice+ " tengo el valor "+valor)
});
*/


/*Debemos crear una función llamada dominio que recibirá un string como "digitalhouse.com.ar" y su función será retornar: 
"http://www.digitalhouse.com.ar".*/

//COTO///////////////////////

/*let frase="digitalhouse.com.ar";

function dominio(frase){

    return " http://www."+ frase;
}

console.log(dominio(frase));

*/

/*Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados para acordar un recuperatorio. 
Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. 
Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.*/

/*let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]



let aprobados=estudiantes.filter(function(element){

    return element.promedio>=7;
    
  
   
});

let desaprobados=estudiantes.filter(function(element){
   
   
   return element.promedio<7;

});

console.log(aprobados);






//let notas =[ 10, 4, 6, 9, 2, 8]
/*let notasAprobadas = notas.filter(function(numero){

return numero>=7;

});

//console.log(notasAprobadas);*/


/*Nos dejaron una lista con los horarios de partida de algunos aviones.
 Esta lista se reproduce directamente en las pantallas del aeropuerto y, a modo de travesura, queremos adelantar 
 una hora cada partida. Nuestro trabajo será utilizar el método map para poder lograrlo y almacenar la lista en una 
 variable nueva llamada horariosAtrasados.*/

/*let horariosPartida = [12, 14, 18, 21];

 let horariosAtrasados=horariosPartida.map(function(hora){

    return hora -1;
    
 })

 console.log(horariosAtrasados);*/



/*Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.
Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.*/


   
/*let vueltas = [5, 8, 12, 3, 22]
let totalVueltas=vueltas.reduce(function(estado,numero){

    return estado+numero
});

console.log(totalVueltas);*/



/*Para este ejercicio tenemos el array listaDeSupermercado. 
Nuestro trabajo será mostrar cada ítem de esa lista por consola utilizando un foreach.*/


/*let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDetallada=listaDeSuperMercado.forEach(function(producto){

    console.log(producto);
});

*/





/*Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los 
siguientes tres parámetros:
1. Un texto.
2. La palabra que vamos a buscar para reemplazar.
3. La palabra que vamos a usar para reemplazar.
La función deberá devolver el texto con la palabra reemplazada.*/

/*let caramaniola="A la grande le puse Coca";
let buenardo="Coca";
let pichicho="Cuca"; 

function reemplazoFastFast(texto,palabra1,palabra2){

    return texto.replace(palabra1,palabra2);

};

console.log(reemplazoFastFast(caramaniola, buenardo, pichicho));*/