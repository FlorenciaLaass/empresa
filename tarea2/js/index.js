console.log ("Buenos dias. Soy el codigo JS del archivo externo del html")

console.log ('Buenos dias. Soy el codigo JS del archivo externo del html');

//Variables
//Palabras reserverdas
var nombre;

nombre = "Flor";

console.log ("Mi nombre es: " + nombre);

let apellido = "Laass";
console.log ("Mi apellido es: " + apellido)

const provincia = "Salta";
const DNI = 123456789;
const PI=3.14;

nombre = "Pepe";
apellido = "Sanchez";

// datos de entrada

let persona = prompt (
    "Ingresa tu nombre: "
)
alert("Bienvenido " + persona);

let numero = parseInt (prompt ("Ingresa un numero: "));
let numeroDos = parseInt (prompt ("Ingresa un numero: "));

let resultado = numero + numeroDos;
alert ('El resultado de a suma es: ${resultado}')

let a = 100;
let b = 150;
console.log(a + b);

let usuario = prompt ("Ingresa tu usuario: ");
let pass =  parseInt (prompt ("Ingresa tu password numérico: "));

if( usuario == "admin" && pass == 1234){
alert("Bienvenido Administrador")
} else {
    alert("usuario o password incorrectos")
}

