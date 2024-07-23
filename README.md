# Blog js
Aquí tienes un ejemplo de cómo crear un blog básico utilizando HTML5, CSS3 y JSON como base de datos 
para las entradas. Este ejemplo incluye la estructura HTML, el estilo CSS y el uso de JSON para almacenar
y mostrar las entradas del blog.

## Estructura del Proyecto
1. index.html - Archivo principal HTML.
2. styles.css - Archivo CSS para el estilo.
3. entries.json - Archivo JSON con las entradas del blog.
4. script.js - Archivo JavaScript para manejar la carga de entradas desde el JSON.

  ## Explicación
1. index.html: Contiene la estructura básica del HTML, incluyendo un header,
    un main donde se insertarán las entradas del blog, y un footer.
2. styles.css: Define el estilo visual del blog, con un diseño limpio y sencillo
3. entries.json: Actúa como la base de datos de las entradas del blog,
    con cada entrada incluyendo un título, descripción, hashtags, imagen y autor.
4. script.js: JavaScript que carga las entradas del blog desde el archivo JSON y las inserta en el HTML dinámicamente.

   Con estos archivos, tendrás un blog básico donde se muestran las entradas almacenadas en el
    archivo JSON, al estilo de Blogger. Puedes personalizarlo y expandirlo según tus necesidades.

Para implementar las nuevas características, haremos las siguientes modificaciones:

1. Añadir un enlace a cada entrada en el archivo JSON.
2. Hacer que los hashtags agrupen todas las entradas.
3. Añadir una sección de búsqueda de entradas.
 
 index.html
Añadimos una barra de búsqueda y una sección para los hashtags.

styles.css
Añadimos estilos para la barra de búsqueda y los hashtags.

entries.json
Añadimos enlaces a cada entrada.

script.js
Actualizamos el script para manejar las nuevas funcionalidades: añadir enlaces, agrupar por hashtags y buscar entradas.

## Explicación

1. index.html: Se ha añadido una barra de búsqueda y una sección para hashtags
2. styles.css: Se han añadido estilos para la barra de búsqueda y los hashtags.
3. entries.json: Cada entrada ahora incluye un enlace.
4. script.js:
 * displayEntries: Muestra las entradas del blog, incluyendo los enlaces.
 * displayHashtags: Genera la lista de hashtags únicos y añade eventos de clic para filtrar entradas por hashtag.
 * filterByHashtag: Filtra y muestra las entradas basadas en el hashtag seleccionado
 * setupSearch: Configura la funcionalidad de búsqueda para filtrar entradas en tiempo real según el texto introducido.

   Con estos cambios, tendrás un blog más interactivo y organizado, permitiendo a los usuarios buscar entradas y navegar por hashtags.








