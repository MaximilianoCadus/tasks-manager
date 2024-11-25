# Tasks Manager

Este es un proyecto de gestión de tareas construido con React en el frontend y Node.js en el backend. Utiliza MongoDB como base de datos y Tailwind CSS para el diseño.

## Características

- Registro y autenticación de usuarios.
- Creación, edición y eliminación de tareas.
- Protección de rutas para usuarios autenticados.
- Validación de formularios con react-hook-form.
- Manejo de cookies para la autenticación.

## Tecnologías Utilizadas

### Frontend

- React
- React Router
- Tailwind CSS
- Axios
- react-hook-form

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- Zod

## Instalación

### Requisitos Previos

- Node.js
- MongoDB

### Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/tasks-manager.git
cd tasks-manager
```

### Configuración del Backend

1. Navega al directorio del backend:

```bash
cd backend
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` y configura las variables de entorno necesarias:

```env
MONGO_URI=tu_mongo_uri
TOKEN_SECRET=tu_secreto
```

4. Inicia el servidor:

```bash
npm run dev
```

### Configuración del Frontend

1. Navega al directorio del frontend:

```bash
cd client
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia la aplicación:

```bash
npm run dev
```

## Uso

1. Abre tu navegador y navega a `http://localhost:5173`.
2. Regístrate o inicia sesión para comenzar a gestionar tus tareas.
