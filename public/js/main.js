let phrase = "Bonjour tout le monde              ";

console.log(phrase.length);

phrase = phrase.trim();

console.log(phrase.length);

console.log(phrase.charAt(phrase.length - 1));;

phrase = phrase.replace("Bonjour ", "");

phrase = "Bonjour " + phrase;

phrase = phrase.replace(/tout le monde/gi, "");

phrase = phrase.replace("Bonjour", "string"); 


console.log(Math.random());

let phraseModifiee = phrase.substring(0, 4) + phrase[4].toUpperCase() + phrase.substring(5, 6) + phrase[6].toUpperCase() + phrase.substring(7).toLowerCase();

let index = phrase.indexOf("o", phrase.indexOf("o") + 1);
console.log(index);

let nom = "votre nom";
nom = nom[0].toUpperCase() + nom.substring(1, nom.length - 1) + nom[nom.length - 1].toUpperCase();
