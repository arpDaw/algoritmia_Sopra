// Desarrolle un algoritmo para el cálculo del salario de un trabajador. 
// El importe liquidado (sueldo) depende de una tarifa o precio por hora establecida y
// de un condicionante sobre las horas trabajadas: si la cantidad de horas trabajadas es mayor a 40 horas,
// la tarifa se incrementa en un 50% para las horas extras. 
// Calcular el sueldo recibido por el trabajador en base las horas trabajadas y la tarifa.
// Utilice las instrucciones LEER HORASTRABAJADAS y
// LEER TARIFA al inicio del programa para cargar los valores en las variables HORASTRABAJADAS y TARIFA.

let horasTrabajadas: number;
let tarifaEstablecida: number;
let precioHora: number;
let sueldo: number;

function leerHorasTrabajadas(horas){
 horasTrabajadas = horas;
}

function leerTarifa(tarifa){
    tarifaEstablecida = tarifa;
}

function leerPrecioHora(precio){
    precioHora = precio;
}

function calcularSueldo(){
if(horasTrabajadas <= 40){
    leerTarifa(1);
    console.log(tarifaEstablecida)
    sueldo = horasTrabajadas * (precioHora * tarifaEstablecida);
    console.log(sueldo)
}else{
    leerTarifa(1.5);
    let horasExtra = horasTrabajadas - 40;
    sueldo = 40 * precioHora;
    sueldo += horasExtra * (precioHora*tarifaEstablecida);
    console.log(sueldo)
}
}
leerHorasTrabajadas(50);
leerPrecioHora(10);
calcularSueldo();
