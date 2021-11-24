//.length(): devuelve la longitud de una cadena de texto
//cuenta tmb los espacios
//let mensaje="Rueda Nedito rueda";
//console.log(mensaje.length);//me tira que tiene 18 caracteres


//.indexOf():se ejecuta sobre un string y recibe como parametro una cadena de texto:
//"hola mundo".indexOf("mundo") la primera letra de un string siempre esta en el incide 0, mundo arranca en el indice 5
//console.log("hola mundo".indexOf("mundo"));
//si yo quiero saber donde se encuentra la palabra Nedito:
//console.log(mensaje.indexOf("Nedito"));//me tira en el indice 6



//.slice(): toma una porcion de una cadena de texto.Se le pasan 2 datos por parametro, el primero es el indice para empear con la cadena de texto y el segundo es el indice para cortar con esa cadena:
//unString.slice(desde, hasta); 
//console.log("me gusta JS".slice(3,8));
//.slice() no modifica el mensaje original
//console.log(mensaje.slice(0,6));//hice un recorte y me tira solamente "Rueda"

//.trim(): elimina los espacios en blanco, me lo corrige:
//let mensaje=             "Rueda Nedito rueda";
//console.log(mensaje.trim());


//.split(): nos permite convertir un string en un array
//let mensaje="Rueda Nedito rueda"
//console.log(mensaje.split());//asi me lo marca en una sola posicion (0).
//console.log(mensaje.split(" "));//asi me guarda de a una palabra y me las separa con un espacio
//se transformo en un array con 3 posiciones(0, 1 y 2)



//.replace(): reemplaza una palabra por otra. en el primer parametro va la palabra que queremos reemplazar y en el segudo, la palabra nueva que reemplaza a la primera.
//let mensaje="Rueda Nedito rueda"
//console.log(mensaje.replace("rueda","salta"));





/*Debemos crear una función llamada dominio que recibirá un string como "digitalhouse.com.ar" 
y su función será retornar: "http://www.digitalhouse.com.ar".*/



/*let fraseA = "digitalhouse.com.ar";


function dominio(fraseA) {
    if (fraseA === "digitalhouse.com.ar") {//el if me asegura que entre el dato que tiene q ir
        return ("http://www."+fraseA);
    }
}


console.log(dominio("las pistasn de blue"));

*/



/*Lo primero que necesitamos es declarar una variable llamada texto, asignándole como valor un texto 
(string), el que queramos. Luego, utilizando la propiedad length, tendremos que imprimir en consola 
el total de caracteres que contiene la frase.*/

/*let texto="Hola soy un texto";

console.log(texto.length);*/






/*¿Están hablando de mí?
Para el siguiente ejercicio vamos a suponer que tenemos un texto que copiamos y queremos saber si el texto menciona una 
palabra en particular.Para lograrlo, tendremos que crear una función llamada menciona, que recibirá dos parámetros: 
un texto —que es donde vamos a buscar— y una palabra —que es la que vamos a averiguar si se menciona en el texto—. 
La misma función retorna true en el caso de encontrar la palabra.*/


//"hola mundo".indexOf("mundo") la primera letra de un string siempre esta en el incide 0, mundo arranca en el indice 5
//console.log("hola mundo".indexOf("mundo"));
//si yo quiero saber donde se encuentra la palabra Nedito:
//console.log(mensaje.indexOf("Nedito"));//me tira en el indice 6
 
/*let  ejemplo='Existen muchos lenguajes de programación y JavaScript es uno de ellos';


function menciona(texto,palabra){

    let resultado=texto.indexOf(palabra);

    if (resultado!==-1){
        resultado=true;
    }
  
    return resultado;

}


console.log(menciona(ejemplo,"lenguajes"));



*/

/*Teniendo como punto de partida la cadena de texto '¡Hola!, soy Carli', deberemos recortarla para poder obtener el 
nombre 'Carli' en una nueva variable llamada licenciada.
IMPORTANTE: Para la resolución tendremos que usar la función slice().*/

/*let frase = 'Hola!, soy Carli';

let licenciada= "Carli";

console.log(frase.slice(0,11));*/
