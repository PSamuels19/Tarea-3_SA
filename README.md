# Tarea3SA

Arrancar:  npm run dev

Arrancará con el ESB el cual va a manejar todas las peticiones de los microservicios

El primer servicio que hay que arrancar es ESB:
  :::: npm run dev
  
  El recibirá las peticiónes del cliente y sabra a quien contestarle.
  
  
Arrancamos el restaurante, cliente y repartidor :

  :::: node .\restaurante.js
  
    ::::  node .\Cliente.js
    
      :::: node node .\Repartidor.js
      
      
 y tenemos nuestra pagina donde simulará hacer un pedido un cliente X.
 
 
 Mandará un post al puerto del ESB y este enviará un mensaje al restaurante para saber si puede atenderlo.
 
 
 Luego si el restaurante puede atenderlo enviara una repuestas el ESB para el repartido y un número de pedido al cliente,
 con esto esperamos que el repartidor acepte el envio y luego enviará la respuestas al ESB y concluye con un mensaje al cliente
 que su pedido.
 
 VIDEO: https://youtu.be/vIZweTPaX
 
 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 
 INTEGRACIÓN CI CON Jenkins
 
 Link del dominio de Jenkins
 
 Para ingresar el link de jenkins no vamos a Setting -> Webhooks y agregamos el link.
 Se configuró que para cada 15min revise el repositorio de git para saber si hubieron cambios o no.
 
 http://tareas.com:8080/github-webhook/ 
 El cual cada commit que se haga a la rama master o develop lo va a registrar en Jenkins para poder llevar un control de ella misma.

Gulp es una herramienta que nos facilita las tareas dentro de nuestro proyecto, automatiza y mejora tu flujo de trabajo.

Creamos una carpeta llamada Gulp con el cual creamos un archivo .js llamado Gulpfile el cual contiene:

  las librerías correspondientes y una forma de concatener todo los ficheros .js que existe en nuestra raiz del proyecto y ponerlo en un solo que le llamamos compilado.js. 
  el cual creamos un solo compilado para nuestro proyecto.

 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::TAREA 4
  GULP:::

  Nos dirigimos a la carpeta de Gulp.
    cd Gulp
  
  Luego vamos a correr las siguientes tareas:
      gulp HacerZip  

  Con esto ejecutamos la tarea "HacerZip"

  Luego ejecutamos nuestra tarea "release"
      gulp release

Esto nos hará un commit a nuestra rama master.

Luego ejecutamos nuestra tarea "tag":
      gulp tag

La que hará una nueva versión e insersión del tag en github

 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::TAREA 5

 Agregamos la funcionalidad de una clase Servidor.js la cual levanta una pagina que se podrá
 descargar al .zip que nos creó la herramienta Gulp con todo nuestro código.

 Se arrancará del siguiente modo:
  
      npm start 

  El cual nos aparecerá una pagina HTML con un link para descarga.
  Todo en modo local.
  Se tuvo que modifcar los archivos de package.json para poder realizar la compilación correcta.

    "start": "node prueba.js",
    "build": "netlify-lambda build express"

    Se modificaron los siguientes archivos para poder realizar la compilación por medio de "netlify-lambda", el cual crea una carpeta de nombre "functions" y adentro hace un compilado de nuestra clase "Servidor".

    ya con esto debemos de ingresar a netlify:
      Buil command : npm run build
      Publish directory: Descargas "es donde esta nuestra pagina principal"

      y le damos deploy y lo hizo correctamente, en el siguiente link.

      https://hardcore-mccarthy-efc0bf.netlify.com/