function ejercicio1(){
    alert("Hola! este es el resultado del primer ejercicio");//Se manda como alerta el mensaje que esta entre parentesis
}


function ejercicio2(){
    document.write("Hola Mundo");//Se escribe sobre el documento la palabra entre parentesis
}


function ejercicio3(){
    alert("El resultado de la suma de 3 + 5 es : "+ (3+5)); //Se imprime un mensaje seguido de la operacion 3+5
    
}


function ejercicio4(){
    let Nombre=prompt("Nombre de usuario :"); //Se declara una variable y tiene como valor el ingreso de un nombre
    alert("Hola " + Nombre); //Se imprime el mensaje Hola seguido de la variable anterior
}


function ejercicio5(){
    let numero1=+(prompt("Ingresa un Número (ENTERO)")); //Se declara la variable numero1 y se le asigna como valor el ingreso de un numero entero
    let numero2=+(prompt("Ingresa otro Número (ENTERO)")); //Se declara la variable numero2 y se le asigna como valor el ingreso de un numero entero
    alert("La suma de " + numero1 + " + " + numero2 + " es : "+ (numero1+numero2))//Se imprime un mensaje con los valores de ambas variables asi como la suma de los mismos
}


function ejercicio6(){
    let primerNumero=parseInt(prompt("Ingresa un número")); //Se declara la variable primerNumero y se da como valor el ingreso de un numero convertido a entero
    let segundoNumero=parseInt(prompt("Ingresa otro número que sea diferente al anterior"));//Se declara la variable segundoNumero y se da como valor el ingreso de un numero convertido a entero

    if (primerNumero < segundoNumero){//Se compara si el primer numero es menor al segundo
        alert("El " + segundoNumero + " Es el número más grande");//En caso de ser Verdadero se muestra en pantalla que el numero mas grande es el segundo
    }
    else{
        alert("El " + primerNumero + " Es el número más grande");//En caso de ser Falso se muestra en pantalla que el numero mas grande es el primero
    }

}


function ejercicio7(){
    
        let primerNumero=parseInt(prompt("Ingresa un Número"));//Se solicita un numero
        let segundoNumero=parseInt(prompt("Ingresa otro Número"));//Se solicita un segundo numero
        let tercerNumero=parseInt(prompt("Ingresa un Número"))//Se solicita un tercer numero
    
        if (primerNumero < segundoNumero){//Se compara si el primer numero es menor al segundo numero
            if(segundoNumero < tercerNumero){//En caso de que el primer numero sea menor al primero se compara si el segundo es menor al tercer numero
                alert("El " + tercerNumero + " Es el número más grande");//En caso de ser verdadero se imprime que el tercer numero es el mas grande
            }
            else{
                alert("El " + segundoNumero + " Es el número más grande");//En caso de ser Falso se imprime que el segundo numero es el mas grande
            }
        }
        else if (primerNumero < tercerNumero){//En caso que la primer condicion no se cumpla entonces se compara si el primer numero es menor al tercer numero 
            alert("El " + tercerNumero + " Es el número más grande");//En caso de ser verdadero se imprime que el tercer numero es el mas grande
        }
        else{
            alert("El " + primerNumero + " Es el número más grande");//En caso de ser Falso se imprime que el primer numero es el mas grande
        }
}


function ejercicio8(){
    let numero=prompt("Escribe un Número");
    let divicion= numero/2; //Se deckara la variable de nombre divicion y se asigna el valor del numero proporcionado entre 2
    let entero=parseInt(divicion);//se pasa el valor de la divicion a numeros enteros
    let decimal=(parseFloat(divicion)-entero);//se pasa el valor de la divicion a decimales pero restandole el valor entero de la variable anterior,de este modo quedaran puros decimales
    if(decimal!=0){//si el numero en decimales es diferente a 0 como resultado quiere decir que no es divisible entre 2
        alert("El "+ numero + " No es divisible entre 2 con numeros enteros "); //En caso de ser Verdadero se imprime el mensaje que no es divisible entre 2
    }
    else{
        alert("El "+ numero + " Es divisible entre 2 y da como resultado : " + divicion);//En caso de ser Falso se imprime el mensaje de que es divisible entre 2 y proporciona el resultado
    }   

}

function ejercicio9(){
    alert("Por el momento el ejercicio no esta disponible para su ejecución")
}

function ejercicio10(){
    alert("Por el momento el ejercicio no esta disponible para su ejecución")

}

function ejercicio11(){
    alert("Por el momento el ejercicio no esta disponible para su ejecución")
}