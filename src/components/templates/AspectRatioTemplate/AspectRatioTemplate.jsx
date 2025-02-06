import AspectRatio from "@/components/boostrap-ui/AspectRatio/AspectRatio";
import Image from "next/image";
import React from "react";
import PlaceHolder from "../../../../public/placeholder.svg";

export default function AspectRatioTemplate(params) {
  return (
    <div style={{ padding: "2rem" }}>
      {/* Aspect Ratio básico */}
      <AspectRatio ratio="16:9">
        <Image
          src={PlaceHolder}
          alt="Placeholder"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AspectRatio>

      {/* Aspect Ratio con bordes redondeados y sombra */}
      <AspectRatio
        ratio="1:1"
        className="rounded shadow"
        style={{ marginTop: "1rem" }}
      >
        <Image
          src={PlaceHolder}
          alt="Placeholder"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AspectRatio>

      {/* Aspect Ratio con contenido personalizado */}
      <AspectRatio ratio="4:3" style={{ marginTop: "1rem" }}>
        <div
          style={{
            backgroundColor: "#3b82f6",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          Contenido Personalizado
        </div>
      </AspectRatio>
    </div>
  );
}
