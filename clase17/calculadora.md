######calculadora

funcionalidad:

CALCULADORA
tener soporte para las sig operaciones: + , -
operacionesValidas = + / -
solicitar uma operacion:
la operacion es valida si es alguna de las operaciones Validas
vamos a solicitar un numero 1
validar que se un numero
vamos a solicitar un numero 2
validar que sea un numero

en caso de elegir una '+'
aca sumamos
mostrar por alerta 'el resultado de {numero(1)} {operacion} {numero2} es {resultado}

en caso de elegir una '-'
aca restamos
mostrar por alerta 'el resultado de {numero(1)} {operacion} {numero2} es {resultado}

HISTORIAL
El historial debera tener el siguiente formato

Dado el siguiente array
historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
    {
        accion: 'CALCULAR',
        operacion: '+',
         a: 1,
        b: 2,
        resultado: 2 
    },
]


Crear una funcion llamada: renderizarHistorial(historial)

La funcion debera crear un string a partir del array con el siguiente formato y retornarlo:

'
El historial es:

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}
'
Luego mostar el string resultante por alerta

Recuerda: puedes usar `` (template string para hacer saltos de linea) o '\n'
Ejemplo:
'El historial es:\n-hola' 
se vera como:
El historial es
-hola

o con template string:
`
El historial es
-hola
`
se vera como:
El historial es
-hola


LOGIN
crear usuario (esta se ejecuta al entrar a la calculadora)
-usuario
-contraseña
-email => debe estar validado

utilidades:
validacion
opcion cancelar()

ingreso de datos:
-prompt

egreso de datos:
-alert

LOGIN:
prompt va a solicitar al ususario un email
validamos que el email sea un email
regEx / expresion regular: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar) nos retorna un boolean
en caso de que no volvera a solicitar
en caso de que si sea valido dira email registrado
una vez solicitado el email vamos a solicitar una password
que no sea null o ' '

a tener en cuenta:
pueden usar todas las funciones o crear las funciones que creean necesarias

reglas:
todo el logeo debe estar dentro de una funcionalidad
login() debe debe retornar un objeto usuario: { email: , password: }


