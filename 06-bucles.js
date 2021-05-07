const valores = [2, 5, 6, 7];

/*
for(let i=0; i < valores.length; i++) {
    console.info(valores[i]);
}
*/

/*
for(let val of valores) {
    console.info(val);
}
*/
/*
for(let i in valores) {
    console.info(i + " - " + valores[i]);
}
https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Looping_code
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration
*/

let i = 0;
while (i < 5) {
    console.info(i);
    i++; // i = i + 1
}