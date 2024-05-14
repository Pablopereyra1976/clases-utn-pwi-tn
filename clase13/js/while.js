/* solicitar un nombre al usuario si el nombre es pepe seguir solicitando el nombre cuando sea distinto de pepe, decir, ese nombre no lo conozco
DRY dont repeat yourself = no hacerlo de nuevo
*/

/*let nombre = prompt('ingrese su nombre')
while(nombre === 'pepe'){
    nombre = prompt('ingrese su nombre')

}
alert('ese nombre no lo conozco')*/

let apellido = prompt('ingrese su apellido')
while (!apellido) {
    alert('error: DATO NO VALIDO')
apellido = prompt('ingrese nuevamente su apellido')
}
alert('DATO CORRECTO')