"use strict";

//  Définition d'Ecmascript : standart de language de programmation 

let variableLet= "globale";
var variableVar = "globale";
console.log(variableLet); // globale
console.log(variableVar); // globale

if(true)
{
    let variableLet="locale";
    var variableVar="locale";
    console.log(variableLet); 
    console.log(variableVar); 
}

console.log(variableLet); // globale
console.log(variableVar); // locale, normalement on devrait afficher globable. D'où l'un des problèmes de l'utilisation de var, et l'utilisation de let.

let prenom ="Bob";
let nom = "Doe";
let metier = "Prof";

// console.log("Bonjour " + prenom + nom + " votre métier est : " + metier + "!"); // c'est l'ancienne version
console.log(`Bonjour ${prenom} ${nom} votre métier est : ${metier} !`); // nouvelle version es_6



