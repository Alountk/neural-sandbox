# 🧪 Neural Sandbox - Hooks Playground

Un espacio interactivo para probar y experimentar con hooks personalizados de React con **TypeScript**.

## ✨ Características

- **✅ TypeScript**: Tipado estático completo para mejor desarrollo
- **Demos interactivos**: Cada hook tiene su propio componente de demostración
- **Comparaciones en vivo**: Puedes ver cómo funcionan los hooks vs hooks nativos
- **Logs en tiempo real**: Observa cuándo y cómo se ejecutan los efectos
- **Interfaz limpia**: Diseño simple y enfocado en la funcionalidad
- **Path aliases**: Importación limpia desde la carpeta de hooks raíz

## 🚀 Cómo usar

### Ejecutar el playground

```bash
cd playground
npm start
```

Esto abrirá el playground en [http://localhost:3000](http://localhost:3000)

### Agregar un nuevo hook

1. **Crea tu hook** en `../hooks/nombreDelHook/index.tsx`
2. **Exporta tu hook** en `src/hooks.ts`:
   ```typescript
   export { tuNuevoHook } from '@/hooks/tuNuevoHook';
   ```
3. **Crea un componente demo** en `src/TuNuevoHookDemo.tsx`
4. **Agrega el demo** al `App.tsx`

## 📁 Estructura

```
playground/
├── src/
│   ├── App.tsx             # Componente principal
│   ├── App.css             # Estilos del playground
│   ├── hooks.ts            # Exportaciones de hooks
│   ├── UseUpdateEffectDemo.tsx  # Demo del hook useUpdateEffect
│   └── [OtrosHookDemo.tsx] # Demos adicionales
├── public/
├── tsconfig.json           # Configuración de TypeScript
└── package.json
```

## 🎯 Hooks disponibles

### useUpdateEffect
- **Ubicación**: `../hooks/useUpdateEffect/index.tsx`
- **Descripción**: Como `useEffect`, pero se salta la primera ejecución
- **Demo**: Compara side-by-side con `useEffect` normal
- **Tipos**: Completamente tipado con TypeScript

## 🔧 Scripts disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm test` - Ejecuta los tests
- `npm run build` - Construye la aplicación para producción
