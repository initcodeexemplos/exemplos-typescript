export default class Calculadora {

    public somar(num1: number, num2: number) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar somente números");
        }
        return num1+num2;
    }

    public sub(num1: number, num2: number) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar somente números");
        }
        return num1-num2;
    }

    public mult(num1: number, num2: number) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar somente números");
        }
        return num1*num2;
    }

    public div(num1: number, num2: number) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar somente números");
        }
        return num1/num2;
    }

}
