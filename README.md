# Connected Beings Coaching Services

Aplicacion web para servicios de coaching familiar, individual, de parejas y grupal ubicados en Masdar City, Abu Dhabi.

## Descripcion

Connected Beings Coaching Services es una plataforma digital que conecta a familias e individuos con servicios profesionales de coaching. La aplicacion ofrece informacion sobre servicios, paquetes, preguntas frecuentes y multiples formas de contacto.

**Coach:** Camila Barreto - Family Coach
**Licencia:** Lifestyle Development Consultancy #MC 13480 (UAE)
**Ubicacion:** Masdar City, Abu Dhabi

## Tecnologias

| Tecnologia | Version | Descripcion |
|------------|---------|-------------|
| Next.js | 15.x | Framework de React |
| TypeScript | 5.x | Lenguaje tipado |
| Tailwind CSS | 4.x | Framework de estilos |
| React | 19.x | Biblioteca UI |
| Lucide React | - | Iconos |

## Instalacion

```bash
# Clonar repositorio
git clone [url-del-repositorio]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para produccion
npm run build

# Ejecutar en produccion
npm start
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx          # Pagina principal
│   ├── about-us/         # Sobre nosotros
│   ├── services/         # Servicios/Offerings
│   ├── packages/         # Paquetes y precios
│   ├── faq/              # Preguntas frecuentes
│   ├── contact/          # Contacto
│   ├── products/         # Productos (en construccion)
│   └── layout.tsx        # Layout principal
├── components/
│   ├── nav.tsx           # Barra de navegacion
│   ├── footer.tsx        # Pie de pagina
│   └── FlyingLeaves.tsx  # Efecto visual animado
├── context/
│   └── LanguageContext.tsx  # Contexto de idiomas
└── public/
    ├── logo3.png         # Logo
    ├── imagen1.png       # Imagen principal
    ├── map.png           # Mapa de ubicacion
    └── documentacion-connected-beings.doc  # Documentacion
```

## Caracteristicas Principales

### Sistema Multilenguaje
- **Idiomas:** Ingles (EN) y Espanol (ES)
- Selector de idioma en la navegacion
- Persistencia en localStorage
- Traducciones completas en todas las paginas

### Diseno Responsivo
- Adaptacion automatica para movil, tablet y desktop
- Menu hamburguesa en dispositivos moviles
- Imagenes y elementos que escalan correctamente
- Reorganizacion de contenido segun pantalla

### Paginas

| Pagina | Ruta | Descripcion |
|--------|------|-------------|
| Home | `/` | Bienvenida, descripcion de servicios, botones de accion |
| About Us | `/about-us` | Informacion sobre la coach y metodologia |
| Services | `/services` | Tipos de coaching ofrecidos |
| Packages | `/packages` | Paquetes y precios disponibles |
| FAQ | `/faq` | Preguntas frecuentes |
| Contact | `/contact` | Mapa, direccion y formas de contacto |
| Products | `/products` | Pagina en construccion |

### Servicios de Coaching

1. **Individual** - Crecimiento personal y autodescubrimiento
2. **Parejas** - Conexion y comunicacion en pareja
3. **Familiar** - Herramientas para familias
4. **Grupal** - Sesiones en grupos pequenos

### Paquetes

| Paquete | Sesiones | Precio |
|---------|----------|--------|
| Starter | 3 x 60 min | 2800 AED |
| Short Term | 6 x 60 min | 4800 AED |
| Ongoing | 10 x 60 min | 7200 AED |
| Support Groups | 6 x 75 min | 750 AED |

### Integraciones

- **SimplePractice** - Sistema de agendamiento
- **WhatsApp** - Contacto directo
- **Google Maps** - Ubicacion del consultorio
- **Redes Sociales** - Instagram, Facebook

## Componentes

### Nav
Barra de navegacion con:
- Logo con enlace a home
- Links de navegacion
- Menu desplegable para productos
- Selector de idioma
- Menu hamburguesa (movil)

### Footer
Pie de pagina con:
- Informacion de contacto
- Enlaces rapidos
- Redes sociales (Instagram, Facebook, Email)
- Copyright

### LanguageContext
Proveedor de contexto para:
- Gestion del idioma actual
- Funcion de traduccion `t()`
- Persistencia en localStorage

## Paleta de Colores

| Color | Uso |
|-------|-----|
| Sand (Arena) | Fondos, tarjetas |
| Brown (Marron) | Texto, botones principales |
| Soft Clay | Fondos de secciones |
| Teal | Hover, acentos |
| Warm White | Botones secundarios |

## Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para produccion
npm run start    # Ejecutar build de produccion
npm run lint     # Verificar codigo con ESLint
```

## Documentacion

El archivo de documentacion completa esta disponible en:
- **Ruta local:** `public/documentacion-connected-beings.doc`
- **URL:** `http://localhost:3000/documentacion-connected-beings.doc`

## Contacto

- **Telefono:** (+971) 0505206141
- **Email:** connectedbeings@gmail.com
- **Direccion:** MBZUAI, Building 1A, Podium Level, Unit G-12, Masdar City, Abu Dhabi

## Licencia

Proyecto privado - Connected Beings Coaching Services 2026
