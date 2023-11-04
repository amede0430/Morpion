var element00 = document.getElementById("element00");
var element01 = document.getElementById("element01");
var element02 = document.getElementById("element02");
var element10 = document.getElementById("element10");
var element11 = document.getElementById("element11");
var element12 = document.getElementById("element12");
var element20 = document.getElementById("element20");
var element21 = document.getElementById("element21");
var element22 = document.getElementById("element22");

const t = new Array(element00, element01, element02, element10, element11, element12, element20, element21, element22);
const myTab = ['element00', 'element01', 'element02', 'element10', 'element11', 'element12', 'element20', 'element21', 'element22'];
const maDiv = document.querySelector('.morpion');

var table = new Array('', '', '');
for (let index = 0; index < table.length; index++) {
    table[index] = new Array('', '', '');
}

function remplir_table(chaine, val) {

    switch (chaine) {
        case 'element00':
            table[0][0] = val;
            break;
        case 'element01':
            table[0][1] = val;
            break;
        case 'element02':
            table[0][2] = val;
            break;
        case 'element10':
            table[1][0] = val;
            break;
        case 'element11':
            table[1][1] = val;
            break;
        case 'element12':
            table[1][2] = val;
            break;
        case 'element20':
            table[2][0] = val;
            break;
        case 'element21':
            table[2][1] = val;
            break;
        case 'element22':
            table[2][2] = val;
            break;
        default:
            break;
    }
}

function est_gagne() {
    //verification sur chaque ligne
    for (let i = 0; i < 3; i++) {
        let comp = 0;
        let valeur = table[i][0];
        for (let j = 0; j < 3; j++) {
            if (table[i][j] == valeur && valeur != "") {
                comp++;
            }
        }
        if (comp == 3) {
            return 'l' + i;
        }

    }

    //verification sur chaque colonne
    for (let i = 0; i < 3; i++) {
        let comp = 0;
        let valeur = table[0][i];
        for (let j = 0; j < 3; j++) {
            if (table[j][i] == valeur && valeur != "") {
                comp++;
            }
        }
        if (comp == 3) {
            return 'c' + i;
        }

    }
    //verification sur la premiere diagonale
    let comp = 0;
    for (let i = 0; i < 3; i++) {
        let valeur = table[0][0];
        if (table[i][i] == valeur && valeur != "") {
            comp++;
        }
        if (comp == 3) {
            return 'd1';
        }
    }
    //verification sur la deuxieme diagonale 
    comp = 0;
    for (let i = 0; i < 3; i++) {
        let valeur = table[0][2];
        if (table[i][2 - i] == valeur && valeur != "") {
            comp++;
        }
        if (comp == 3) {
            return 'd2';
        }
    }

    return '0';
}

function colorie_part() {

    switch (est_gagne()) {
        case 'l0':
            element00.style.backgroundColor = 'green';
            element01.style.backgroundColor = 'green';
            element02.style.backgroundColor = 'green';
            break;
        case 'l1':
            element10.style.backgroundColor = 'green';
            element11.style.backgroundColor = 'green';
            element12.style.backgroundColor = 'green';
            break;
        case 'l2':
            element20.style.backgroundColor = 'green';
            element21.style.backgroundColor = 'green';
            element22.style.backgroundColor = 'green';
            break;
        case 'c0':
            element00.style.backgroundColor = 'green';
            element10.style.backgroundColor = 'green';
            element20.style.backgroundColor = 'green';
            break;
        case 'c1':
            element01.style.backgroundColor = 'green';
            element11.style.backgroundColor = 'green';
            element21.style.backgroundColor = 'green';
            break;
        case 'c2':
            element02.style.backgroundColor = 'green';
            element12.style.backgroundColor = 'green';
            element22.style.backgroundColor = 'green';
            break;
        case 'd1':
            element00.style.backgroundColor = 'green';
            element11.style.backgroundColor = 'green';
            element22.style.backgroundColor = 'green';
            break;
        case 'd2':
            element02.style.backgroundColor = 'green';
            element11.style.backgroundColor = 'green';
            element20.style.backgroundColor = 'green';
            break;

        default:
            break;
    }

}


function JoueurX() {
    (document.querySelector('.joueur1')).style.backgroundColor = `green`;
    maDiv.addEventListener('click', function spanClick(e) {
        var idCliquer = e.target.getAttribute('id');
        // console.log(idCliquer);
        for (let index = 0; index < myTab.length; index++) {
            if (myTab[index] === idCliquer) {

                t[index].textContent = 'X';

                remplir_table(idCliquer, 'X');



                if (est_gagne() == '0') {
                    (document.querySelector('.joueur1')).style.backgroundColor = '#4285f4';
                    return JoueurO();
                } else {
                    console.log(est_gagne()); colorie_part();
                }

            }
        }
    });
}

function JoueurO() {
    (document.querySelector('.joueur2')).style.backgroundColor = `green`;
    maDiv.addEventListener('click', function spanClick(e) {
        var idCliquer = e.target.getAttribute('id');
        // console.log(idCliquer);
        for (let index = 0; index < myTab.length; index++) {

            if (myTab[index] === idCliquer) {

                t[index].textContent = 'O';

                remplir_table(idCliquer, 'O');



                if (est_gagne() == '0') {
                    (document.querySelector('.joueur2')).style.backgroundColor = `#4285f4`;
                    return JoueurX();
                } else {
                    console.log(est_gagne());
                    colorie_part();
                }

            }
        }
    });
}


JoueurX();