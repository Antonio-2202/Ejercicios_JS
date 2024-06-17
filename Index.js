/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function fizzbuzz() {
    for (let index = 1; index <= 100; index++) {
       var divisibleByThree = index % 3 == 0;  
       var divisibleByFive = index % 5 == 0;
       
       if(divisibleByThree && divisibleByFive) {
        console.log("fizzbuzz");
       } else if (divisibleByThree) {
        console.log("fizz");
       } else if (divisibleByFive) {
        console.log("buzz")
       } else {
        console.log(index)
       }
        
    }
}

/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnAnagram(string1, string2) {
    if(string1.toLowerCase() === string2.toLowerCase()) {
        console.log(string1.toLowerCase() === string2.toLowerCase())
        return false
    }    
    
    return string1.toLowerCase().split('').sort() === string2.toLowerCase().split('').sort()
}
