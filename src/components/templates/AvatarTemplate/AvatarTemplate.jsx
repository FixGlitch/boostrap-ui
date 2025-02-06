import Avatar from "@/components/boostrap-ui/Avatar.js/Avatar";
import React from "react";
import PlaceHolder from "../../../../public/profile.png";

export default function AvatarTemplate(params) {
  return (
    <div style={{ padding: "2rem", display: "flex", gap: "1rem" }}>
      {/* Avatar básico */}
      <Avatar src={PlaceHolder} alt="User Avatar" size="md" />

      {/* Avatar redondeado */}
      <Avatar src={PlaceHolder} alt="User Avatar" size="lg" rounded />

      {/* Avatar con borde */}
      <Avatar src={PlaceHolder} alt="User Avatar" size="xl" border />

      {/* Avatar sin imagen (fallback) */}
      <Avatar alt="Fallback Avatar" size="md" rounded fallback="😎" />
    </div>
  );
}
