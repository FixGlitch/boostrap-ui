/**
 * @param {Object[]} items Elementos del acordeón. Un array de objetos donde cada objeto contiene el título, contenido y otros atributos de un ítem del acordeón.
 * @param {string} defaultActiveKey La clave por defecto que indica qué ítem estará abierto al iniciar (por defecto, el primero).
 * @param {string} size Tamaño del acordeón. Puede ser 'sm', 'md', 'lg', etc., para especificar el tamaño del componente.
 * @param {string} rounded Define el redondeo de los bordes del acordeón. Puede ser 'sm', 'md', 'lg', etc., para establecer el nivel de redondeo.
 * @param {boolean} fullWidth Si es verdadero, el acordeón tomará el 100% del ancho disponible en el contenedor.
 * @param {string} iconUp Ícono que se muestra cuando el acordeón está expandido. Este ícono reemplaza el ícono predeterminado.
 * @param {string} iconDown Ícono que se muestra cuando el acordeón está colapsado. Este ícono reemplaza el ícono predeterminado.
 * @param {number} iconWidth Ancho de los íconos de expansión/colapso.
 * @param {number} iconHeight Altura de los íconos de expansión/colapso.
 * @param {Object} headerText Propiedades para personalizar el texto del encabezado del acordeón.
 *    @param {string} headerText.size Tamaño de la fuente del título en el encabezado (ej. 'sm', 'md', 'lg').
 *    @param {string} headerText.color Color del texto del título en el encabezado (puede ser un nombre de color, código hexadecimal, rgb, etc.).
 *    @param {string} headerText.weight Peso del texto del encabezado (ej. 'normal', 'bold', 'lighter').
 *    @param {string} headerText.font Familia de la fuente del texto del encabezado (puede ser un nombre de fuente como 'Arial', 'Roboto', etc.).
 * @param {Object} bodyText Propiedades para personalizar el texto del cuerpo del acordeón.
 *    @param {string} bodyText.size Tamaño de la fuente del cuerpo del contenido (ej. 'sm', 'md', 'lg').
 *    @param {string} bodyText.color Color del texto del cuerpo (puede ser un nombre de color, código hexadecimal, rgb, etc.).
 *    @param {string} bodyText.weight Peso del texto del cuerpo (ej. 'normal', 'bold', 'lighter').
 *    @param {string} bodyText.font Familia de la fuente del texto del cuerpo (puede ser un nombre de fuente como 'Arial', 'Roboto', etc.).
 * @param {Object} footerText Propiedades para personalizar el texto del pie del acordeón.
 *    @param {string} footerText.size Tamaño de la fuente del pie de página (ej. 'sm', 'md', 'lg').
 *    @param {string} footerText.color Color del texto del pie de página (puede ser un nombre de color, código hexadecimal, rgb, etc.).
 *    @param {string} footerText.weight Peso del texto del pie de página (ej. 'normal', 'bold', 'lighter').
 *    @param {string} footerText.font Familia de la fuente del texto del pie de página (puede ser un nombre de fuente como 'Arial', 'Roboto', etc.).
 * @param {string} className Clases adicionales para aplicar al contenedor principal del acordeón. Útil para aplicar estilos personalizados.
 * @template Propiedades para la personalización y estilo del acordeón.
 *    @param {string} cardStyle Estilos adicionales para cada tarjeta (elemento) del acordeón. Se puede usar para personalizar el diseño de cada tarjeta individualmente.
 *    @param {string} headerStyle Estilos adicionales para el encabezado de cada tarjeta del acordeón. Se puede usar para personalizar el estilo del título de cada tarjeta.
 *    @param {string} bodyStyle Estilos adicionales para el cuerpo de cada tarjeta del acordeón. Se puede usar para personalizar el contenido dentro de cada tarjeta.
 *    @param {string} footerStyle Estilos adicionales para el pie de página de cada tarjeta del acordeón. Se puede usar para personalizar el pie de página de cada tarjeta.
 */
