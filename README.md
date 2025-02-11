# Buscador de películas
Este proyecto es una aplicación web para buscar películas mediante una API externa (The Open Movie Database). Permite a los usuarios ingresar el título de una película y obtener una lista de resultados con información como el título, la fecha y la imagen del póster.

__Características Principales__

- Búsqueda Dinámica: Permite ingresar un título y buscar películas en una API externa.

- Manejo de Errores: Muestra un mensaje si hay un error en la búsqueda.

- Renderizado Condicional: Muestra los resultados solo si existen datos.

- Consumo de API Externa: Usa fetch para obtener datos desde un servicio externo de películas.

## Tecnologías Utilizadas

__React.js__: Para la construcción de la interfaz de usuario.

__JavaScript (ES6+)__: Para la lógica de la aplicación.

__CSS (Water.css)__: Para el diseño y estilos rápidos.

__Hooks de React__:

 - useState: Manejo del estado de las películas y la búsqueda.

- useEffect: Para manejar efectos secundarios durante la búsqueda.

- useRef: Para almacenar el valor de la búsqueda anterior sin causar un re-render.

__Custom Hooks__:

- useSearch: Con la lógica del input de búsqueda.

- useMovies: Hace uso del servicio movies y entrega las películas a la App.

__React Service__:

- movies: Contiene una función que hace fetch a la API externa.

