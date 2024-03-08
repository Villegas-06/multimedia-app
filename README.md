# Proyecto de Aplicativo Multimedia

Este proyecto es un aplicativo web que permite a los usuarios visualizar contenido multimedia, como videos, después de autenticarse. El aplicativo consta de los siguientes componentes principales:

Login: Componente que maneja la autenticación de usuarios, validando campos vacíos y el formato correcto del email.

Home: Componente que muestra 5 categorías de contenido multimedia disponibles para los usuarios autenticados. También incluye un Navbar básico para la navegación.

Content Category: Componente que presenta el contenido multimedia relacionado con la categoría seleccionada en 'Home'. El contenido se muestra en filas para una mejor experiencia de usuario.

Content Details: Componente para visualizar detalles y sinopsis de un contenido multimedia seleccionado desde 'Content Category'.

## Tecnologías Utilizadas

React JS
Context API para el manejo global de estados
TypeScript para la tipado seguro
Firebase

## Requisitos previos

Asegúrate de tener Node.js y npm (el administrador de paquetes de Node.js) instalados en tu computadora. Puedes descargarlos desde [nodejs.org](https://nodejs.org/). Se recomienda instalar la versión LTS.

Asegúrate de tener instalado Git, puedes descargarlo desde https://git-scm.com/. se recomienda instalar la opción: Standalone Installer

## Nota

Antes de continuar con los pasos de instalación espera a que Node.js y git sean instalados.

## Pasos de instalación

1.  **Clona el repositorio:**

    Abre tu terminal o línea de comandos y ejecuta el siguiente comando para clonar este repositorio:

    git clone https://github.com/Villegas-06/multimedia-app.git

2.  **Accede al directorio del proyecto:**

    Ve al directorio del proyecto que acabas de clonar y escribe el siguiente comando:

    cd multimedia-app

    2.1. **Accede a la carpeta del principal:**

        Luego de haber ejecutado el paso anterior dirigete a la carpeta princiapl y escribe el siguiente comando:

        cd multimedia-test

    2.2. **Instala las dependencias de node:**

        Ejecuta el siguiente comando para instalar las dependencias de node:

        npm install

    2.4 **Lanza la aplicacion:**

        En una terminal ubicado en la carpeta *multimedia-test* del proyecto ejecuta el siguiente comando:

        npm start

        Esto lanzará la aplicación de react
