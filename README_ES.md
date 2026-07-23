# Portfolio de Desarrollador Senior - Alex Rodriguez

Un portafolio moderno y elegante con efectos 3D WebGL, soporte multilenguaje y panel de administración completo.

## 🌟 Características Principales

### 🌐 Multilenguaje (i18n)
- Soporte completo para Español e Inglés
- Cambio de idioma en tiempo real
- Preferencias guardadas automáticamente

### 🎨 Diseño Elegante
- Tema oscuro minimalista con acentos cyan
- Fondo 3D WebGL con partículas animadas
- Animaciones suaves y micro-interacciones
- Totalmente responsive (mobile-first)

### 📁 Gestión de Proyectos
- Visualización de proyectos destacados
- Página dedicada con todos los proyectos
- Búsqueda en tiempo real
- Filtros por tecnología
- Ordenación múltiple (A-Z, más recientes, etc.)

### 🔐 Panel de Administración
- Autenticación segura (password + GitHub owner)
- Agregar, editar y eliminar proyectos
- Búsqueda y filtros avanzados
- Interfaz intuitiva y fácil de usar

### 💾 Persistencia de Datos
- Almacenamiento local con useKV
- Sin necesidad de base de datos externa
- Datos persistentes entre sesiones

## 🚀 Inicio Rápido

```bash
# Instalar dependencias (si es necesario)
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

## 📖 Uso

### Cambiar Idioma
Click en el ícono de idioma en la navegación superior para cambiar entre Español e Inglés.

### Acceder al Panel de Administración
1. Click en el ícono de engranaje (⚙️) en la navegación
2. Usa la contraseña: `admin123` (cambiar en producción)
3. O accede automáticamente si eres el propietario del repositorio en GitHub

### Gestionar Proyectos
1. Accede al panel de administración
2. Click en "Agregar Nuevo Proyecto"
3. Completa el formulario con la información del proyecto
4. Guarda y el proyecto aparecerá inmediatamente

## 🎯 Secciones del Portfolio

### Hero
- Presentación impactante con tu nombre y título
- Animación de entrada suave
- Enlaces a redes sociales
- Botones de acción (Ver Proyectos, Contactar)

### Acerca de Mí
- Biografía profesional
- Habilidades y tecnologías
- Experiencia laboral con timeline

### Proyectos
- Grid de proyectos destacados
- Cards con hover effects
- Modal con información detallada
- Enlaces a GitHub y demo en vivo

### Contacto
- Métodos de contacto (Email, GitHub, LinkedIn, Twitter)
- Cards interactivas con hover
- Enlaces directos

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework principal
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utility-first
- **shadcn/ui v4** - Componentes UI
- **Three.js** - Animaciones 3D WebGL
- **Framer Motion** - Animaciones fluidas
- **Phosphor Icons** - Iconografía
- **Vite** - Build tool ultrarrápido

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── About.tsx              # Sección Acerca de
│   ├── AdminPanel.tsx         # Panel de administración
│   ├── AllProjectsPage.tsx    # Página de todos los proyectos
│   ├── Contact.tsx            # Sección de contacto
│   ├── Hero.tsx               # Hero section
│   ├── Navigation.tsx         # Barra de navegación
│   ├── Projects.tsx           # Galería de proyectos
│   ├── WebGLBackground.tsx    # Fondo 3D animado
│   └── ui/                    # Componentes de shadcn
├── hooks/
│   ├── use-language.tsx       # Hook de internacionalización
│   └── use-mobile.ts          # Detección de dispositivos móviles
├── lib/
│   ├── i18n.ts                # Traducciones y configuración i18n
│   └── utils.ts               # Utilidades
├── App.tsx                    # Componente principal
├── index.css                  # Estilos globales y tema
└── main.tsx                   # Punto de entrada
```

## 🎨 Personalización

### Cambiar Colores del Tema
Edita `/src/index.css` y ajusta las variables CSS:

```css
:root {
  --background: oklch(0.15 0.01 250);    /* Fondo principal */
  --foreground: oklch(0.95 0 0);         /* Texto principal */
  --accent: oklch(0.75 0.15 195);        /* Color de acento (cyan) */
  /* ... más variables */
}
```

### Actualizar Contenido Personal
Las traducciones y contenido se encuentran en `/src/lib/i18n.ts`:

```typescript
export const translations = {
  en: {
    hero: {
      title: 'Tu Nombre',
      subtitle: 'TU TÍTULO',
      description: 'Tu descripción...'
    },
    // ... más traducciones
  },
  es: {
    // Traducciones en español
  }
}
```

### Modificar Fuentes
Las fuentes se cargan en `/index.html`. Actualmente usa:
- **Space Grotesk** - Fuente principal
- **JetBrains Mono** - Código y monoespaciada

## 🔒 Seguridad

⚠️ **IMPORTANTE**: Cambiar la contraseña del admin en producción

Edita `/src/components/AdminPanel.tsx` línea 100:

```typescript
// CAMBIAR EN PRODUCCIÓN
if (password === 'tu-contraseña-segura') {
  setIsAuthenticated(true)
  // ...
}
```

## 📱 Responsive Design

El portfolio está optimizado para:
- 📱 Móviles (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🌟 Características Destacadas

### WebGL Background
- Torus 3D wireframe animado
- 2000 partículas con movimiento suave
- Parallax con movimiento del mouse
- Optimizado para rendimiento (60fps)

### Animaciones
- Fade-in secuencial al hacer scroll
- Hover effects en cards y botones
- Transiciones suaves entre páginas
- Scroll indicator animado en hero

### Admin Panel
- Validación de formularios
- Preview en tiempo real
- Búsqueda instantánea
- Filtros por tecnología con contadores
- Toast notifications para feedback

## 🐛 Solución de Problemas

### El WebGL no se muestra
- Verifica que tu navegador soporte WebGL
- Revisa la consola para errores
- Actualiza los drivers de tu tarjeta gráfica

### Las traducciones no cambian
- Limpia el caché del navegador
- Verifica que el localStorage esté habilitado
- Recarga la página

### Los proyectos no se guardan
- Verifica que el localStorage esté habilitado
- Revisa la consola para errores
- Asegúrate de estar autenticado en el admin panel

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo para tu propio portfolio.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras un bug o tienes una sugerencia:

1. Abre un issue describiendo el problema/sugerencia
2. Fork el proyecto
3. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
4. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
5. Push al branch (`git push origin feature/AmazingFeature`)
6. Abre un Pull Request

## 📧 Contacto

Alex Rodriguez - [@alexdev](https://twitter.com) - alex@example.com

Link del Proyecto: [https://github.com/alexrodriguez/portfolio](https://github.com)

---

⭐️ Si te gustó este proyecto, no olvides darle una estrella en GitHub!
