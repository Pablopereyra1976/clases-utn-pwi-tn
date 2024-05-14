/*console.log("hola mundo");
console.log(! "hola"); /* false */
/*console.log(true && 'pepe'); /* pepe xq pasa a la segunda expresion */
/*console.log(number('pepe' + 1));  NaN */
/*  alert("hola mundo");*/
/* operadores logicos
!: not (negacion) nos da el valor booleano opuesto al que estoy usando
||: or (o) nos da el valor booleano si al menos uno de los dos operandos es true
&&: and (y) nos da el valor booleano si ambos operandos son true, si el primer valor nos da true pasa al segundo

4 && false || 'pepe'    'pepe'
8 == '8' || 1 === '1'   true/booleno
(null) === NaN || boolen(NaN)  false/
    false      ||     false
number('1') === number(1) && number('pepe' + 1)   NaN
           true       &&     NaN     
*/


/* falsy: false 0 '' null undefined NaN -0 */


/*  javascript es de lenguaje debilmente tipado y dinamico*/
/* variables: espacio reservado que almacena un dato(referencia), este debe tener un identificador el cual usaremos para obtener el dato.
hoisting: se puede llamar antes de ser declarado, alcance global o local.
implicito: undefined.
var
tiene hoisting
se puede reasignar
se puede redeclarar
valor implicito undefined

let
no tiene hoisting
se puede reasignar
no se puede redeclarar
valor implicito undefined

const
no se puede reasignar
no tiene hoisting
 */
/*const nombre1=('pablo');
/*nombre1=('julieta'); no se puede reasignar*/
/*console.log(nombre1);
/* bloques de codigo, es lo que va entre llaves	{} */
/*let valor='pepe'; /*alcance global*/
/*{  /*alcance local*/
    /*let valor='julieta';
    console.log(valor);
}
console.log(valor);


var edad=18;
console.log(edad);

let nombre='pepe';
nombre= 'julieta'   
console.log(nombre);

/*      var              nombre      =  'pepe';
tipo de variable     identificador       valor  */

/* condicionales
*/
let nombre='pepe'
console.log(nombre)
{
     let nombre = 'pedro'
    console.log(nombre)
    {
        let nombre = 'maria'
        console.log(nombre)
    }
    {
        let nombre = 'leonel'
        console.log(nombre)
        {
            nombre = 'julieta'
            console.log(nombre)
        }
        console.log(nombre)
    }
    console.log(nombre)
    nombre = 'juan'
}
console.log(nombre)
