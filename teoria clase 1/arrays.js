//let librosFavoritos = [ "Noche de Reyes", "La Conjura de los necios", "El Hobbit"];

//console.log(librosFavoritos[1]);



//NOTA/////////////////////////////////////////////////////////////////////////
//las funciones js que vamos a usar para los arrays se llaman METODOS:


//--->miArray.length (para saber la cantidad de elementos de un array):
//console.log(librosFavoritos.length);



//--->miArray.push(valor que queremos agregar):

//librosFavoritos.push("Drácula");
//console.log(librosFavoritos);

//--->miArray.pop(elimina el ultimo elemento del array y devuelve el elemento que eliminamos):

//let ultimoLibro = librosFavoritos.pop(2) //creamos una variable para GUARDAR lo que devuelve .pop
//console.log(librosFavoritos);
//console.log(ultimoLibro);

//--->miArray.indexOf(valor buscado) muestra la posicion del valor buscado que le pasamos como parametro:

/*let colores=["naranja", "celeste","rosa","amarillo"];
colores.indexOf("amarillo");

console.log(colores.indexOf("amarillo"));*/


//---> .lastIndexOf igual que el anterior pero comienza a buscar desde el final del array hacia el indice 0

/*let colores=["naranja", "celeste","rosa","amarillo"];
colores.lastIndexOf("rosa");
console.log(colores.lastIndexOf("rosa"));*/


//--->.includes es como indexOf pero retorna un booleano: recibe un elemento a buscar en el array y devuelve TRUE si lo encontró o FALSE si no existe:

/*let colores=["naranja", "celeste","rosa","amarillo"];

colores.includes("naranja");

console.log(colores.includes("marron"));*/



//---> .join me permite unificar todos los elementos del array en un unico string separando los valores con una , 

/*let colores=["naranja", "celeste","rosa","amarillo"];
colores.join();

console.log(colores.join()); */



//let estaElLibro=librosFavoritos.indexOf("El Hobbit");//creo una variable para guardar lo que devuelve el metodo. 
//Si no está el elemento que busco me devuelve -1

//let noEstaElLibro=librosFavoritos.indexOf("El meme");

//console.log(noEstaElLibro);



//--->.shift saca del array al elemento ubicado en el indice 0:

/*let colores=["azul", "violeta", "verde"];
let elPrimero=colores.shift();
console.log(colores);
console.log(elPrimero);*/

//--->.unshift inserta 1 o mas datos al principio del array:
/*let colores=["azul", "violeta", "verde"];
colores.unshift("celeste", "amarillo");

console.log(colores);*/





//FIN NOTA/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*Realizá las siguientes consultas utilizando el console.log para ver los resultados:

[].length
numerosDeLoteria.length
[4, 3].length*/

/*let numerosDeLoteria = [22,40,12]

console.log(numerosDeLoteria.length);
console.log([].length);
console.log([4, 3].length);*/




/*1) Imprimí por consola que elementos contiene pertenencias

2) Agregale una "ballesta" 

3) Volvé a imprimir por consola pertenencias.

let pertenencias = [ "espada" , "escudo" , "antorcha" ];

console.log(pertenencias);

pertenencias.push("ballesta")

console.log(pertenencias)*/




/*Declará una función trasladar, que tome dos arrays, 
saque el último elemento del primero y lo agregue al segundo.*/

/*let unArray = [1, 2, 3];
let otroArray = [4, 5];

function trasladar ()
{




}
trasladar(unArray,otroArray);
*/






/*Escribí la función contiene que recibe como parámetros un array y un número. Ésta función deberá 
retornar un booleano (true) que nos diga si el 
número que tenemos como parámetro se encuentra dentro del array o el otro booleano 
en el caso contrario (false).
Recorda que el método indexOf indica la posición de un elemento en el array, y las mismas comienzan en 0, y 
ademas indica un valor particular para los elementos que NO se encuentran dentro del array, que es el -1. 
Con esta información podríamos decir que siempre que el valor sea distinto a -1 la función debería devolver un valor verdadero.*/

/*let array=[1, 2, 3];

function contiene(array, numero){
    return array.indexOf(numero) != -1 == true
}


console.log(contiene(array,4));*/





/*Creá una variable, dentro asignale un array con algunos valores y luego pedile un índice en particular.

¿Qué sucede si le pedís el elemento 0 a una lista vacía?


let frutas =["Manzana", "Melón", "Sandía"];

console.log(frutas[4]);*/





/* escribí nuevamente la función medallaSegunPuesto,  
pero esta vez usando como máximo un sólo if. Quizás los arrays te pueden ser útiles acá .
Podrías probar con un array de strings para guardar los puestos y luego pedir la posición 
del array que como es un dato que puede variar podría ser un parámetro.
*/
//la variable para que la funcion la use o la pongo por fuera pero entra a la funcion por parametros o la incluyo adentro de la funcion



/*function medallaSegunPuesto(puesto){
    let medallas = [ "Oro", "Plata", "Bronce"];
    if ((puesto-1) <= 2) {
         return medallas[puesto-1];// le resto 1 a donde diga puesto para igualar a los datos del array
    }else {
        return "Seguí participando";
    }
    }

    console.log(medallaSegunPuesto(2));*/


/*Declará una función trasladar, que tome dos arrays, saque el 
último elemento del primero y lo agregue al segundo*/


/*Para este ejercicio contamos con el array alumnos. Queremos saber dónde están guardados los nombres
    "Juan" y "Francisco". Utilicemos un método de array para averiguarlo. Para eso, declaremos las
    variables indiceJuan e indiceFrancisco y almacenemos en ellas el índice correspondiente de cada uno.*/


/*let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"]


let indiceJuan = alumnos.indexOf("Juan");

console.log(alumnos.indexOf("Juan"));

let indiceFrancisco = alumnos.indexOf("Francisco");

console.log(alumnos.indexOf("Francisco"));*/





/*Tenemos un array con palabras sueltas que, juntas, forman una gran frase.
Queremos, utilizando un método de array sobre la arrayFrase , convertirlo en una oración entera, 
y almacenar ese String en una variable llamada fraseNueva.*/

/*let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];


  arrayFrase.join();

  console.log(arrayFrase.join());


  let fraseNueva=arrayFrase.join();

  console.log(fraseNueva=arrayFrase.join());*/



/*Para este ejercicio contamos con el array estudiantes, en donde, en cada índice, almacena un objeto con
las propiedades nombre, promedio y curso.
Queremos sacar a Alexis, que acaba de egresar, y sabemos que está último en ese array.
Para eso debemos, utilizando un método de array, guardar los datos de Alexis en una variable 
nueva llamada alumnoEgresado.*/


//let ultimoLibro = librosFavoritos.pop(2) //creamos una variable para GUARDAR lo que devuelve .pop
//console.log(librosFavoritos);
//console.log(ultimoLibro);

/*let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];


  let alumnoEgresado=estudiantes.pop(2);
  console.log(alumnoEgresado);
  console.log(estudiantes);*/



/*Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.
Nuestro trabajo será agregar de a un alumno por vez, utilizando algún método de array.
Los valores de cada uno son:*/

/*let estudiantesNuevos = [

    {
        nombre: "Juan",
        promedio: 5,
        curso: "iOS",
    },
    {

        nombre: "Miguel",
        promedio: 2,
        curso: "Android",
    },

];


let estudiantes = [{
        nombre: 'Alvaro',
        promedio: 9,
        curso: 'Android',
    },
    {
        nombre: 'Daniel',
        promedio: 6,
        curso: 'Full Stack',
    },
    {
        nombre: 'Alexis',
        promedio: 3,
        curso: 'iOS',
    },
]
estudiantes.push(estudiantesNuevos);
console.log(estudiantes);*/




/*Se dio de baja un alumno. Tenemos que dar de baja al primer estudiante y queremos sacarlo del array 
estudiantes. Para eso, debemos crear una variable llamada alumnoDeBaja y, utilizando un método de array, 
almacenar en ella a ese primer estudiante.*/

/*let estudiantes = [
    {
       nombre: 'Alvaro',
       promedio : 9,
       curso : 'Android',
     },
      {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
      },
      {
        nombre: 'Alexis',
        promedio : 3,
        curso : 'iOS',
      },
    ]


  
    let alumnoDeBaja=estudiantes.shift();

    console.log(alumnoDeBaja); 
    */




/*Se reintegraron alumnos.
Tenemos la tarea de reintegrar a dos estudiantes que se habían registrado al principio de todo, 
se dieron de baja, ¡pero volvieron! Y para que no pierdan su lugar privilegiado queremos, utilizando un 
método de array, agregar al inicio del mismo a cada estudiante (de a uno a la vez).
Los datos que hay que agregar de cada uno son:

nombre: "Mariana",

promedio: 9,

curso: "Full Stack"

-------------------------

nombre: "Francisco",

promedio: 2,

curso: "Android"
*/



let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }
  ]

 
let estudiantesReincorporados=[
    
 
{ nombre: "Mariana",

promedio: 9,

curso: "Full Stack"
   },


{  
nombre: "Francisco",

promedio: 2,

curso: "Android"
},

]

estudiantes.unshift(estudiantesReincorporados);

console.log(estudiantes);