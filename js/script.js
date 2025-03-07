/***********
 SNACK 1
***********/
let bici = [
    {
        nome: 'bici 1',
        peso: 29
    },
    {
        nome: 'bici 2',
        peso: 19
    },
    {
        nome: 'bici 3',
        peso: 21
    },
    {
        nome: 'bici 4',
        peso: 25
    }
];

bikeMoreLight(bici);


function bikeMoreLight() {
    let resultSnack1 = document.getElementById('snack1');
    let result = bici[0].peso;
    for (let i = 0; i < bici.length; i++) {
        if (bici[i].peso < result) {
            result = bici[i].peso;
        }
        
    }
    resultSnack1.textContent = `La bicicletta più leggera ha ${result}kg`;
    console.log(result);
    // if ((bici[0].peso < bici[1].peso) && (bici[0].peso < bici[2].peso) && (bici[0].peso < bici[3].peso)) {
    //     console.log(`La bibicletta che costa di meno è ${bici[0].nome} con ${bici[0].peso}kg`);
    // }else if((bici[1].peso < bici[0].peso) && (bici[1].peso < bici[2].peso) && (bici[1].peso < bici[3].peso)){
    //     console.log(`La bibicletta che costa di meno è ${bici[1].nome} con ${bici[1].peso}kg`);
    // }else if((bici[2].peso < bici[0].peso) && (bici[2].peso < bici[1].peso) && (bici[2].peso < bici[3].peso)){
    //     console.log(`La bibicletta che costa di meno è ${bici[2].nome} con ${bici[2].peso}kg`);
    // }else{
    //     console.log(`La bibicletta che costa di meno è ${bici[3].nome} con ${bici[3].peso}kg`);
    // }
}


/***********
 SNACK 2
***********/

let squadre = [
    {
        nome: 'inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'napoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
];
console.log(squadre.length);

squadreFilter();
function squadreFilter() {
    for (let i = 0; i < squadre.length; i++) {
        numRandomPunti = Math.floor(Math.random() * 50);
        squadre[i].puntiFatti = numRandomPunti;

        numRandomFalli = Math.floor(Math.random() * 20);
        squadre[i].falliSubiti = numRandomFalli;
    }

    let array = [];
    // let obj1 = {};
    // let obj2 = {};
    // array.push(obj1);
    // array.push(obj2);
    let resultSnack2 = document.getElementById('snack2');
    for (let i = 0; i < squadre.length; i++) {
        let obj = {};
        array.push(obj);
        array[i].nome = squadre[i].nome;
        array[i].falliSubiti = squadre[i].falliSubiti;
        resultSnack2.innerHTML += `${JSON.stringify(array[i])} <br>`;

    }
    console.log(array);
    console.log(`il nuovo array è: ${JSON.stringify(array)}`);
}

// console.log(squadre);
// console.log(filterSquadre);console.log(array);