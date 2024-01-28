
# tcit-challenge
Challenge TCIT

El presente desarrollo corresponde a un desafío de generación de de una aplicación como parte de la postulación a TCIT. Cabe destacar que el front end tiene versiones ya que se presentaron problemas con Redux (tcit-post) realizando un segundo intento sin dicho componente (tcit-app)

## ¿Cómo levantar el ambiente de desarrollo?

La aplicación consta de un backend desarrollado en node con express y PostgreSQL como base de datos y frontend realizado en React con Redux. Dado lo anterior, para levantar la aplaición se debe:

### Backend         
1. Instalar PostgreSQL para su sistema operativo (https://www.postgresql.org/download/). No olvidar nombre de usuario y contraseña
2. Instalar NodeJs para su sistema operativo (https://nodejs.org/en/download/current)
3. Descargar el código fuente desde git (se sugiere utilizar un git clone)
4. Entrar a la carpeta tcitApi
5. Modificar el archivo \src\database\database.js y cambiar el nombre de la base de datos, el nombre de usuario y contraseña
6. Descargar las dependecias mediante un npm install
7. Ejecutar utilizando npm run dev

### FrontEnd               
1. Instalar NodeJs para su sistema operativo (https://nodejs.org/en/download/current)
2. Descargar el código fuente desde git (se sugiere utilizar un git clone) 
3. Entrar a la carpeta tcit-post-app
4. Descargar las dependecias mediante un npm install
5. Ejecutar utilizando npm run start

