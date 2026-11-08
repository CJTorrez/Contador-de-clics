# Contador de clics

Aplicación en React, TypeScript y Tailwind CSS para contar eventos durante una observación.

## Ejecutar el proyecto

Requiere Node.js 22.12 o posterior.

```powershell
npm ci
npm run dev
```

Abre la dirección que muestra Vite en la terminal.

El contador empieza en 0. **Aumentar** suma un evento, **Disminuir** resta uno y **Reiniciar** vuelve a 0. En cero se desactivan los botones para disminuir y reiniciar.

`src/components/Contador.tsx` contiene la interfaz, `src/hooks/useContador.ts` maneja el estado y sus operaciones, y `src/types/Contador.ts` define el tipo que devuelve el hook.
