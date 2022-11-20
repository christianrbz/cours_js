"use strict"; // on note toujours cette ligne en premier, permet de signaler quand il y'a une erreur (c'est une ligne de commande)

// déclaration sans initialisation (sans affectation de valeur initiale)
let pseudo; 

// Si on tentait d'utiliser une variable non initialisée, le robot va planter, car il ne peut traiter une absence totale de valeur 
console.log("Pseudo ==> " + pseudo); // CRASH ! le robot (dans la console) affichera juste "undefined " / Ce qui a entre guillement sera du texte brut 

// Si on avait pas de valeur concrète pour l'initialisation, initialisez avec 'null'
var pseudo2 = null; 
console.log("Pseudo 2 ==> " + pseudo2);  // Pseudo ==> null


let score = 100;  // il est préférable maintenant d'utiliser plus "let" au lieu de "var", car apparition de la mise à jour ES6
console.log(" score ==> " + score); 
score = 200;
console.log("score ==> " + score);
console.log(typeof score); // number

pseudo = "Christian";
console.log(pseudo);
console.log(typeof pseudo); // string

score = 1.5;
console.log(typeof score); // number

score ="1.5"; // ce n'est pas un nombre, c'est une chaîne de caractère
console.log(typeof score); // string

let score2 = 1;
console.log(score + score2);  // affiche : 1.51, en fait il colle la chaine de caractère du score + le nombre de score2 -> c'est ce qu'on appelle une concaténation (on peut aussi assembler 2 chaînes de valeurs ensemble)

let score3 = 35;
console.log(score2 + score3); // ça sera une addition, 1+35 = 36

let nom = "Reubrez";
let prenom = "Christian";
console.log("Bonjour " + prenom + " " + nom + " !");  // c'est une concaténation

let ouvert = true; // ou false
console.log(typeof ouvert); // boolean

score2 = score2 + 1;
console.log(score2); // 1+1=2
// On peut l'écrire aussi de plusieurs façons
// score2+= 1; (pour +1)
// score2+= 5; (pour +5) 

// score2++; (uniquement avec 1)
// ++score2; (uniquement avec 1)

let reste = 10 % 3; // % signifie modulo, c'est le reste d'une division, ici c'est le reste de 10 divisé par 3
console.log(reste); // 10/3=3 et il reste 1, il affichera donc 1

// précédence des opérateurs (comme en arithmétique)
let nb1 = 5 + 4 * 2;
let nb2 = (5 + 4) * 2;
console.log(nb1); // 13
console.log(nb2); // 18

let chaine1 = "37";
let chaine2 = "100.37";
console.log(parseInt(chaine1) + parseFloat(chaine2)); // deux fonctions systèmes importantes, elle transforme une chaine de caractère en un nombre, c'est à dire "37"= 37
// parseInt() pour les nombres entiers
// parseFloat() pour les nombres décimaux
// On peut utiliser aussi chaine1 = parseInt(chaine1); 

const formula = 111;
console.log(formula); // on ne peut pas modifier la constante, formula = 100; // interdit !

