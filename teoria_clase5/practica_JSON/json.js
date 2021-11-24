
/////////////////////////////////////////JSON/////////////////////////////////////////

/*let datos=  ["unDato", "otroDato", "unDatoMás"]; 

let datosJson=JSON.stringify(datos);

console.log(datosJson); //le pase un array y me lo devolvió string

*/

/*let datosObjeto= {

    "nombre":"Rocio",
    "perro": true,
    "anios":32,

};

let datosAjson=JSON.stringify(datosObjeto);
console.log(datosAjson); //le pase un objeto y tmb me devolvio un string
*/


let datos=  ["unDato", "otroDato", "unDatoMás"]; 

let datosJson=JSON.parse(datos);

console.log(datosJson);