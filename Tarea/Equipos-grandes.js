/*
Dado los equipos de futbol Boca, River, Racing, Independiente, Velez crear una función que reciba por parámetros el nombre de un equipo y verifique si es uno de esos equipos dados.
**/
let equipos = ["Boca", "River", "Independiente", "Racing", "Velez"];
let eleccion = (prompt("ingresar equipo"));

function futbol(equipos) {
    for (let i in equipos) {
        if ("eleccion" == equipos[0]) {
            console.info("El equipo esta en la lista");
        } else if ("eleccion" == equipos[1]) {
            console.info("El equipo esta en la lista");
        } else if ("eleccion" == equipos[2]) {
            console.info("El equipo esta en la lista");
        } else if ("eleccion" == equipos[3]) {
            console.info("El equipo esta en la lista");
        } else if ("eleccion" == equipos[4]) {
            console.info("El equipo esta en la lista");
        } else if ("eleccion" == equipos[5]) {
            console.info("El equipo esta en la lista");
        } else if ("eleccion" == equipos[6]) {
            console.info("El equipo no esta en la lista");
        }
    }
}
/* 
Crear una función que me convierta de m a Km
**/
function convercion() {
    var metro, km;
    metro = parseFloat(prompt("ingresar la cantidad de metros a convertir"));
    km = (metro * 1 / 1000);
    console.info(metro + " los metros a km son:  " + km + " kilometros");
}


/* 
Dado el arreglo (2,5,7,8,9)
1. Crear una función que cuente la cantidad de elementos en el arreglo
https://www.youtube.com/watch?v=IyWwAxUNZ7c
2. Crear una función que sume todos los elementos de arreglo
3. Crear una función que me devuelva los elementos ordenados del arreglo
https://www.youtube.com/watch?v=k-zv7s_YKWM
*/
const arreglo = (2, 5, 7, 8, 9)

function cantidad(arreglo) {
    return arreglo.length;
}

function suma(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma = arreglo[i] + 1;
    }
}

function ordenados(arreglo) {
    return arreglo.sort();
}
console.info("el arreglo tiene : " + cantidad(arreglo));
console.info("la suma de los elementos del arreglo es: " + suma(arreglo));
console.info("el  ordenado es: " + ordenados(arreglo));