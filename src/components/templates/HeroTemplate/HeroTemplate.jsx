"use client";
import Hero from "@/components/boostrap-ui/Hero/Hero";

export default function HeroTemplate(params) {
  return (
    <div>
      {/* Ejemplo 1: Hero Básico */}
      <Hero
        backgroundHero="https://generated.vusercontent.net/placeholder.svg?height=706&width=1920&text"
        heroMobile="https://generated.vusercontent.net/placeholder.svg?height=573&width=768&text"
        title="<strong>Descubre</strong> el Futuro"
        description="Explora las últimas innovaciones tecnológicas que están transformando el mundo."
        label="Más Información"
        url="/about"
        target="_self"
      />

      {/* Espaciador */}
      <div style={{ height: "4rem" }} />

      {/* Ejemplo 2: Hero con Fondo Oscuro */}
      <Hero
        backgroundHero="https://generated.vusercontent.net/placeholder.svg?height=706&width=1920&text"
        heroMobile="https://generated.vusercontent.net/placeholder.svg?height=573&width=768&text"
        title="Bienvenido a <strong>Nuestro Mundo</strong>"
        description="Sumérgete en una experiencia única con nuestros productos y servicios."
        label="Comenzar Ahora"
        url="/start"
        target="_blank"
      />

      {/* Espaciador */}
      <div style={{ height: "4rem" }} />

      {/* Ejemplo 3: Hero sin Botón */}
      <Hero
        backgroundHero="https://generated.vusercontent.net/placeholder.svg?height=706&width=1920&text"
        heroMobile="https://generated.vusercontent.net/placeholder.svg?height=573&width=768&text"
        title="Innovación en cada paso"
        description="Estamos comprometidos con la excelencia y la calidad en todo lo que hacemos."
      />

      {/* Espaciador */}
      <div style={{ height: "4rem" }} />

      {/* Ejemplo 4: Hero con Título Largo */}
      <Hero
        backgroundHero="https://generated.vusercontent.net/placeholder.svg?height=706&width=1920&text"
        heroMobile="https://generated.vusercontent.net/placeholder.svg?height=573&width=768&text"
        title="Transforma tu negocio con nuestras soluciones avanzadas de tecnología"
        description="Ofrecemos herramientas y recursos para ayudarte a alcanzar tus objetivos."
        label="Contactar Ahora"
        url="/contact"
        target="_self"
      />
    </div>
  );
}
