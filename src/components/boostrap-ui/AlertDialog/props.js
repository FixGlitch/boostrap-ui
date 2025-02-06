/**
 * @param {boolean} show - Determina si el diálogo es visible.
 * @param {string} [title="Alerta"] - El texto del título del diálogo.
 * @param {string} [message="¿Estás seguro?"] - El mensaje que se muestra en el diálogo.
 * @param {string} [confirmText="Confirmar"] - Texto para el botón de confirmación.
 * @param {string} [cancelText="Cancelar"] - Texto para el botón de cancelación.
 * @param {function} onConfirm - Función de callback ejecutada al hacer clic en el botón de confirmación.
 * @param {function} onCancel - Función de callback ejecutada al hacer clic en el botón de cancelación.
 * @param {string} [confirmVariant="primary"] - Variante de estilo para el botón de confirmación.
 * @param {string} [cancelVariant="secondary"] - Variante de estilo para el botón de cancelación.
 * @param {string} confirmClassName - Nombres de clase adicionales para el botón de confirmación.
 * @param {string} cancelClassName - Nombres de clase adicionales para el botón de cancelación.
 * @param {string} modalClassName - Nombres de clase adicionales para el modal.
 * @param {string} headerClassName - Nombres de clase adicionales para el encabezado.
 * @param {string} bodyClassName - Nombres de clase adicionales para el cuerpo.
 * @param {string} footerClassName - Nombres de clase adicionales para el pie.
 * @param {boolean} [closeButton=true] - Determina si se muestra el botón de cierre.
 * @param {boolean} [centered=true] - Centra el diálogo en la pantalla.
 * @param {boolean} [backdrop=true] - Muestra un fondo detrás del diálogo.
 */
