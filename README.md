# Sistema de Gestión de Personal
-------------------------------------------------------------------------------------------------------------------

	Instalar
  
1. Instalar 'npm'.

-Requiere NodeJS, suelen venir juntos

2. Instalar MongoDB.

-https://docs.mongodb.com/manual/installation/

3. Instalar los módulos necesarios descritos en las dependencias dentro de 'package.json'.

-'npm install'


	Iniciar (Deben estar dentro del directorio raiz)
  
-'nodemon server' levanta el servidor web escuchando en el puerto 2100.

-'ng serve' levanta el servidor de aplicaciones en el puerto 4200.

--En Windows pueden ejecutar 'npm start' para iniciar los servidores, ya que modifiqué el script para que cree 
 una nueva terminal y así levanta ambos en paralelo, pero el script lo hice para mi sistema operativo (windows 7),
 en Unix no funcionará. Modifiquen el script de acuerdo a su sistema operativo o ejecuten los comandos anteriores 
 en terminales distintas.
 
---El script se encuentra en 'package.json'. Sección 'scripts', script 'start'.


	Dockerizar la aplicacion (solo se requiere el archivo docker-compose.yml, ubicado en el directorio raiz del git)
  
--Estar en el mismo directorio del docker-compose.yml

-'docker-compose up -d' descarga imagenes, monta los container y los inicia.

-'docker-compose stop' detiene los container.

-'docker-compose start' reanuda container en stop.

-'docker-compose down' detiene y elimina los container.

-- docker-compose.yml monta 3 container crh_frond, crh_back, crh_db donde las imagenes las obtene de dockerHUB
	crh_frond: jorgeortiz/crh_frond 
	crh_back: jorgeortiz/crh_back
	crh_db: mongo:latest



	Notas adicionales
  
-'package.json' tiene información sobre el proyecto, configuración, dependencias(node_modules), entre otros.

-'server.js' inicializa el servidor web escuchando en el puerto 2100.

-"server" tiene la lógica del back-end, ahí se encuentran los routers, modelos y controladores.

--Aquí está NodeJS, Express y Mongoose

-"src" tiene la lógica del front-end, ahí se encuentran las vistas(html's), sus estilos(css's), 
 su lógica(ts), entre otros.
 
--Aquí está Angular 4
