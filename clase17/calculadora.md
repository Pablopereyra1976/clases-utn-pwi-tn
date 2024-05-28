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

en caso de elegir una '
-'
aca sumamos
mostrar por alerta 'el resultado de {numero(1)} {operacion} {numero2} es {resultado}


HISTORIAL
historial

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
login() debe debe retornar un objeto usuario: { email:  , password:  }

CALCULADORA