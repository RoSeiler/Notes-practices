//if ternario

/*let elMayor = 4 > 10 ? "el 4 es mayor" : "el 10 es mayor";

console.log(elMayor);*/

//primero escribimos la condicion que queremos evaluar
/*let fruta="pera";

//comparo fruta con manzana (== es el operador de comparacion)
let resultado=fruta=="manzana"? "Que bien, me gusta la manzana" : "que mal, quería manzana";
console.log(resultado);*/
//pongo el resultado del if dentro de una variable (resultado) para que despues lo pueda ejecutar por pantalla



// switch
/*let dia = "jueves";

switch (dia) {
    case "lunes":
        console.log("es lunes, nos quedamos en casa");
        break;
    case "sábado":
        console.log("es sábado, se sale");
        break;
    case "domingo":
        console.log("es domingo, almuerzo familiar");
        break;
    default:
        console.log("no es ni lunes, ni sábado ni domingo");
        break;
}
*/
/*let semaforo="violeta";

switch(semaforo){
    case "verde":
        console.log("puedo cruzar");
        break;
        case "amarillo":
            console.log("precaucion");
            break;
            case "rojo":
                console.log("hay que esperar");
                break;
                default:
                    console.log("no funciona el semaforo");
}
*/

/*Fin de semana
El objetivo de este ejercicio es imprimir en consola un texto que irá variando según el día que contenga la variable dia.
Para esto, ya presentamos un código hecho con if/else que tendremos que modificar y convertirlo a un switch, manteniendo
 el mismo resultado.*/


 /*let dia = 'jueves'
function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}*/

/*let dia = 'viernes'
switch(dia){
    case "viernes":
        console.log('buen finde');
        break;
        case "lunes":
            console.log('buena semana');
            break;
            default:
                console.log('buen dia');
                break;
};
*/




/*Tengo clases
El objetivo de este ejercicio es imprimir en pantalla un texto que estará condicionado de la siguiente manera. 
Utilizando switch deberemos evaluar si la variable "día" es lunes, miércoles o viernes; y, en ese caso, debe imprimir 
el texto "tenés clases". Para cualquier otro caso debe imprimir "no tenés clases".*/
/*let dia="domingo";

	switch (dia) {
    	case "lunes":
            console.log("tenés clases");
            break;
            case "martes":
                console.log("tenés clases");
                break;
                case"miércoles":
                console.log("tenés clases");
                break;
            default:
                console.log("no tenés clases");
                break;
	};
    */



    /*Practicando el if ternario
Vamos a poner en práctica el if ternario. En este escenario vamos a contar con dos bicicletas y nos interesa saber cuál 
tiene el rodado más grande.Para esto, a la variable bicicletaConRodadoGrande debemos asignarle la bicicleta utilizando 
un operador ternario. El operador ternario debe comparar los rodados de ambas bicicletas y retornar la que tenga el mayor 
rodado.*/


let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB.rodado? bicicletaA: bicicletaB;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );



//primero escribimos la condicion que queremos evaluar
/*let fruta="pera";

//comparo fruta con manzana (== es el operador de comparacion)
let resultado=fruta=="manzana"? "Que bien, me gusta la manzana" : "que mal, quería manzana";
console.log(resultado);*/



// ciclo for

//cómo lo leemos:     primero creamos una variable inicializadora que llamamos i y le asignamos el valor 0
                     //desp pongo la condicion y voy a decir "siempre que i sea menor a 10"
                     //por ultimo creo el modificador: como voy a estar desp de cada iteracion modificando a la variable i
                     //en este caso incrementamos i en 1
                    
/*for(let i=0;i<10;i++){  
    //aca le digo al programa que es lo que vamos a hacer en cada iteracion del ciclo
    console.log("el valor de i es igual a "+ i);
 }
    */



 /*Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!
La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.*/
/*let prueba="Sí, todo lo que oye, ¡lo repite!";

function loro(cualquiercosa){
    
    for(let i=0; i<=4;i++){
        console.log(cualquiercosa)
    }
};

loro(prueba);

*/