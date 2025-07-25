# Product Card - Web Components Project

Un proyecto moderno de tarjeta de producto desarrollado con **Web Components** vanilla, utilizando tecnologías nativas del navegador para crear componentes reutilizables y escalables.

## 🌐 Demo en Vivo

**[Ver Demo](https://32proyectocursodejavascriptwebcompone.netlify.app/)**

## 📋 Descripción

Este proyecto demuestra la implementación de Web Components usando JavaScript vanilla para crear una tarjeta de producto interactiva y responsive. El componente `<product-card>` es completamente reutilizable y encapsula tanto la lógica como los estilos.

## ✨ Características

- 🔧 **Web Components nativos** - Sin frameworks, solo JavaScript vanilla
- 📱 **Diseño responsive** - Se adapta a diferentes tamaños de pantalla
- 🎨 **Estilos modernos** - CSS moderno con efectos de hover y transiciones
- ♻️ **Componente reutilizable** - Fácil de implementar en cualquier proyecto
- 🚀 **Despliegue automatizado** - Integrado con Vercel para CI/CD

## 🏗️ Estructura del Proyecto

```
├── index.html              # Página principal
├── app.js                  # Archivo de entrada principal
├── style.css               # Estilos globales
├── vercel.json            # Configuración de Vercel
├── components/
│   └── product-card.js    # Componente Web Component
├── imgs/
│   └── nike-blue.png      # Imagen del producto
└── README.md              # Este archivo
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Un navegador web moderno que soporte Web Components
- Un servidor local (opcional, para desarrollo)

### Pasos para ejecutar localmente

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/omarhernandezrey/32proyectoCursoDeJavaScriptWebComponents.git
   cd 32proyectoCursoDeJavaScriptWebComponents
   ```

2. **Ejecuta un servidor local:**
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (si tienes npx)
   npx serve .
   
   # Con Live Server (VS Code extension)
   # Abre el proyecto en VS Code y usa Live Server
   ```

3. **Abre tu navegador:**
   ```
   http://localhost:8000
   ```

## 💻 Cómo usar el componente

### Implementación básica

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Proyecto</title>
</head>
<body>
    <!-- Uso del componente product-card -->
    <product-card
        img="./ruta/a/imagen.png"
        title="Nombre del Producto"
        collection="Colección"
        description="Descripción detallada del producto..."
        price="$299 USD">
    </product-card>
    
    <!-- Importar el componente -->
    <script type="module" src="./app.js"></script>
</body>
</html>
```

### Atributos disponibles

| Atributo | Tipo | Descripción |
|----------|------|-------------|
| `img` | String | URL de la imagen del producto |
| `title` | String | Nombre del producto |
| `collection` | String | Colección a la que pertenece |
| `description` | String | Descripción detallada |
| `price` | String | Precio del producto |

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos y responsive design
- **JavaScript ES6+** - Web Components API
- **Vercel** - Despliegue y hosting

## 📁 Detalles Técnicos

### Web Components API

El proyecto utiliza las siguientes APIs nativas:

- `customElements.define()` - Para registrar el componente personalizado
- `HTMLElement` - Clase base para el componente
- `Shadow DOM` - Para encapsulación de estilos y estructura
- `Template` - Para definir la estructura HTML del componente

### Características del componente

- **Encapsulación**: Los estilos y la lógica están encapsulados en el Shadow DOM
- **Reutilización**: Se puede usar múltiples veces en la misma página
- **Reactividad**: Los atributos se pueden cambiar dinámicamente

## 🌐 Despliegue

El proyecto está configurado para desplegarse automáticamente en Netlify:

1. **Push a main branch** activa el despliegue automático
2. **Vercel.json** contiene la configuración optimizada
3. **URL de producción**: https://32proyectocursodejavascriptwebcompone.netlify.app/

### Configuración de Vercel

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2025 Omar Hernández Rey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Autor

**Omar Hernández Rey**
- GitHub: [@omarhernandezrey](https://github.com/omarhernandezrey)
- Proyecto: [32proyectoCursoDeJavaScriptWebComponents](https://github.com/omarhernandezrey/32proyectoCursoDeJavaScriptWebComponents)

---

⭐ ¡No olvides dar una estrella al proyecto si te ha sido útil!
