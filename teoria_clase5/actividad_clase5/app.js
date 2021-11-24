const fs=require("fs");//no lo necesito instalar porque e sun modulo nativo
//permite leer y escribir archivos del disco duro 
//console.log(fs); //para leer un archivo json si o si necesito el fs

//si quiero leer un archivo necesito decirle a fs que tipo de archivo es:

const tareasJSON= fs.readFileSync("./tareas.json", "utf8");

const tareasArray=JSON.parse(tareasJSON);

//console.log(tareasArray);

let directriz=process.argv[2];//process es el proceso que esta ejecutando node, cada vez que yo escribo un comando (listar, etc) se almacena en argv, que es un array
//siempre voy al inice 2 porque el 0 y el 1 no me interesa, el 0 son los datos de process y el 1 del archivo , recien en el 2 aparece por terminal lo que yo le pido


switch(directriz){

case "listar":
console.log("vas a listar");
for(let i=0, i<tareasArray.length, i++) {

    console.log("*"+tareasArray[i].titulo);
}
break;
case undefined:
console.log("dame una orden");
default:
    console.log("no te entiendo");
}
