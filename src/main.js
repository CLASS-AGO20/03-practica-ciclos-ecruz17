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

}

let app = new App();

console.log(app.factorial(5));

console.log(app.convertirAString(5));