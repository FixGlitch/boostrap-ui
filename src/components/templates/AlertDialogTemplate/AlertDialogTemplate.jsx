"use client";

import AlertDialog from "@/components/boostrap-ui/AlertDialog/AlertDialog";
import Button from "@/components/boostrap-ui/Button/Button";
import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";

export default function AlertDialogTemplate(params) {
  const [showDialog, setShowDialog] = useState(false);

  const handleConfirm = () => {
    console.log("Confirmed!");
    setShowDialog(false);
  };

  const handleCancel = () => {
    console.log("Cancelled!");
    setShowDialog(false);
  };

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
      <Col>
        <Button
          text="Show Alert"
          variant="primary"
          onClick={() => setShowDialog(true)}
        />
        <AlertDialog
          show={showDialog}
          title="Delete Item"
          message="Are you sure you want to delete this item?"
          confirmText="Yes, Delete"
          cancelText="No, Cancel"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          confirmVariant="primary"
          cancelVariant="secondary"
        />
      </Col>
    </Container>
  );
}
