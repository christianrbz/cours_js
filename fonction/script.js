"use strict";

function saluer (){
    console.log("Bonjour !");
}

// pour utiliser la fonction on l'appelle par son nom
saluer();
console.log(typeof saluer); // function


// --- Exemple d'utilisation avec une condition ---
// function questiontest() {
// let age= prompt('Votre age ?'); 
// if(age>=18){
//     alert('MAJEUR');
// }
// else {
//     alert('MINEUR');
// }
// }

// questiontest();


// --- Exemple d'utilisation avec SWITCH ---
// function questiontest2() {
// let numero=prompt('1, 2 ou 3 ?');
// switch (numero){
//     case "1":
//         console.log("ONE");
//         break;
//     case "2":
//         console.log("TWO");
//         break;
//     case "3":
//         console.log("THREE");
//         break;
//     default:
//         console.log("Vous vous êtes trompé !");
// }
// }

// questiontest2();



// function avec paramètre
function saluerqqun(nom) {
    console.log(`Salut ${nom}`);
}

let nom="Moranne";
saluerqqun(nom);

let espace="Bob";

saluerqqun(espace);

saluerqqun("Bobby");

function saluerqqnbis(n,p){
    console.log(`Salut ${n} ${p}`);
}

let prenom="RV";
let voiture="Toto";

saluerqqnbis(prenom,voiture);


// Ancienne version, méthode
let fonctionAnonyme = function(){
    console.log("Je suis une fonction anonyme");
}

// J'apelle la fonction par le nom de la variable 
fonctionAnonyme();

// Nouvelle méthode pour fonctio anonyme, es6, on se sert souvent cette méthode sur react.js
//  ()=> correspond au raccourci de "function(){" 
let fonctionFleche=()=>{
    console.log("Je suis une nouvelle fonction");
}

fonctionFleche();

