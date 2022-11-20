"use strict";

// méthode c'est un objet, c'est une autre manière de dire une fonction

let tableauFruit= ["Fraises", "Poires", "Pommes"];
console.log(tableauFruit);
// let tableauFruit= [index 0, index 1, index2];
// Un tableau commencera toujours à partir de 0
// si on fait une boucle, il faudra faire strictement petit ou égal <= au nombre d'éléments, car dans le cas contraire on sortira du tableau
console.log(tableauFruit.length);

// Pour afficher le 3e element du tableau
console.log(tableauFruit[2]);

// pour ajouter un élément au début du tableau
// shift pour supprimer 
tableauFruit.unshift("Mangues");
console.log(tableauFruit);

// pour ajouter un élément au tableau mais cette fois, il s'affichera à la fin du tableau
// push devient pop si on veut supprimer
tableauFruit.push("Bananes");
console.log(tableauFruit);

// Pour supprimer un élément du tableau
// tableauFruit.splice(4);
// console.log(tableauFruit);

// par une boucle, afficher tous les élements du tableau mais de manière aléatoire


for(let i=0; i<tableauFruit.length; i++){
    console.log(tableauFruit[i]);
}

// Pour afficher un élément au hasard du tableau
// let min = 0;
// let max=tableauFruit.length;
// let random = Math.floor(Math.random() * (max-min+1)) + min;
// console.log(random);

// console.log(tableauFruit[random]);


// simulation d'un jeu de dé
// let min = 1;
// let max=6;
// let random = Math.floor(Math.random() * (max-min+1)) + min;
// console.log(random);

//tableau multidimensionnel
let repertoire= [
    ['Marie','Dupont','0600000000','marie@test.fr'], ['Bernard', 'Dupond', '0700000000', 'bernard@test.fr'], ['Julie','Dupon','0100000000', 'julie@test.fr']
];

// pour afficher le numéro de bernard, c'est à dire le 3e element du 2e element
console.log(repertoire);
console.log(repertoire[1][2]);


// pour prendre tous les numéros du tableau
// for(let i=0; i<repertoire.length; i++){
//     console.log(repertoire[i][2]);
// }
