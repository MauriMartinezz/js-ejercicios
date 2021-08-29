// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}
function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for (let index = 0; index < array.length; index++) {
    array[index] += 1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  // array.push(elemento);

  array = [...array, elemento];
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  // array.unshift(elemento);
  array = [elemento, ...array];

  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  return palabras.join(" ");
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  return total;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  let total = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    total = total + resultadosTest[i];
  }
  return total / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  let maxValue = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (maxValue < numeros[i]) {
      maxValue = numeros[i];
    }
  }

  return maxValue;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let result = 1;
  if(multiplicarArgumentos.arguments.length === 0){
    return 0;
  }else{
    for(let i = 0; i< multiplicarArgumentos.arguments.length; i++){
      result = result * multiplicarArgumentos.arguments[i];
    }
    return result;
  }
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let count = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) count += 1;
  }

  return count;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  const days = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes","sabado"];
  if (days[numeroDeDia - 1] == "sabado" || days[numeroDeDia - 1] == "domingo") {
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  let arrayNumber = [...(n + "")];
  if (Number(arrayNumber[0]) === 9) {
    return true;
  } else {
    return false;
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  const element = arreglo[0];
  let count = 0;
  for (let index = 0; index < arreglo.length; index++) {
    if (arreglo[index] === element) {
      count = count + 1;
      if (count === arreglo.length) return true;
    } else {
      return false;
    }
  }
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let includedMonths = [];
  for (let index = 0; index < array.length; index++) {
    if (
      array[index] === "Enero" ||
      array[index] === "Marzo" ||
      array[index] === "Noviembre"
    ) {
      includedMonths.push(array[index]);
    }
  }
  if (includedMonths.length != 3) return "No se encontraron los meses pedidos";
  return includedMonths;
}

// console.log(mesesDelAño(["febrero", "Enero", "Marzo", "Noviembre"]));
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let biggerThanHundred = []
   array.map((num)=> num > 100 == true ? biggerThanHundred.push(num) : false);

   return biggerThanHundred;
}

// console.log(mayorACien([101,102,90,44,1002]));

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un
  // límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones
  // coinciden,
  // debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let array = [];
  let result;
  for (let index = 0; index < 10; index++) {
    if(numero !== index){
      numero += 2;
      array.push(numero);
      }else{
      return "Se interrumpió la ejecución";
    }
  }
  return array

}
// console.log(breakStatement(50));
function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5,
  // no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let arrayNumbers = [];
  for (let index = 0; index < 10; index++) {
    if(index != 5){
      numero += 2;
      arrayNumbers.push(numero);
    }else{
      continue;
    }
  }
  return arrayNumbers;
}
console.log(continueStatement(50));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
