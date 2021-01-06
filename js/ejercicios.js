/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/
function primero(cadena) {
  if(typeof(cadena)==="string"){
    return new String(cadena).length;
  }
  else{
    return "No es una cadena";
  }
}
/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */
function segundo(cadena,n) {
  if(typeof(cadena)==="string"){
    return new String(cadena).slice(0,n);
  }
  else{
    return "No es una cadena";
  }
} 
/*3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */
function tercera(cadena,separador) {
  if(typeof(cadena)==="string"){
    return new String(cadena).split(separador);
  }
  else{
    return "No es una cadena";
  }
} 
/*4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/
function cuarta(cadena,n) {
  if(typeof(cadena)==="string"){
    return new String(cadena).repeat(n);
  }
  else{
    return "No es una cadena";
  }
} 
/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
const cinco = (cadena = "")=>{
  let inversa = "";
  if(!cadena) return "No ingresaste nada";
  for (let i = cadena.length-1; i >=0; i--){
    inversa += cadena.charAt(i);
 }
return console.log(inversa);
}
/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
const seis = (cadena = "", patron = "") =>{
  if (!cadena || !patron) return console.log("Ingresa cadena y patron")
  let expReg = new RegExp(patron,"ig");
     console.log(expReg.test(cadena));
     return console.log(expReg.exec(cadena));
}
/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/
const siete = (cadena = "") => {
  let palindromo = "";
  if (!cadena) return console.log("Ingresa cadena");
  for (let i = cadena.length-1;  i>=0; i--) {
    palindromo += cadena.charAt(i);
  }
  cadena = cadena.toLocaleLowerCase().replace(/\s+/g, '');
  palindromo = palindromo.toLocaleLowerCase().replace(/\s+/g, '');
  console.log(cadena );
  console.log(palindromo);
  if( cadena=== palindromo) return console.log(true)
  return false;
}

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/
const ocho = (cadena = "",patron = "") => {

  if (!cadena || !patron) return console.log("Ingresa cadena");
   return console.log(cadena.replaceAll(patron,''));
}
/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */

const nueve = ()=>(
  console.log(Math.round(Math.random() * 100 + 50))
)
    /* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */
  const diez = (numero = null ) =>{
    if(!numero) return console.log("Ingresa algun dato");
    if(!parseInt(numero)) return console.log("Ingresa numero valido");
    if(Math.sign(numero) === -1) return console.log("ingresa numero positivo");
    let inverso = numero.toString().split("").reverse().join("");
    (inverso === numero.toString())
    ? console.log("si es")
    : console.log("no es")
  }



    /* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */

    const once = (numero = undefined)=>{
      if(numero === undefined) return console.log("Ingresa algun dato");
    if (numero === 0) return console.log("El factorial es 1");  
      if(!parseInt(numero)) return console.log("Ingresa numero valido");
    if(Math.sign(numero) === -1) return console.log("ingresa numero positivo");
    let factorial = 1;
    for (let i = 1;  i <= numero; i++) {
      factorial *= i;
    }
    return factorial;
  }
    

    /* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */
    const doce = (numero = undefined)=>{
      if(numero === undefined) return console.log("Ingresa algun dato");
    if (numero === 0 || numero === 1) return console.log("No es primo");  
      if(!parseInt(numero)) return console.log("Ingresa numero valido");
    if(Math.sign(numero) === -1) return console.log("ingresa numero positivo");
    let divisores = 0;
    
    for (let i = 1; i <=numero ; i++) {
      if (numero % i == 0) divisores++;
      if(divisores > 2) return console.log("No es primo");
    }
    return console.log("Es primo");
    }

    /* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */
    const trece = (numero = undefined) =>{
      if(numero === undefined) return console.log("Ingresa algun dato");
    if (numero === 0) return console.log("No es par");  
      if(!parseInt(numero)) return console.log("Ingresa numero valido");
    if(Math.sign(numero) === -1) return console.log("ingresa numero positivo");
  (numero % 2 == 0)
    ? console.log("Es par")
    : console.log("No es par")  
  }
    

    /* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */
    const catorce = (grados = undefined, escala = "") =>{
      if(grados === undefined || escala === "") return console.log("Ingresa grados y la escala");
    if (escala !== "F" && escala !== "C") return console.log("Ingresa escala valida");  
    if(typeof(grados) !== "number") return console.log("Ingresa datos validos");
    if(escala === "C"){
      let centigrados = (grados * 1.8) +32;
      return console.log(`${grados}°C equivalen a ${centigrados}°F`)
    }
     let faren = (grados - 32) / 1.8;
    return console.log(`${grados}°F equivalen a ${faren}°C`)
  } 




    /* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */
    const quince = (numero = undefined, base = undefined)=>{
      let original = numero;
       if(numero === undefined || base === "") return console.log("Ingresa numero a convertir y la base");
       
    if(typeof(numero) !== "number" || typeof(base) !== "number") return console.log("Ingresa datos validos");
       if (base !== 2 && base !== 10) return console.log("Ingresa base valida");  
       let cociente , residuo, binario ="";
        let i = 100;
        residuo = numero % 2; 
       if(base == 2){
        while (cociente!==0) {
          cociente = Math.floor(numero/2);
          residuo = numero % 2; 
          numero = cociente;
          binario += residuo;
        }
        binario = binario.split("").reverse().join("")
        return console.log(`El numero ${original} en base 10 en binario es ${binario}`);
       }
       numero = numero.toString().split("").reverse();
    
       let decimal = 0, potencia = 0;
       for (let i = 0; i < numero.length; i++) {
         
         
       
           
           decimal += numero[i]* Math.pow(2,i);
           
           
       }
       return  console.log(`El numero ${original} en base 2 en decimal es ${decimal}`);
    }


    /* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */
    const dieciseis = (total = undefined, porcentaje = undefined) =>{
      
       if(total === undefined || porcentaje === undefined) return console.log("Ingresa total y porcentaje");
       
    if(typeof(total) !== "number" || typeof(porcentaje) !== "number") return console.log("Ingresa datos validos");
       if (!(total>=0) || !(porcentaje>=0)) return console.log("Ingresa numeros positivos");  
       return console.log(`El ${porcentaje}% de descuento de ${total} es: ${total - (total/100)*porcentaje}`)
    }

    /* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */
    const diecisiete = ( fecha = undefined ) =>{
      if(fecha === undefined) return console.log("Ingresa algun dato")
      let inicio = Date.now();
      let tiempo = inicio - fecha;    
      return console.log( `Los años trascurridos desde ${fecha} hasta hoy son ${Math.floor(tiempo/31556900000)} años`);
    }


    /* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */
    const diesiocho = ( cadena = "" ) => {
      
      if(cadena === "") return console.log("Ingresa alguna cadena");
      cadena = cadena.toLowerCase();
      let vocales = ["a","e","i","o","u"];
      let voc = 0 , con = 0;
      for (let i = 0; i < cadena.length; i++) {
      (vocales.includes(cadena.charAt(i))) 
      ? voc++
      : (cadena.charAt(i) !== " ")
        ? con++
        : " "
      }
      return console.log(`La cadena ${cadena} tiene ${voc} Vocales y ${con} Consonantes`)
    }

    /* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */
    const diecinueve = (cadena = "") => {
      if(!cadena) return console.log("Ingresa una texto");
      let expReg = new RegExp("^(?!.* (?: |$))[A-Z][a-z ]+$","ig");
     return console.log(expReg.test(cadena));
    }


    /* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */
const veinte = (cadena ="") => {
  if(!cadena) return console.log("Ingresa una texto");
      let expReg = new RegExp("/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i","ig");
     return console.log(expReg.test(cadena));
}


    /* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */
    const veintiuno = ( array = [] ) => {
      if(array.length === 0) return console.log("Ingresa algun array");
      let cuadrado = Array(array.length);
      for (let  i = 0;  i < array.length; i++) {        
        cuadrado[i] = Math.pow(array[i],2);
      }
      return console.log(`[${array}] ^ 2 = [${cuadrado}]`)
    }


    /* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */
    const veintidos = (array = []) => {
      if(array.length === 0) return console.log("Ingresa algun array");
      array =  array.sort((a, b) => a - b);
      let menor = array[0], 
          mayor = array[array.length-1];
        return console.log(`El menor es ${menor} y el mayor es ${mayor}`)
    }



    /* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

  const veintitres = (array = []) => {
    if(array.length === 0) return console.log("Ingresa algun array");
    let pares = [],
      impares =[];
      for (let i = 0; i < array.length; i++) {
        (array[i]%2 == 0) 
        ? pares.push(array[i])
        : impares.push(array[i])
      }
      return console.log(`Pares [${pares}], Impares [${impares}]`)
  }

    /* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/

    const veiticuatro = (array = []) => {
      if(array.length === 0) return console.log("Ingresa algun array");
      let ascendente = array.sort((a,b) => a-b);
      let descendente = array.reverse();

      return console.log(ascendente,descendente);
    }

    /* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */
    const veinticinco = (array = []) => {
      if(array.length === 0) return console.log("Ingresa algun array");
      let no_repetidos = []
      for (let i = 0; i < array.length; i++) {
        if(!no_repetidos.includes(array[i])) no_repetidos.push(array[i])
      }
      return console.log(`Los caracteres no respetidos son [${no_repetidos}]`)
    }



    /* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */
    const ventiseis = ( array = []) =>{
      if(array.length === 0) return console.log("Ingresa algun array ;)");
      let promedio = 0, acumulado = 0;
      for (let i = 0; i < array.length; i++) {
        acumulado += array[i];
      }
      promedio = acumulado / array.length;
      return console.log(`El promedio es ${promedio}`)
    }


    /* 27) Programa una clase llamada Pelicula.
        La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
          - Todos los datos del objeto son obligatorios.
          - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
          - Valida que el título no rebase los 100 caracteres.
          - Valida que el director no rebase los 50 caracteres.
          - Valida que el año de estreno sea un número entero de 4 dígitos.
          - Valida que el país o paises sea introducidos en forma de arreglo.
          - Valida que los géneros sean introducidos en forma de arreglo.
          - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
          - Crea un método estático que devuelva los géneros aceptados*.
          - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
          - Crea un método que devuelva toda la ficha técnica de la película.
          - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
        * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
        */
           class Pelicula{
             constructor(datos){
               this.id_pelicula = datos.id_pelicula;
             }
             get id(){
               return this.id_pelicula;
             }
           }
export const ejercicios = {
  primero,
  segundo,
  tercera,
  cuarta,
  cinco,
  seis,
  siete,
  ocho,
  nueve,
  diez,
  once,
  doce,
  trece,
  catorce,
  quince,
  dieciseis,
  diecisiete,
  diesiocho,
  diecinueve,
  veinte,
  veintiuno,
  veintidos,
  veintitres,
  veiticuatro,
  veinticinco,
  ventiseis,
  Pelicula
};

