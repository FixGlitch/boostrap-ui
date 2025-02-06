"use client";

import React, { useState } from "react";
import Alert from "@/components/boostrap-ui/Alert/Alert";
import Button from "@/components/boostrap-ui/Button/Button";
import { Container } from "react-bootstrap";

export default function AlertTemplate() {
  const [showPrimary, setShowPrimary] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showDanger, setShowDanger] = useState(false);

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
      {/* Botones para mostrar las alertas */}
      <Button
        text="Mostrar Notificación Primario (Top Right)"
        onClick={() => setShowPrimary(true)}
      />
      <Button
        text="Mostrar Notificación Éxito (Top Left)"
        onClick={() => setShowSuccess(true)}
      />
      <Button
        text="Mostrar Notificación Advertencia (Bottom Right)"
        onClick={() => setShowWarning(true)}
      />
      <Button
        text="Mostrar Notificación Peligro (Bottom Left)"
        onClick={() => setShowDanger(true)}
      />

      {/* Alertas condicionales */}
      {showPrimary && (
        <Alert
          variant="primary"
          message="Este es un mensaje de información."
          dismissible
          onClose={() => setShowPrimary(false)}
          position="top-right"
        />
      )}
      {showSuccess && (
        <Alert
          variant="success"
          title="¡Éxito!"
          message="La operación se completó correctamente."
          icon="✅"
          dismissible
          onClose={() => setShowSuccess(false)}
          position="top-left"
        />
      )}
      {showWarning && (
        <Alert
          variant="warning"
          message="Hay un problema con tu conexión."
          action={
            <Button
              text="Reintentar"
              variant="warning"
              size="sm"
              textProps={{ size: "xxs", weight: "bold", color: "white" }}
            />
          }
          dismissible
          onClose={() => setShowWarning(false)}
          position="bottom-right"
        />
      )}
      {showDanger && (
        <Alert
          variant="danger"
          message="Ocurrió un error inesperado."
          dismissible
          onClose={() => setShowDanger(false)}
          position="bottom-left"
        />
      )}
    </Container>
  );
}
