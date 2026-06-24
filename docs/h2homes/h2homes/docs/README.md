# h2 homes inmobiliaria — Landing Page

Página web estática para la inmobiliaria h2 homes, en Málaga capital.
HTML5 + CSS3 + JavaScript mínimo. Sin frameworks, sin build, sin base de
datos. Disponible en español e inglés. Lista para subir directamente a
Cloudflare Pages.

## 1. Estructura de carpetas

```
h2homes/
├── index.html         ← Versión en español (NO mover de la raíz)
├── en/
│   └── index.html     ← Versión en inglés, mismo diseño, contenido traducido
├── css/
│   └── style.css      ← Todos los estilos (compartido por ambos idiomas)
├── js/
│   └── script.js      ← Menú hamburguesa + año dinámico del footer (compartido)
├── img/
│   ├── logo.png              ← Logo "h2 homes inmobiliaria" con texto
│   ├── fachada-oficina.jpg   ← Foto de la fachada (sección Hero)
│   ├── interior-oficina.jpg  ← Foto del interior (sección Nosotros)
│   └── favicon.png           ← Icono de pestaña del navegador (añadir)
└── docs/
    └── README.md      ← Este archivo
```

⚠️ **Importante:** `index.html` debe permanecer en la raíz del proyecto, y
`en/index.html` dentro de su carpeta `en/`. Cloudflare Pages (y cualquier
hosting estático) busca `index.html` en la raíz al abrir el dominio. Las
carpetas `css/`, `js/` e `img/` sí pueden estar donde quieras, siempre que
las rutas dentro de cada `index.html` coincidan (la versión en inglés usa
`../css/`, `../js/` y `../img/` porque está un nivel más adentro).

## 2. Versión en inglés

La web tiene una versión completa en inglés en `en/index.html`, para
clientes que no hablan español. Usa exactamente el mismo `css/style.css`,
`js/script.js` y las mismas imágenes — solo se ha traducido el texto, así
que **cualquier cambio de diseño en el CSS se aplica a los dos idiomas a
la vez**, sin tener que duplicar trabajo de estilos.

**Cómo funciona:**
- Un selector "EN" / "ES" en el menú de navegación cambia entre versiones.
- Las etiquetas `hreflang` en el `<head>` de cada página ayudan a Google a
  mostrar el idioma correcto según la ubicación o el idioma de quien busca.
- Cada idioma tiene su propia URL (`h2homes.es/` y `h2homes.es/en/`), lo
  que permite que ambas se indexen y posicionen de forma independiente —
  mejor para SEO que un selector que solo cambia el texto con JavaScript
  sin cambiar de URL, que Google no llega a ver ni indexar.

**Si cambias de dominio:** sustituye `https://h2homes.es/` por tu dominio
real en las etiquetas `hreflang` de los dos archivos `index.html` (el de
español y el de `en/`).

**Si en el futuro traducís a más idiomas** (por ejemplo, francés, ya que
también lo ofrecéis): crea una carpeta `fr/` con la misma estructura que
`en/`, añade su propia etiqueta `hreflang="fr"` en los tres archivos, y
suma un enlace más en el selector de idioma del header.

## 3. Datos ya incorporados

A partir de la documentación del cliente (carta de presentación y cartel de
horario en la fachada), ya se han rellenado estos datos reales en ambas
versiones (`index.html` y `en/index.html`):

| Dato | Valor usado |
|---|---|
| Nombre del negocio | h2 homes inmobiliaria |
| Dirección | Calle Brahms, 6, Local 2, Málaga |
| Teléfono / WhatsApp | 655 528 354 (enlace `tel:+34655528354`) |
| Horario | Lunes a Viernes, 9:30–13:30 y 17:00–20:00 |
| Idiomas de atención | Español, inglés y francés |
| Servicios | Venta, alquiler, asesoramiento/negociación, gestión de trámites, certificados de eficiencia energética (CEE), atención multiidioma |

## 4. Lo que todavía falta rellenar

Solo quedan pendientes estos datos, que no aparecían en la documentación
proporcionada. Búscalos en **ambos** archivos (`index.html` y
`en/index.html`) entre corchetes `[ASÍ]`:

| Variable | Dónde aparece | Ejemplo |
|---|---|---|
| `[EMAIL]` | Enlace `mailto:` en la sección de contacto | info@h2homes.es |
| `[URL FACEBOOK]` / `[URL INSTAGRAM]` / `[URL LINKEDIN]` | Footer | https://instagram.com/h2homes |

Si el código postal exacto es relevante para el SEO local, puedes añadirlo
junto a la dirección en la sección de contacto (actualmente solo indica
"Calle Brahms, 6, Local 2, Málaga").

## 5. Imágenes utilizadas

De las imágenes proporcionadas por el cliente, se seleccionaron tres por
ser las únicas con valor directo para la web:

- **`logo.png`** — el logo completo de la marca (icono + "h2 homes inmobiliaria"), usado en el header y el footer de ambos idiomas.
- **`fachada-oficina.jpg`** — foto de la fachada de la oficina en calle, usada en el Hero. Se recortó para centrar el rótulo y eliminar elementos distractores (carteles del vecino).
- **`interior-oficina.jpg`** — foto del espacio de trabajo interior, usada en la sección "Sobre nosotros" / "About us".

**No se incluyeron** el resto de imágenes del lote del cliente porque no
aportan valor a una landing page comercial: tarjetas de visita fotografiadas,
cuadros decorativos de la oficina, un cartel de "Disponible" para colgar en
propiedades en venta, un icono genérico de banderas, y un papel pintado de
fondo. El dato de que atienden en varios idiomas sí se incorporó como texto
en la sección de servicios, sin usar la imagen original.

Si quieres sustituir cualquiera de las tres fotos por otras de mejor calidad
en el futuro (por ejemplo, fotos profesionales con más luz), basta con
reemplazar el archivo manteniendo el mismo nombre: el cambio se reflejará
automáticamente en las dos versiones de idioma.

## 6. Mapa de Google Maps

En `index.html` (y también en `en/index.html`), dentro de la sección de
contacto, hay un bloque comentado:

```html
<!--
  <iframe
    src="https://www.google.com/maps/embed?pb=TU_URL_DE_GOOGLE_MAPS"
    ...
  </iframe>
-->
```

Para activarlo:
1. Busca "Calle Brahms 6, Málaga" en Google Maps.
2. Pulsa "Compartir" → "Insertar un mapa" → copia el código `<iframe>`.
3. Sustituye el bloque comentado por ese iframe (quita las marcas `<!--` y `-->`) en **ambos** archivos.
4. Elimina el `div.mapa-placeholder` que queda justo debajo (o déjalo, no afecta si el iframe ya está activo).

## 7. Cloudflare Web Analytics

En el `<head>` de `index.html` y de `en/index.html` hay un script comentado:

```html
<!--
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "TOKEN"}'></script>
-->
```

1. En el panel de Cloudflare, activa "Web Analytics" para tu dominio.
2. Copia el token que te genera.
3. Descomenta el script y sustituye `TOKEN` por el valor real en **ambos** archivos.

No hace falta banner de cookies: esta analítica no usa cookies ni almacenamiento local.

## 8. Despliegue en Cloudflare Pages

1. Sube esta carpeta completa a un repositorio de GitHub/GitLab, **o**
2. En el panel de Cloudflare Pages, elige "Subir directamente" (Direct Upload) y arrastra la carpeta completa (con `index.html` en la raíz y `en/index.html` dentro de su carpeta).
3. No se necesita comando de build ni directorio de salida especial: el directorio raíz del proyecto es el directorio de publicación.

## 9. Comprobaciones antes de publicar

- [ ] Email y enlaces de redes sociales rellenados en ambos idiomas.
- [ ] Teléfono comprobado (haz clic en el enlace para testear la llamada).
- [ ] Mapa de Google Maps insertado y visible en ambos idiomas.
- [ ] Token de Cloudflare Web Analytics añadido en ambos idiomas.
- [ ] Favicon añadido en `img/favicon.png`.
- [ ] El selector EN/ES funciona correctamente en ambas direcciones.
- [ ] Etiquetas `hreflang` actualizadas con el dominio real.
- [ ] Probado en móvil real (no solo en el navegador de escritorio).
