main o prod

dev

feature/bugfix

feature: la creamos cuando queremos agregar una caracteristica a una pagina
ej: desarrollo el form de login

bugfix: lo creamos cuando debemos arrglar algo (no agregar cosas nuevas)
ej: arreglo validacion de password


git checkout dev
git merge feature/form-login
probamos que todo este bien integrado en dev
despues eliminamos la rama feature/form-login tanto localmente como en github
