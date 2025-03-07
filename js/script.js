
let bici = [
    {
        nome: 'bici 1',
        peso: 23
    },
    {
        nome: 'bici 2',
        peso: 22
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


function bikeMoreLight(biciclette) {
    if ((bici[0].peso < bici[1].peso) && (bici[0].peso < bici[2].peso) && (bici[0].peso < bici[3].peso)) {
        console.log(`La bibicletta che costa di meno è ${bici[0].nome} con ${bici[0].peso}kg`);
    }else if((bici[1].peso < bici[0].peso) && (bici[1].peso < bici[2].peso) && (bici[1].peso < bici[3].peso)){
        console.log(`La bibicletta che costa di meno è ${bici[1].nome} con ${bici[1].peso}kg`);
    }else if((bici[2].peso < bici[0].peso) && (bici[2].peso < bici[1].peso) && (bici[2].peso < bici[3].peso)){
        console.log(`La bibicletta che costa di meno è ${bici[2].nome} con ${bici[2].peso}kg`);
    }else{
        console.log(`La bibicletta che costa di meno è ${bici[3].nome} con ${bici[3].peso}kg`);
    }
}


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
let filterSquadre = [];

for(let i = 0; i<squadre.length; i++){
    numRandomPunti = Math.floor(Math.random()* 50);
    squadre[i].puntiFatti = numRandomPunti;

    numRandomFalli = Math.floor(Math.random()* 20);
    squadre[i].falliSubiti = numRandomFalli;

    filterSquadre.push(squadre[i].nome);
    filterSquadre.push(squadre[i].falliSubiti);
}



console.log(squadre);
console.log(filterSquadre);