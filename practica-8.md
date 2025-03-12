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
```bash
$ git checkout main
Switched to branch 'main'

$ git merge Pruebas-Practica-8
Updating 04bbc69..8ab66b3
```
### 8. Explica los diferentes tipos de fusión que existen.
La fusion automatica con el comando merge pero cuando por cuestiones de errores se tiene que hacer manual.

### 9. ¿Cómo puedes ver el historial de tu repositorio? 
Con el comando git log nos permite ver los commit, el autor y la fecha de cada uno.
```bash
$ git log
commit 8ab66b30e5ae5f5ca50d658c1294a6f1dd5665f3 (HEAD -> main, Pruebas-Practica-8)
Author: Misael <misagamer559.gmail.com>
Date:   Wed Mar 12 12:51:26 2025 -0600

    Cambios en la rama de prueba

commit 04bbc69f496392ca3fa313c93bedc920f4b4d754
Author: Misael <misagamer559.gmail.com>
Date:   Wed Mar 12 12:50:00 2025 -0600

    Cambios de prueba

commit f33b04b85175e37766c2ef52339797b307dfa87e (origin/main)
Author: Misael <misagamer559.gmail.com>
Date:   Wed Mar 12 12:25:12 2025 -0600

    Ejemplo de commit practica 8

commit 6d1578fcfb93e23d67a12ee71c98372f241d4208
Author: Misael Bautista <misagamer559@gmail.com>
```
### 10. ¿Cuál es el propósito de una etiqueta? 
Poder crear diferentes versiones de nuestro proyecto.
```bash
  $ git tag v2.1.1
  $ git push --tags
Enumerating objects: 8, done.
```