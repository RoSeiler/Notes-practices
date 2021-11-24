//for (Inicio; condicion; modificador){ }


/*for (let vuelta=1; vuelta<=5;vuelta++){


    console.log("Dando la vuelta"+""+vuelta);
}*/

/*for (let i=0;i<=4;i++){ // empezamos declarando una variable (i) que va a ser =0
          
     console.log( "a ver ahora" +" "+i);//y queremos que se ejecute mientras la variable i sea menos o igual a 4
  }*/

/*Realizar una función llamada imprimirAzul4 que muestre por consola 
4 veces la palabra Azul.*/

/*function imprimirAzul4(){
    for(let i=1; i<=4;i++)
    
    console.log("Azul");
    
    }



  

imprimirAzul4();//llamo a la funcion para poder ver. */





/* otra pero ahora con 5:*/

/*function imprimir5veces5 (){
    for(let i=1; i<=5;i++)
    console.log(5)
}
//cuando la funcion no tiene return, la llamo directamente, no pongo el console.log porque la funcion no tira nada.
imprimir5veces5();*/


/*Escribí una función pasitoAPasito, que imprime por consola 5 veces el contenido de i*/


/*function pasitoAPasito(){

    for ( let i = 0 ; i <=4; i++ ){ 
       console.log(i);
    }  
}
pasitoAPasito();*/

/*Escribí una función llamada pasandoPorI (la última letra es una i latina mayúscula) que muestre por consola 
"acá i tiene el valor de x" 
donde x va a ser el valor de la variable i en cada iteración, por cada valor que va tomando i desde 0 hasta el numero 4 inclusive.*/


/*function pasandoPorI(){

    for ( let i = 0 ; i <=4; i++ )

    console.log("acá i tiene el valor de" +" "+i)
}

pasandoPorI();*/

/*Realizar una función llamada pasandoPorLosPares() que muestre por consola acá i tiene el valor de x por cada valor PAR 
que va tomando i desde 0 hasta 6 (inclusive). Te recordamos que debes prestar especial atención con los espacios. 
En el ejercicio debe haber un solo espacio entre cada palabra.*/



/*function pasandoPorLosPares() {
    let i=0;//declaramos la variable i porque si no me tira que no está definida y va arriba del for porque desp, en el for, yo ya la estoy usando
    for (i = 0; i <= 6; i++) {


        if (i % 2 == 0) {

            console.log("acá i tiene el valor de" + " " + i);

        }

    }



};

pasandoPorLosPares();//recordá llamar a la funcion al final!!!*/




/*Escribí una función imprimirAzul, que toma como parámetro un valor numérico X e imprima "Azul" X cantidad de veces. 
IMPORTANTE te recordamos que "Azul" no es lo mismo que "azul" en este ejercicio debes utilizar "Azul".*/

/*function imprimirAzul(){

    let x= 4;//Para que el for sea dinámico y en vez de repetirse solo 4 veces pueda hacerlo x cantidad
          // de veces ponemos x y declaramos antes la variable que se va a modificar

    for(let i = 0 ; i < x ; i++ )
                                  //podemos asignarle distintos valores a la variable x. Una manera de obtener este valor sería si nos 
                                  //lo pasan como parametro de una función y adentro de la misma, usarla.
    console.log("Azul");
}

imprimirAzul(4);*/




/*Escribí una función sumar5MonedasDe25Centavos, que sume el valor de 5 monedas de 0.25 centavos y retorne el resultado.*/

/*function sumar5MonedasDe25Centavos(){

    let valor5monedas=0
     for(let i = 0 ; i < 5 ; i++ ){

        valor5monedas=valor5monedas + 0.25;
     }
     return(valor5monedas);
}

console.log(sumar5MonedasDe25Centavos(0.25));*/



