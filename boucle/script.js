"use strict";

//syntax
//for(compteur; condition; incrémentation){
// 
// }

//  on utilisera toujours i, i au départ était index (let index)
// pour une boucle suivante, on change de lettre, on passe à la suivante i, j, k, l, m
// for(let i=0; i<=10; i++){
//     console.log(`Salut numero ${i}`);
// }

// afficher la table de multiplication de 2
for(let i=0; i<=10; i++){
    let total= 2*i;
    console.log(`2 * ${i} = ${total}`)
}

// L'utilisateur choisit sa donnée à multiplier
// let x = prompt("Dites votre chiffre");
// for(let i=0; i<=10; i++){
//     let total= x*i;
//     console.log(`${x} * ${i} = ${total}`)
// } 

// Décompte inverse 
// Mieux vaux préconiser la boucle "for" en priorité, car moins de chances de faire une boucle infini/ de planter le navigateur
for(let i=10; i>=0; i--){
    if (i==0){
        i = "BOUM";
    } 
    console.log(`${i}`)
}

// autre méthode
// for(let i=10; i>=0; i--){
//     if (i!=0){
//         console.log(i)
//     } 
//     else{
//         console.log("Bonne année");
//     }
// }

let compteur =0;
while(compteur<10){
    console.log(compteur);
    compteur++; // Attention on n'oublie pas l'incrémentation dans les instructions !
}

//DO WHILE
let compteur2=0;
do{
    console.log("compteur 2 => " + compteur2);
    compteur2++;
}while(compteur2<10)
