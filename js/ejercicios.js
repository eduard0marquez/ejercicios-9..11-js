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
    let palabra=prompt("Ingresa una Palabra");//Se solicita el ingreso de una palabra
    let index=0;//Se crea la variable index y se asigna el valor 0
    let letraCompara=palabra.charAt(index); //Se extrae el caracter equivalente al indice 0 (La primer letra)
    let letras="";//Inicio la variable con valor 'vacio'
    while(letraCompara!=''){ //Se declara un ciclo el cual se estara repitiendo hasta que la letra a comparar sea igual a '' es decir el final de la palabra
        index=index+1;//Se crea el contador para que aumente 1 cada que entra en el ciclo
        if(letraCompara=='a'|| letraCompara=='e'|| letraCompara=='i'|| letraCompara=='o'|| letraCompara=='u' ){ //Se crea la condicion de cuando la letra equivalente al indice sea igual a 'a','e,'i','o,'u' 
            letras=letras + letraCompara;//En caso de ser verdadera la condicion la variable letra toma el valor de si misma mas la letra correspondiente al indice del momento
        }
        letraCompara=palabra.charAt(index);//La letra que a comprarar toma el nuevo valor del indice para que avance un caracter a la derecha      
    }
    alert("Las vocales de la palabra "+"' " +palabra+" '"+ " son : "+letras); //Se imprime en pantalla el valor de todas las letras que coinsidieron con la condicion anterior
}

function ejercicio10(){
    let numero=prompt("Escribe un Número");//Se solicita el ingreso de un numero
    let index=0;//Se crea la variable index y se asigna el valor 0
    let division= 0;//Se crea la variable divicion y se asigna el valor 0
    let entero=0;//Se crea la variable entero y se asigna el valor 0
    let decimal=(parseFloat(division)-entero);
    while (index!=7){//Se crea el ciclo que se repetira hasta que el index deje de ser diferente a 7
        if(index!=2){ //Se condiciona a que el indice sea diferente a 2 para que cuando esto pase se cuente de dos en dos
            index=index+2; //al valor del indice se suman 2 
            division= numero/index; //se divide el numero proporcionado entre el valor del indice
            entero=parseInt(division); //se pasa el valor de la divicion a numeros enteros
            decimal=(parseFloat(division)-entero); //se pasa el valor de la divicion a decimales pero restandole el valor entero de la variable anterior,de este modo quedaran puros decimales
            if(decimal==0){//si el numero en decimales da 0 como resultado quiere decir que si es divisible entre el numero del indice
                alert("El "+ numero + " Es divisible entre "+index+" y da como resultado : " + division); //se imprime la leyenda que el numero es divisible entre el indice
                break; //Se rompe para que sea el resultado Final
            }
        }
        else{  //en caso de que el valor del inice sea 2 se aumentara solo 1 
              index=index+1; //Al valor del indice se le suma 1
              division= numero/index; //se divide el numero proporcionado entre el valor del indice
              entero=parseInt(division);//se pasa el valor de la divicion a numeros enteros
              decimal=(parseFloat(division)-entero);//se pasa el valor de la divicion a decimales pero restandole el valor entero de la variable anterior,de este modo quedaran puros decimales
              if(decimal==0){//si el numero en decimales da 0 como resultado quiere decir que si es divisible entre el numero del indice
                alert("El "+ numero + " Es divisible entre "+index+" y da como resultado : " + division);//se imprime la leyenda que el numero es divisible entre el indice
                break;//Se rompe para que sea el resultado Final
            }       
    }
   
}

}

function ejercicio11(){
    let numero=prompt("Escribe un Número");//Se declara la variable numero que es igual al ingreso de un numero
    let index=0;//Se declara la variable index y se asigna el valor 0
    let division= 0;//Se declara la variable divis y se asigna el valor 0
    let entero=0;//Se declara la variable index y se asigna el valor 0
    let decimal=(parseFloat(division)-entero); //Se declara la variable decimal y se asigna el valor en decimales igual al valor ingresado menos el valor de la variable entera
    let divisibles=''; //Se declara la variable divisibles y se asigna como valor vacio


    while (index!=7){ //Se crea el ciclo que se repetira hasta que el index deje de ser diferente a 7
        if(index!=2){ //Se condiciona a que el indice sea diferente a 2 para que cuando esto pase se cuente de dos en dos
            index=index+2;//Al valor del index se suman 2 
            division= numero/index; //Se divide el numero proporcionado entre el valor del indice
            entero=parseInt(division);//Se pasa el valor de la divicion a numeros enteros
            decimal=(parseFloat(division)-entero); //se pasa el valor de la divicion a decimales pero restandole el valor entero de la variable anterior,de este modo quedaran puros decimales
            if(decimal==0){ //si el numero en decimales da 0 como resultado quiere decir que si es divisible entre el numero del indice
              divisibles=divisibles.concat(' entre '+index);//A la variable divisibles se le asigna el valor de la misma variable contatenando la palabra entre y luego el valor del indice
            }
        }
        else{  
              index=index+1;//Al valor del index se suma 1
              division= numero/index; //Se divide el numero proporcionado entre el valor del indice
              entero=parseInt(division);//Se pasa el valor de la divicion a numeros enteros
              decimal=(parseFloat(division)-entero); //se pasa el valor de la divicion a decimales pero restandole el valor entero de la variable anterior,de este modo quedaran puros decimales
              if(decimal==0){ //si el numero en decimales da 0 como resultado quiere decir que si es divisible entre el numero del indice
                divisibles=divisibles.concat(' entre ').concat(index);  //A la variable divisibles se le asigna el valor de la misma variable contatenando la palabra entre y luego el valor del indice  
            }              
        } 
    } 
    alert("El "+ numero + " Es divisible "+divisibles); //Se imprime el mensaje de que el numero ingresado es divisible por el valor ya acumulado en la variable divisibles

}