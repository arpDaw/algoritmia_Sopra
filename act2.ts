// Escriba un algoritmo que visualice una clasificación de 50 personas según edad y sexo.
// Deberá mostrar los siguientes resultados:
// a. Cantidad de personas mayores de edad (18 años o más).
// b. Cantidad de personas menores de edad.
// c. Cantidad de personas masculinas mayores de edad.
// d. Cantidad de personas femeninas menores de edad.
// e. Porcentaje que representan las personas mayores de edad respecto al total de
// personas.
// f. Porcentaje que representan las mujeres respecto al total de personas.
// Utilice la instrucción LEER PERSONAS al inicio del programa para cargar los datos de las
// 50 personas en un variable, PERSONAS, que actúa como un vector de 50 posiciones.
// Cada elemento de PERSONAS es de un tipo estructurado que dispone dos campos:
// SEXO y EDAD.

class Persona {
  sexo: string
  edad: number
}
const sexoEnum = {
  0: 'hombre',
  1: 'mujer'
}

let personas: Persona[] = [
];

function leerPersonas(){
for (let i = 0; i < 50; i++) {
  let persona: Persona = {
    sexo: sexoEnum[Math.floor(Math.random() * (1 - 0 + 1) + 0)],
    edad: Math.floor(Math.random() * (90 - 0 + 1) + 0)
  }
  personas.push(persona)
}
mayoresDeEdad(personas);
menoresDeEdad(personas);
hombresMayoresDeEdad(personas);
mujeresMayoresDeEdad(personas);
porcentajeMujeres(personas);
}

leerPersonas();

function mayoresDeEdad(personas: Persona[]){
const count = personas.filter(element=>{
  if(element.edad >= 18){
    return true
  }
  return false
}).length
  console.log("a. Cantidad de personas mayores de edad (18 años o más):"+ count)
}

function menoresDeEdad(personas: Persona[]){
  const count = personas.filter(element=>{
    if(element.edad < 18){
      return true
    }
    return false
  }).length
    console.log("b. Cantidad de personas menores de edad:"+ count)
  }

function hombresMayoresDeEdad(personas: Persona[]){
  const count = personas.filter(element=>{
    if(element.edad >= 18 && element.sexo == "hombre"){
      return true
    }
    return false
  }).length
    console.log("c. Cantidad de personas masculinas mayores de edad:"+ count)
  }

  function mujeresMayoresDeEdad(personas: Persona[]){
    const count = personas.filter(element=>{
      if(element.edad < 18 && element.sexo == "mujer"){
        return true
      }
      return false
    }).length
      console.log("d. Cantidad de personas femeninas menores de edad:"+ count)
    }

  function porcentajeMujeres(personas: Persona []){
      const count = personas.filter(element=>{
      if(element.sexo == "mujer"){
        return true
      }
      return false
    }).length

    const porcentaje = (count * 100)/personas.length;
      console.log("f. Porcentaje que representan las mujeres respecto al total de personas: "+ porcentaje + "%")
  }


