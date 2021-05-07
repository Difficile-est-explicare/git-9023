/**https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions
 */
function sumar(a, b) {
    return a + b;
}

console.info("La suma de 3 + 2 es " + sumar(2, 3));

console.info("La suma de 3 + 2 es " + sumar("hola", 3));

const restar = (a, b) => {
    return a - b;
};
console.info(`La resta de 4 -1 es ${restar(4,2)}`);

const multiplicar = (a, b) => a * b;
console.info(multiplicar(2, 4));