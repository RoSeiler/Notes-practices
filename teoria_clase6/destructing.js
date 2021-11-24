// Destructing

//Nos permite extraer datos de arrays y objetos literales


/*Desestructuremos.
Para este ejercicio contamos con un array de destinos del mundo ya definido.
Queremos, usando destructuramiento, definir las variables bariloche y china, y extraer del array únicamente los 
destinos "Bariloche" y "China".*/

let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let [Bariloche, ,China] = destinosDelMundo;
console.log(destinosDelMundo);

   