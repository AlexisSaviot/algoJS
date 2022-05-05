// Exerice 1
var btndés = document.getElementById('dés');
btndés.addEventListener("click", manche);

function manche() {
    var joueur1 = Math.floor((Math.random() * (6 - 1) + 1) * 4);
    var joueur2 = Math.floor((Math.random() * (6 - 1) + 1) * 4);

    if (joueur1 > joueur2) {
        alert("Le joueur 1 a gagné " + joueur1 + " à " + joueur2)
    } else if (joueur1 < joueur2) {
        alert("Le joueur 2 a gagné " + joueur2 + " à " + joueur1)
    } else {
        alert("Egalité !")
    }
}

// Exercice 2

var btnentier = document.getElementById('btnentier');
btnentier.addEventListener('click', somme);

function somme() {
    var entier = document.getElementById('entier');
    var valeur = entier.value;
    var total = 0;
    for (var i = 1; i < valeur; i++) {
        total += i;
    }
    alert("La somme des entiers précédants " + valeur + " est " + total);
}

// Exercice 3

var btnmot = document.getElementById('btnmot');
btnmot.addEventListener('click', nombre);

function nombre() {
    var mot = document.getElementById('mot');
    var valeur = mot.value;
    var motsplit = valeur.split('');
    alert("Il y a " + motsplit.length + " lettres dans ce mot.")
}

// Exercice 4

var btnsort = document.getElementById('sort');
btnsort.addEventListener("click", sort);

function sort() {
    var d1 = Math.floor((Math.random() * (6 - 1) + 1));
    var d2 = Math.floor((Math.random() * (6 - 1) + 1));

    if (d1 >= 4) {
        if (d2 >= 5) {
            alert("Vous avez fait " + d1 + " puis " + d2 + " : Succès critique")
        } else if (d2 < 5) {
            alert("Vous avez fait " + d1 + " puis " + d2 + " : Succès")
        }
    } else {
        alert("Vous avez fait " + d1 + " : Sort échoué")
    }
}

// Exercice 5

function triTableau(eleve) {
    var longueur = eleve.length;
    for (var i = 0; i < longueur; i++) {
        for (var j = 0; j < (longueur - i - 1); j++) {
            var noteEleve = eleve[j][1];
            var noteEleveSuivant = eleve[j+1][1];
            if (noteEleve < noteEleveSuivant) {
                var tmp = eleve[j];
                eleve[j] = eleve[j+1];
                eleve[j+1] = tmp;
            }
        }
    }
}
var eleve = [["Théo", 5], ["Yasmine", 10], ["Manon", 4], ["Léo", 7], ["Pierre", 2]];
console.log("J'affiche le tableau")
console.table(eleve);
console.log("Puis le résultat du tri par ordre décroissant");
triTableau(eleve);
console.table(eleve);
