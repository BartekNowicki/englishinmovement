import { Section, H2, Lead, Row, Card, Muted } from "./_ui";

export default function NextEdition() {
  return (
    <Section tone="soft">
      <H2>Najbliższa edycja</H2>

      <Lead>
        Marzec 2026 • 6 kolejnych tygodni • ul. Dobra, Powiśle, Warszawa
      </Lead>

      <Row>
        <Card title="Wtorek" icon="🗓️">12:00</Card>
        <Card title="Czwartek" icon="🗓️">12:00</Card>
        <Card title="Piątek" icon="🗓️">14:00</Card>
        <Card title="Sobota" icon="🗓️">10:00</Card>
      </Row>

      <div style={{ marginTop: 16 }}>
        <Muted>
          Dostępna również opcja 1:1 online (termin i cena ustalane indywidualnie).
        </Muted>
      </div>
    </Section>
  );
}