const palavra = 'ale';


let encontrado = false;


for (let letra of palavra) {
    if (letra === 'h') {
        console.log('tem a letra h');
        encontrado = true;
        break;
    }
}
if (!encontrado) {
    console.log('nao tem a letra h');
}









