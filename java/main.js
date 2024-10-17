//Ciclos.
//Visualizacion del mensaje Hola mundo en la pagona web.
//repetimos la N cantidad de veces del mensaje hola mundo de esta forma.
document.write("Hola mundo");
document.write("Hola mundo");
document.write("Hola mundo");
//For es un ciclo el cual tiene 3 parametros.
//La funcion es repetir un bloque de codigo las veces necesarias.
/*Sintaxis basica
for (condicion){
    bloque de codigo
}*/
//Se repetira 11 veces el mensaje desde el 0 asta 10
//Mi ciclo empesara desde 0, 0 es menor igual a 10 y se repetira la N candiad de veces.
//el "br" especifica el salto de linea para mejor visualizacion de las repeticiones del mensaje.
//Encontrar los numeros pares del 3 al 15.
 for (i=3 ; i<=15; i++){
    //salto de linea mas el mensaje "Hola desde js" mas dos saltos de linea.
    //document.write("<br>"+"Hola desde js"+"<br>"+"<br>");
    //Nos muestra los numeros del 0 al 10.
    document.write(i+"<br>");
    if(i%2==0){
        document.write("numero par"+i+"<br>");
    }
}
//1x2x3x4x5x6x7=5040