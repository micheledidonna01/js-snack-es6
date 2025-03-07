
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


