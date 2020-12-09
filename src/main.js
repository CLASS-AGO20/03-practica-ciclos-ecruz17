export default class App {

    factorial(numero) {

        let factorial = 1;

        for(let i = 1; i <= numero;i++) {

            factorial = factorial * i;
        }
        return factorial;
    }

}

let app = new App();

console.log(app.factorial(5));