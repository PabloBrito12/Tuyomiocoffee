# Imágenes de Tuyomio

El sitio usa el logo `Logo.jpg`, la fotografía de marca `Imagen 01.jpg` como imagen principal, `iamgen 02.jpg` y las fotos de montajes para eventos `imagen 04.jpg` y `imagen 05.jpg` en la galería. También incluye una foto de preparación de café recuperada de la copia local del perfil de Instagram en `iamgen 03_files/`. El respaldo HTML y sus scripts no forman parte de los archivos del sitio.

Las rutas y el texto alternativo están en `src/content.ts`. Para sustituir las imágenes por originales de mayor resolución, agrega los archivos aprobados a esta carpeta y actualiza `brand.logoImage`, `brand.heroImage` o los `src` de `galleryImages`. Si una ruta queda vacía, el sitio muestra el espacio marcado como pendiente. La foto principal carga de inmediato y las de la galería se cargan de forma diferida.
