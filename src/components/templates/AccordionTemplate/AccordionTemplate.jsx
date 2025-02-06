import { Container } from "react-bootstrap";
import { items, items2, items3 } from "./constants/constants";
import Accordion from "@/components/boostrap-ui/Accordion/Accordion";
import ChevronDown from "../../../../public/icons/chevron-down.svg";
import ChevronUp from "../../../../public/icons/chevron-up.svg";

export default function AccordionTemplate() {
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
      {/* Acordeón sin íconos personalizados */}
      <Accordion items={items} size="none" />

      {/* Acordeón con íconos personalizados */}
      <Accordion
        items={items2}
        iconUp={ChevronUp}
        iconDown={ChevronDown}
        iconWidth={20}
        iconHeight={20}
        size="md"
      />

      {/* Otro acordeón sin íconos personalizados */}
      <Accordion items={items3} size="xs" />

      {/* Acordeón con clases personalizadas y tamaño grande */}
      <Accordion
        items={items}
        defaultActiveKey="0"
        className="customAccordion"
        cardStyle="customCard"
        headerStyle="customHeader"
        bodyStyle="customBody"
        footerStyle="customFooter"
        size="lg"
        rounded="lg"
        variant="primary"
      />

      {/* Acordeón con ancho completo */}
      <Accordion items={items} fullWidth={false} variant="secondary" />

      {/* Acordeón con tamaños de texto personalizados */}
      <Accordion
        items={items}
        size="sm"
        rounded="sm"
        headerText={{ size: "md", color: "black", weight: "bold", tag: "h2" }}
        bodyText={{
          size: "xs",
          color: "black",
          weight: "regular",
          tag: "p",
        }}
        footerText={{
          size: "xxs",
          color: "gray",
          weight: "light",
          tag: "p",
        }}
        className="customAccordion"
        variant="default"
      />
    </Container>
  );
}
