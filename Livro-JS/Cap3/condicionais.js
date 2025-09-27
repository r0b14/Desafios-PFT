let year = 22
//Funções em forma tradicional
/**
    function printR (variA) {
        console.log(variA);
    }
 */
// Arrow function
const prinTar = (variA) => { return console.log(variA); }

let permission;
permission = (year >= 18 ) ? prinTar("Você é maior de 18 anos") : prinTar("Você é menor de 18 anos");



/**
        if (year >= 18) {
            console.log(`Você é maior de idade.`)
        } else {
        console.log(`Você é menor de idade.`)
        }
 */
