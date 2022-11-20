"use strict";

// if(expression){//instruction..}
// console.log()= affichage en console 
// alert()= sorte de pop up qui nous met un message
// prompt()= permet de poser une question à l'utilisateur
// confirm()= laisse le choix ok / annuler

// On peut mettre "texte" et 'texte' les doubles versions des guillements sont valables 

let age= 18;
// let age= prompt('Votre age ?'); 
if(age>=18){
    // alert('MAJEUR');
    console.log('MAJEUR');
}
else {
    // alert('MINEUR');
    console.log('MINEUR');
}


// --- Exemple de communication avec l'utilisateur qui donne son age ---
// let age= prompt('Votre age ?'); 
// if(age>=18){
//     alert('MAJEUR');
// }
// else {
//     alert('MINEUR');
// }


let couleur='#ff0000';
// SI
if(couleur =='#00FF00'){   // ici on met == pour pas confondre avec = (car un seul égal = signifie que l'on va changer la valeur)
    console.log('vert');
}
// SINON SI
else if(couleur == '#ff0000'){
    console.log('rouge');
// SINON
}else{
    console.log('couleur non trouvée');
}

// !=  signifie différent de... 

let value1 = 10;
let value2= 100;
let value3= 100;
let value4="100";
let str1="Salut";
let str2="Salut";
console.log(value1>value2); // false 
console.log(value1<value2); // true 
console.log(value1==value2); // false 
console.log(value1!=value2); // true 
console.log(str1==str2); // true
console.log(value2===value3); // true car 100 === 100 ce sont tous les 2 "100" et aussi des types nombres.
console.log(value3==value4); // true

// === signifie strictement égal, c'est à dire qu'il va comparer la valeurs ET aussi le type, exemple 18(nbr) et 18(chaine de caractère) ne sont pas strictement égaux
console.log(value3===value4); // false


// Opérateurs logiques
let majeur=true;
let tenueCorrect=true;
// AND ET && les deux doivent être vrais
console.log("Majeur ET tenue correct : "+ (majeur && tenueCorrect)); // true
// OR || (l'un ou l'autre doivent être vrais, les deux peuvent être vrais)
console.log("Majeur OU tenue correct : "+ (majeur || tenueCorrect)); // true

// Opérateur ternaire, autre manière d'écrire une condition
// let variable=condition?true:false;
let message=(age>=18)?"Majeur":"Mineur";
console.log(message); // Majeur car l'âge est de 18

// --- Exemple si la personne est mineure ---
// age = 7;
// let message2=(age>=18)?"Majeur":"Mineur";
// console.log(message2); // Mineur car j'ai mis 7 comme valeur d'age 

// Switch
// Switch prend un argument représentant une valeur 
// selon la proposition de valeurs, on réagira par rapport à cela 
// switch fonctionne avec des "cases" qui sont vraies si la valeur est égal à l'argument passé dan le switch

let panier=prompt('Quel fruits et légumes avez-vous pris ? (orange, carotte, poire)');
switch (panier){
    case "orange":
        console.log("Vous avez pris un fruit");
        break;
    case "carotte":
        console.log("Vous avez pris un légume");
        break;
    case "poire":
        console.log("Vous avez pris un fruit");
        break;
    default:
        console.log("Vous vous êtes trompé !");
}

