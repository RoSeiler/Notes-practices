//if (true) { 
//var nombre ="Coto";
//} 

//console.log(nombre);
//NOTA: IR A UNA CARPETA PARA ATRAS CD..
/*function longitudNombreCompleto(nombre, apellido){

return (nombre+" "+apellido).length;
}
console.log(longitudNombreCompleto("rocio","seiler"));//para mostrar por consola lo que arroja la 
//funcion la tengo que llamar y ponerle los datos que quiero entre parentesis*/
/*function escribirCartelito(titulo, nombre, apellido){

    return (titulo+" "+nombre+" "+apellido);
}*/


/*Definí la función sePoneLaOlla, la cual recibe por parámetro el string del día de la semana. 
Esta función retorna "¡Pongamos la olla, hoy se comen pastas!" si recibe 
por parámetro el valor "Domingo", caso contrario retornará "Mejor lo dejamos para el domingo".*/
/*function sePoneLaOlla(unDia){

    if (unDia=="domingo"){
        return ("¡Pongamos la olla, hoy se comen pastas!");
    }

    else{
        return ("Mejor lo dejamos para el domingo");
    }
          
}
console.log(sePoneLaOlla("martes"));*/



/*Definí la función elMayor, la cual debe recibir por parámetro dos números, 
y como resultado nos devuelva (retorne) el mayor de los dos. Por ejemplo, 
si la función recibiera 4 y 5 retornaría 5 pues es el mayor, y si pasamos 10 y 4,
 retornará 10.*/

/* function elMayor(unNumero, otroNumero){
    
     if (unNumero > otroNumero) {

        return (unNumero);
     }
     
     else{
         return (otroNumero)
     }
}
console.log(elMayor(2,3));*/


/*function signo(unNumero){
    
    
    if(unNumero>1)   {
        return (1);
    }

else if  (unNumero==0){

   
     return (0);

}
 else {
     return (-1);


 }
}

console.log(signo(0));*/


/*Define la función puedoIrAlBanco la cual, recibiendo dos parámetros, el primero: diaDeLaSemana (string)
 el segundo horaActual (number), deberá retornar true, solo si es posible ir al banco y 
 que lo encontremos abierto.
 deberíamos evaluar si el día de la semana es distinto a "Sábado", deberíamos evaluar si el día de la 
 semana es distinto a "Domingo", si el horario es mayor a 10 y si el horario es hasta las 15, 
 ¡y se deben cumplir todas! También recordá que en nuestro programa debemos respetar
  mayúsculas y minúsculas, por ejemplo: "sabado" no es lo mismo que "sábado" ni que "Sábado".*/


/*function puedoIrAlBanco (diaDeLaSemana , horaActual){
    let resultado = //si no le ponia una variable me tiraba "sabado undefined"
    ( diaDeLaSemana!="Sabado" && diaDeLaSemana!="Domingo" && horaActual >= 10 && horaActual <=15)
    
    return resultado
     }
     
 console.log(puedoIrAlBanco("Lunes" , 11));*/


/*Definí la función filosofoHipster  que tome 3 parámetros (en éste orden):

La profesión de una persona(string)
Su nacionalidad (string)
La cantidad de kilómetros que camina por día (number)
Y que evalúe con estos datos, si una persona es o no (true/false) un Filósofo Hipster. 
Tené en cuenta que un Filósofo Hipster es alguien con Nacionalidad Argentina, 
de profesión Músico y a quien le gusta caminar más de 2 kilómetros por día.*/



/*function filosofoHipster(nacionalidad, profesion, cantidadKm) {



    return nacionalidad == "argentina" && profesion == "musico" && cantidadKm > 2
}

console.log(filosofoHipster("peruano", "musico", 4));*/

/*Escribí la función esNumeroDeLaSuerte la cual recibiendo un número, 
le diga a Mariana si es un número de la suerte. Recuerda que el número debe cumplir con las tres 
condiciones mencionadas:
Tiene que ser un número positivo.
Tiene que ser múltiplo de 2 o de 3
No tiene que ser el número 15*/

/*function esNumeroDeLaSuerte(unNumero){
//(distinto se pone !=)
    return  unNumero >0 &&  (unNumero%2==0||unNumero%3==0) && unNumero!=15 ==true//lo que esta entre las 2 && va () porque es un conector DENTRO de la oracion, no entre oraciones
    
}
console.log(esNumeroDeLaSuerte(30));*/


/*Escribí la función puedeJubilarse que recibe por parámetro la edad, el género y además, 
los años de aportes jubilatorios. ené en cuenta que el mínimo de edad para realizar el trámite para las 
mujeres (género "F") es de 60 años, mientras que para los hombres (género "M") es 65. En ambos casos, 
se deben contar con al menos 30 años de aportes jubilatorios.*/

/*

function estaEnEdad(edad,genero){
//las condiciones van separadas, por eso los ()
return (genero=="F" && edad>=60) || (genero=="M" && edad>65)==true;


}


function tieneSuficientesAportes(aniosDeAporte){

return aniosDeAporte>=30==true;


}
function puedeJubilarse(edad, genero, aniosDeAporte){



return  estaEnEdad(edad, genero) && tieneSuficientesAportes(aniosDeAporte);

}


console.log(puedeJubilarse(66,"M",40));*/


/*Definí la función puedeSubirse, la cual, recibiendo 3 parámetros:

alturaPersona (number)
vieneConCompania (booleano)
tieneAfeccionCardiaca (booleano)
Retorne true  o  false  según el caso. 
Tené en cuenta, las condiciones necesarias, mencionadas anteriormente.
(nota: 
Los requisitos para que una persona pueda subir a la atracción son:
Alcanzar la altura mínima de 1.5m (o 1.2m si está acompañada por un adulto)
No tener ninguna afección cardíaca)*/



/*function tieneCompania(altura,acompaniado){

    return (altura>=1.2) && (acompaniado==true)    



}

function controlarAltura(metros){

return (metros>=1.5)==true;

}






function tieneProblemaCardiaco(problemaCardiaco){

    return problemaCardiaco==false
}

function puedeSubirse(alturaPersona,vieneConCompania,tieneAfeccionCardiaca){

return   


}

console.log(puedeSubirse(1.89,false,false));*/


/*Ya has llegado al nivel necesario para ganarte un premio por tu excelente rendimiento. 
Ahora que ya sabés lo suficiente de JavaScript, el jurado de un torneo de programación, 
nos pidió que desarrollemos la función medallaSegunPuesto, la cual retorne la medalla que le corresponde a los primeros puestos, 
según la siguiente lógica:

Primer puesto: le corresponde "Oro"
Segundo puesto: le corresponde "Plata"
Tercer puesto: le corresponde "Bronce"
Otros puestos: le corresponde "Seguí participando"*/


function medallaSegunPuesto(puesto){

    
    if (puesto==1){
        return("oro");

    }

else if(puesto==2){
    return("plata");
}


else if(puesto==3){


    return("bronce");
}


else{

return("segui participando");


}

}

console.log(medallaSegunPuesto(5));