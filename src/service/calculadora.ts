export function somar(num1: number, num2: number) {
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error("Favor informar somente números");
    }
    return num1+num2;
}

export function sub(num1: number, num2: number) {
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error("Favor informar somente números");
    }
    return num1-num2;
}

export function mult(num1: number, num2: number) {
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error("Favor informar somente números");
    }
    return num1*num2;
}

export function div(num1: number, num2: number) {
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error("Favor informar somente números");
    }
    return num1/num2;
}