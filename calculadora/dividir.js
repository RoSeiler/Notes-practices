function dividir(numeroA,numeroB){
  
    division=numeroA/numeroB;

    if(numeroA===0 || numeroB===0){

  return "No se puede dividir por cero"; //una funcion devuelve con return, no poner console.log-queda mejor return- ademas con console.log me tutara el numero correcto y despues undefined no se por qué O.o

}

    
    else { return division

    };

};
//console.log(dividir(5,0));

module.exports=dividir; 