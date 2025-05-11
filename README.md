# HomeChef Challenge (devchallenges.io)

Este proyecto es una réplica fiel del reto HomeChef de devchallenges.io, implementado en React, con consumo de API, maquetado responsive y funcionalidades avanzadas.

## 🚀 ¿Cómo correr el proyecto?

1. Clona el repositorio o descarga el código.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Corre el servidor de desarrollo:
   ```bash
   npm start
   ```
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🛠️ Tecnologías usadas
- React (componentes funcionales)
- React Router
- Hooks personalizados y de React
- localStorage
- CSS puro (sin frameworks)
- Webpack

## 🌐 Endpoints utilizados
- **Obtener categorías:**
  - `https://www.themealdb.com/api/json/v1/1/categories.php`
- **Obtener platillos por categoría:**
  - `https://www.themealdb.com/api/json/v1/1/filter.php?c={category}`
- **Obtener detalle de platillo:**
  - `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`

## 📋 Cumplimiento de requisitos
- [x] Proyecto en React
- [x] Uso de WebHooks (hooks personalizados y de React)
- [x] Uso de localStorage (ingredientes eliminados)
- [x] Uso de React Router (rutas Home y Detalle)
- [x] Maquetado idéntico al de referencia (desktop y mobile)
- [x] Imagen principal personalizada
- [x] Responsive: desktop y mobile
- [x] Funcionalidad de "Sort by" en mobile (ascendente/descendente)
- [x] Consumo de endpoints para categorías, platillos y detalle
- [x] Detalle de platillo con: ID, nombre, categoría, instrucciones, YouTube, web, ingredientes (eliminables)

## 📱 Maquetado
- **Desktop:**
  - Layout, colores, tipografía y disposición idénticos al reto.
- **Mobile:**
  - Layout responsive, buscador y sort-control sticky, controles alineados y diseño profesional.

## ✨ Notas
- No se usó ningún framework de CSS.
- El código es modular y fácil de mantener.
- Puedes cambiar la imagen principal en `src/components/Header.js`.

---

¡Listo para entregar! Si tienes dudas, revisa el código o contacta al autor.