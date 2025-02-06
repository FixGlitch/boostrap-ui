import Button from "@/components/boostrap-ui/Button/Button";
import { Container } from "react-bootstrap";
import IconArrowRight from "../../../../public/icons/arrow-right.svg";
import CheckIcon from "../../../../public/icons/check-circle.svg";

export default function ButtonTemplate() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        padding: "1rem",
        overflowX: "auto",
        flexWrap: "wrap",
      }}
    >
      {/* Ejemplo 1: Botón Primario Básico */}
      <Button text="Guardar" variant="primary" />

      {/* Ejemplo 2: Botón Secundario con Ícono */}
      <Button
        text="Continuar"
        variant="secondary"
        icon={IconArrowRight}
        iconWidth={16}
        iconHeight={16}
      />

      {/* Ejemplo 3: Botón de Error */}
      <Button text="Eliminar" variant="error" />

      {/* Ejemplo 4: Botón de Éxito con Ícono a la Izquierda */}
      <Button
        text="Completado"
        variant="success"
        icon={CheckIcon}
        iconFirst={true}
        iconWidth={14}
        iconHeight={14}
      />

      {/* Ejemplo 5: Botón de Advertencia en Tamaño Grande */}
      <Button text="Advertencia" variant="warning" size="lg" />

      {/* Ejemplo 6: Botón Naked (Sin Fondo ni Borde) */}
      <Button text="Cancelar" variant="naked" />

      {/* Ejemplo 8: Botón Redondeado */}
      <Button text="Ir" variant="secondary" rounded={true} size="sm" />

      {/* Ejemplo 9: Botón con Enlace Externo */}
      <Button
        text="Visitar Sitio"
        variant="primary"
        href="https://example.com"
        target="_blank"
      />

      {/* Ejemplo 10: Botón Personalizado con Texto y Estilo */}
      <Button
        text="Descargar"
        variant="border_black"
        textProps={{
          size: "md",
          color: "black",
          weight: "bold",
          tag: "span",
        }}
        size="md"
      />
      {/* Ejemplo 7: Botón Full Width */}
      <Button text="Enviar" variant="primary" fullWidth={true} />
    </Container>
  );
}
