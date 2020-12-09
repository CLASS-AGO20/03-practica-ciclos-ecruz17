export default class App {

    factorial(numero) {

        let factorial = 1;

        for(let i = 1; i <= numero;i++) {

            factorial = factorial * i;
        }
        return factorial;
    }

    convertirAString(numero) {
        
        let asteriscos = "";
        let count = 1;

        while(count <= numero) {

            asteriscos = `${asteriscos}*`;
            count++;
        }

        return asteriscos;

    }

    obtenerDivisibles(numero) {

        let i = 1;
        let divisibles = 0;

        do {       
            if(numero%i === 0){
                divisibles++;
            }
            i++;
        } while (i<=numero);

        return divisibles;
    }

    elevar(numero, potencia) {

        let resultado = 1;

        for(let i = 1; i <= potencia; i++) {

            resultado = numero*resultado;

        }   

        return resultado;
    }


}

let app = new App();

console.log(app.factorial(5));

console.log(app.convertirAString(5));

console.log(app.obtenerDivisibles(6));

console.log(app.elevar(3,4))