si empezamos de cero:

git init 
git add . 
git commit -m "comentario" 
git branch -M main 
git remote add origin https://github.com/Pablopereyra1976/clases-utn-pwi-tn.git 
git push -u origin main 

si estoy actualizando:

git add . 
git commit -m "comentario" 
git push  

aclaraciones:

si me equivoco al poner el git remote usamos este comando
git remote set-url origin <url correcto>