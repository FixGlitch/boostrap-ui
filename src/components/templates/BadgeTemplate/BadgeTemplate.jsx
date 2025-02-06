import Badge from "@/components/boostrap-ui/Badge/Badge";
import React from "react";

export default function BadgeTemplate(params) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        padding: "1rem",
        overflowX: "auto",
        flexWrap: "wrap",
      }}
    >
      {/* Badge básico */}
      <Badge
        text="Primary"
        variant="primary"
        textProps={{ size: "xs", weight: "regular", color: "white" }}
      />

      {/* Badge con tamaño grande y texto personalizado */}
      <Badge
        text="Success"
        variant="success"
        size="lg"
        textProps={{ size: "xs", weight: "regular", color: "white" }}
      />

      {/* Badge con forma de píldora */}
      <Badge
        text="Warning"
        variant="warning"
        pill
        textProps={{ size: "xs", weight: "regular", color: "white" }}
      />

      {/* Badge con tamaño pequeño y estilo secundario */}
      <Badge
        text="Secondary"
        variant="secondary"
        size="sm"
        textProps={{ size: "xs", weight: "regular", color: "white" }}
      />

      {/* Badge personalizado con estilo oscuro */}
      <Badge
        text="Dark"
        variant="dark"
        size="md"
        pill
        textProps={{ size: "xs", weight: "regular", color: "white" }}
      />
    </div>
  );
}
