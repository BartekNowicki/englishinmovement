import { Section, H2, Lead, Row, Card } from "./_ui";

export default function CourseStructure() {
  return (
    <Section>
      <H2>Jak wygląda szkolenie</H2>

      <Lead>
        Pracujemy na żywo, w małej grupie,
        z naciskiem na praktykę mówienia.
      </Lead>

      <Row>
        <Card title="12 godzin live" icon="⏱️">
          6 spotkań po 2 godziny.
        </Card>

        <Card title="Grupy 3–5 osób" icon="👥">
          Każdy uczestnik otrzymuje indywidualny feedback.
        </Card>

        <Card title="Realne scenariusze" icon="🎬">
          Symulacje sytuacji z prawdziwych sesji.
        </Card>

        <Card title="Tylko potrzebna gramatyka" icon="📘">
          Omawiana wyłącznie gdy wpływa na bezpieczeństwo komunikacji.
        </Card>
      </Row>
    </Section>
  );
}