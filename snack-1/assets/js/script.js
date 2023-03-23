//Crea un array composto da 10 automobili.Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.Infine stampa separatamente i 3 array.

const automobili = [
    {
        marca: 'mercedes',
        modello: 'classe a',
        alimentazione: 'benzina'
    },
    {
        marca: 'bwm',
        modello: 'serie 1',
        alimentazione: 'diesel'
    },
    {
        marca: 'audi',
        modello: 'a3',
        alimentazione: 'elettrico'
    },
    {
        marca: 'toyota',
        modello: 'corolla',
        alimentazione: 'metano'
    },
    {
        marca: 'mercedes',
        modello: 'classe g',
        alimentazione: 'diesel'
    },
    {
        marca: 'bwm',
        modello: 'serie 3',
        alimentazione: 'diesel'
    },
    {
        marca: 'audi',
        modello: 'a6',
        alimentazione: 'gpl'
    },
    {
        marca: 'wolkswagen',
        modello: 'golf',
        alimentazione: 'diesel'
    },
    {
        marca: 'ferrari',
        modello: 'portofino',
        alimentazione: 'benzina'
    },
    {
        marca: 'mclaren',
        modello: 'senna',
        alimentazione: 'benzina'
    }
]

//creo l'array per i benzina
const autoBenzina = automobili.filter((auto) => {
    if (auto.alimentazione == 'benzina') {
        return true
    } return false
})

//creo l'array per i diesel
const autoDiesel = automobili.filter((auto) => {
    if (auto.alimentazione == 'diesel') {
        return true
    } return false
})

//creo l'array per le restanti alimentazioni
const autoAltreAlimentazioni = automobili.filter((auto) => {
    if (auto.alimentazione != 'benzina'&& auto.alimentazione != 'diesel') {
        return true
    }
})

console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoAltreAlimentazioni);