# Componentes React js

## Descripción

Es una librería de componentes basados en React.js inspirados en el sistema de diseño Obelisco.

## Instalación

Para instalar Reactobelisco en tu proyecto, puedes ejecutar:

```bash
npm install @davisljr/reactobelisco
```

## Uso

```jsx
import React from 'react';
import { Componente } from '@davisljr/reactobelisco';

const MiComponente = () => {
return (
<div>
<h1>Mi Aplicación</h1>
<Componente />
</div>
);
};

export default MiComponente;
```

## Scripts Disponibles

En el directorio del proyecto, puedes correr:

- `npm run rollup`: Ejecuta Rollup para construir la librería en un único archivo.
- `npm test`: Ejecuta las pruebas usando Jest.
- `npm run lint`: Ejecuta ESLint para buscar y reportar problemas en el código.
- `npm run lint-fix`: Ejecuta ESLint para buscar y reparar problemas en el código.
- `npm run format`: Ejecuta Prettier para formatear el código.
- `npm run dev`: Inicia el entorno de desarrollo para la parte del front-end.
- `npm run build`: Construye la aplicación para producción en la carpeta `dist`.
- `npm start`: Inicia la aplicación para producción.


## Licencia

Este proyecto está bajo la Licencia ISC.
