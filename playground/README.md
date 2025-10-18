# 🧪 Neural Sandbox - Hooks Playground

Un espacio interactivo para probar y experimentar con hooks personalizados de React.

## ✨ Características

- **Demos interactivos**: Cada hook tiene su propio componente de demostración
- **Comparaciones en vivo**: Puedes ver cómo funcionan los hooks vs hooks nativos
- **Logs en tiempo real**: Observa cuándo y cómo se ejecutan los efectos
- **Interfaz limpia**: Diseño simple y enfocado en la funcionalidad

## 🚀 Cómo usar

### Ejecutar el playground

```bash
cd playground
npm start
```

Esto abrirá el playground en [http://localhost:3000](http://localhost:3000)

### Agregar un nuevo hook

1. **Crea tu hook** en la carpeta `../hooks/nombreDelHook/`
2. **Exporta tu hook** en `src/hooks.js`:
   ```javascript
   export { tuNuevoHook } from '../../hooks/tuNuevoHook';
   ```
3. **Crea un componente demo** en `src/TuNuevoHookDemo.js`
4. **Agrega el demo** al `App.js`

## 📁 Estructura

```
playground/
├── src/
│   ├── App.js              # Componente principal
│   ├── App.css             # Estilos del playground
│   ├── hooks.js            # Exportaciones de hooks
│   ├── UseUpdateEffectDemo.js  # Demo del hook useUpdateEffect
│   └── [OtrosHookDemo.js]  # Demos adicionales
├── public/
└── package.json
```

## 🎯 Hooks disponibles

### useUpdateEffect
- **Ubicación**: `../hooks/useUpdateEffect/`
- **Descripción**: Como `useEffect`, pero se salta la primera ejecución
- **Demo**: Compara side-by-side con `useEffect` normal

## 🔧 Scripts disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm test` - Ejecuta los tests
- `npm run build` - Construye la aplicación para producción
