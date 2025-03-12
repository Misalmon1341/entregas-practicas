# Practica-8
## Isai Misael Bautista Olvera
### 1. ¿Cómo se inicializa un repositorio en Git? 
Con el comando *git init* inicializamos un repositorio local.

```bash
$ git init 
Reinitialized existing Git repository in D:/Practicas_Lenguajes_Interpretados/entregas-practicas/.git/
```
### 2. ¿Cómo creas un repositorio en GitHub?
En la pagina de github seleccionas la opción "New repository", colocas el nombre del reposritorio, selecionamos si es publico o privado y lo creamos.

### 3. ¿Cómo vinculas un repositorio local de Git con uno remoto en GitHub?
Primero tenemos que tener iniciar sesion con nuestro correo y unimos el repositorio remoto con el link de nuestro repositorio.
```bash
$ git remote add origin https://github.com/Misalmon1341/entregas-practicas.git
error: remote origin already exists.
```
### 4. ¿Cuál es el flujo básico de trabajo en Git y GitHub? 
Primero agregamos los cambios al stage, depues esos cambois los agragmos al repositorio local y por ultimo subimos los cambios al remoto.
```bash
$ git add .
$ git commit -m "Ejemplo de commit practica 8"
[main f33b04b] Ejemplo de commit practica 8
$ git push
Enumerating objects: 6, done.
```
### 5. ¿Para qué sirve el archivo .gitignore? 
Para esconder los archivos que no queremos mostrar en el repositorio remoto, simplemente colocamos el nombre del archivo en el archivo gitinore.
```gitignore
hola.txt
*.exe
pruebas
image-1.png
```
### 6. ¿Cuál es el propósito de una rama?
Es un espacio de trabajo diferente donde se pueden trabajar diferentes cosas sin interrumpir el trabajo principaly despues ir uniendo los cambios.
```bash
$ git branch
  Diseño-Videojuegos
  Ingles-B2
  Lenguajes-Interpretados
  Principios-Composicion-Diseño
  Proyecto-Semestral
  Sistemas-Operativos
* main
```
### 7. ¿Qué es una fusión? 
Es la forma en la que unimos el trabajo de una rama a otra. 
....
