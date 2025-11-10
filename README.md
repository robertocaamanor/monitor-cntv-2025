# Monitor Noticieros y Matinales 2025

Dashboard interactivo que visualiza los datos del estudio **"Monitor de la TV: Temas y voces en noticiarios y matinales"** realizado por el **CNTV (Consejo Nacional de Televisión de Chile)** durante el período **Mayo - Agosto 2025**.

## 📊 Sobre el Estudio

Este proyecto presenta de forma visual e interactiva los hallazgos del estudio oficial del CNTV que analiza:

- **Temas tratados** en noticiarios centrales y matinales de TV abierta + CNN Chile
- **Voces y fuentes** (oficiales vs. externas, distribución por género)
- **Audiencias** (rating y alcance por programa)

### Fuente Original

- **Documento oficial**: [Monitor-Noticieros-y-Matinales-2025.pdf](https://cntv.cl/wp-content/uploads/2025/11/Monitor-Noticieros-y-Matinales-2025.pdf)
- **Organismo**: CNTV - Departamento de Estudios
- **Período analizado**: Mayo – Agosto 2025
- **Programas incluidos**: 
  - Noticiarios: 24 Horas Central, Teletrece Central, CHV Noticias Central, Meganoticias Prime, CNN Prime
  - Matinales: Buenos Días a Todos, Tu Día, Contigo en la Mañana, Mucho Gusto

## 🚀 Características

- ✅ **Dashboard interactivo** con navegación por pestañas (Información General, Noticieros, Matinales)
- ✅ **Visualización responsive** con TailwindCSS
- ✅ **Componentes modulares** y reutilizables
- ✅ **Gráficos y tablas** para análisis de datos
- ✅ **Vista de ancho completo** para mejor visualización

## 🛠️ Tecnologías

- **React 19.2** + **TypeScript**
- **Vite** (build tool)
- **TailwindCSS v4** (estilos)
- **PostCSS** + **Autoprefixer**

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🚀 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### Configuración (ya realizada):

✅ Workflow de GitHub Actions en `.github/workflows/deploy.yml`  
✅ Base path configurado en `vite.config.ts` como `/monitor-cntv-2025/`  
✅ Permisos de GitHub Pages configurados

### Pasos para habilitar el despliegue:

1. **Habilita GitHub Pages en tu repositorio:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - En "Source", selecciona **"GitHub Actions"**

2. **Haz push de los cambios:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **El sitio se desplegará automáticamente en:**
   ```
   https://robertocaamanor.github.io/monitor-cntv-2025/
   ```

4. **Monitorea el despliegue:**
   - Ve a la pestaña "Actions" en tu repositorio
   - Verás el workflow "Deploy to GitHub Pages" ejecutándose
   - Una vez completado (✅), tu sitio estará en línea

### Actualizaciones automáticas:

Cada vez que hagas push a la rama `main`, el sitio se actualizará automáticamente.

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── shared/
│   │   └── UIComponents.tsx      # Componentes UI reutilizables
│   ├── InformacionGeneral.tsx    # Tab de información general
│   ├── Noticieros.tsx            # Tab de noticiarios
│   ├── Matinales.tsx             # Tab de matinales
│   └── Tabs.tsx                  # Sistema de navegación por pestañas
├── data/
│   └── monitorData.ts            # Datos del estudio CNTV (tipados)
├── DashboardMonitorTV2025.tsx    # Componente principal
├── App.tsx
└── main.tsx
```

## 📈 Hallazgos Principales

### Temas Tratados
- **Crónica policial** domina tanto en noticieros (27%) como en matinales (39%)
- Máximo alcanzado en julio por el caso del "Rey de Meiggs"
- Política representa el 16% en noticieros y menos en matinales

### Voces y Género
- **Predominan voces oficiales**: 86% en noticieros vs. 14% fuentes externas
- **Desbalance de género**: Solo 23% de voces son de mujeres en noticieros
- En matinales: 12% de fuentes externas son mujeres, 88% hombres

### Audiencias
- **Meganoticias Prime** lidera rating noticieros (4.0 pts)
- **Matinales** empatan en rating promedio (2.0 pts)
- Mayor alcance en **Mucho Gusto** (1.8M personas/día)

## 📝 Notas

- Los porcentajes son de **tiempo en pantalla**, no de número de notas
- Algunos valores fueron aproximados para comparabilidad en formato de panel
- Los datos representan promedios del período mayo-agosto 2025

## 🤝 Créditos

Dashboard desarrollado a partir del estudio oficial del CNTV. Todos los datos pertenecen al Consejo Nacional de Televisión de Chile.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo licencia MIT.

---

## 🔧 Configuración de Desarrollo

### TailwindCSS v4
Este proyecto usa la última versión de TailwindCSS con PostCSS:

```js
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### ESLint
Configuración con TypeScript y reglas para React:
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
