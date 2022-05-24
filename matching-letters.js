// https://www.codewars.com/kata/5912ded3f9f87fd271000120



function countCorrectCharacters(correctWord, guess) {
    // Code here
/* 
Tengo que buscar qué coincidencia hay no solo en las letras, sino también en la posicición.

Puedo tratar las dos palabras como arrays, pero solo es necesario recorrerlo una vez, es decir para el primer caso ("dog", "car"): 
la "c" coincide con la "d"?:
la "a" coincide con la "o"?;
la "r" coincide con la "g"?;

Según vaya encointrando coincidencias las iré sumando en una variable.

En el caso de que coincidan las 3 letras daré un mensaje de felicitación.


*/

console.log(guess.length);

}

countCorrectCharacters("dog", "car"); //0 (No letters are in the correct position)
countCorrectCharacters("dog", "god"); //1 ("o")
countCorrectCharacters("dog", "cog"); //2 ("o" and "g")
countCorrectCharacters("dog", "cod"); //1 ("o")
countCorrectCharacters("dog", "bog"); //2 ("o" and "g")
countCorrectCharacters("dog", "dog"); //3 (Correct!)