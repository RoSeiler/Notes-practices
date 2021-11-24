/*Escribí la función sumatoriaBajoImporte la cual recibiendo un array con importes nos devuelva el resultado final de la suma de los importes 
de todos los meses que tienen ganancia,
 a excepción de los que superen un importe de $ 1.000*/


/*let arrayConImportes = [1000, 50, 600, 300, -100, 1500, 150];

function sumatoriaBajoImporte(arrayConImportes) {
    let suma = 0; //creamos la variable suma para guardar los elementos que se van sumando
    for (let i = 0; i < arrayConImportes.length; i++) { 
                 //condicion de corte: mientras i sea menos al tamaño del array,  que aumente de 1 en 1
      

        if ((arrayConImportes[i] > 0) && (arrayConImportes[i] <= 1000)) {
            suma = suma + arrayConImportes[i];
        }
    }
    return suma
}
console.log(sumatoriaBajoImporte(arrayConImportes));*/




/*Nos piden que escribamos la función asientosDisponibles(), que tome como parámetro un conjunto de asientos disponibles y el 
asiento que quiere ocupar la persona. 
Nuestra función deberá verificar si el asiento solicitado se encuentra disponible y devolverle un mensaje claro*/


/*let asientos = [3, 15, 18, 25]

function asientosDisponibles(asientos, asientoUsuario) {

    for (let i = 0; i < asientos.length; i++) {

        if (asientoUsuario == asientos[i]) { //si el asiento usuario es igual a asiento en posicion i
                                             //(en posicion i porque compara todos los elementos del array)

            return ("Felicitaciones, el asiento número" + " " + asientos[i] + " " + "está disponible");
        }
    }
    return ("Lo sentimos, el asiento número" + " " + asientoUsuario + " " + "está ocupado, pero aún quedan" + " " + asientos.length + " " + "asientos disponibles");
}

console.log(asientosDisponibles(asientos, 56));*/


/*Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual cuando reciba la cantidad de estaciones que 
avanzó el tren nos devuelva un reporte de la cantidad de gente de cada una de las estaciones y la cantidad de pasajeros que lleva el tren. 
La empresa nos provee los siguientes datos:

El tren sale de la estación terminal siempre con 200 pasajeros.
En cada estación el tren sube 50 pasajeros y se bajan 30.
En la estación Florida (la estación número 5), como es una estación central es la única donde bajan 80 personas y suben 120.
*/



function reporteDePasajeros(cantidadEstaciones) {
let reporte = []

    let pasajeros = 200; //en esta variable se va guardando la suma de pasajeros

    for (let i = 0; i <= cantidadEstaciones; i++) { //queremos que todas las estaciones sumen 20 pasajeros menos en la 5. por ello uso un for, 
        //                                          porque yo quiero que en todas las estaciones, 
                                                   //que no se cuantas son, sume 20, salvo en la q es distinta
                         //condicion de corte: hasta la cantidad de estaciones. Esto me permite contar hasta donde dice el usuario. 
                         //El i++ es para que vaya estacion por estacion sumando
        if (i != 5 && i!=0) {
            pasajeros = pasajeros + 20;
        }
         else if(i==5) {
            pasajeros = pasajeros + 40;
        }
        reporte.push ("En la estación" + " "+ i + " hay" + " "+ pasajeros + " "+ "pasajeros arriba del tren");
    }
    return reporte
} 

console.log(reporteDePasajeros(5));