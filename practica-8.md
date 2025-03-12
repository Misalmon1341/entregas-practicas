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