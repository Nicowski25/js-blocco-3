//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
const parole = ['cane','GaTTo', 'TOPO']
console.log(parole);

parole.forEach((parola) => {
    let parolaUppercase = parola.charAt(0).toUpperCase() + parola.slice(1).toLocaleLowerCase();
    console.log(parolaUppercase);
})