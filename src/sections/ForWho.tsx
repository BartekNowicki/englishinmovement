import { Section, H2, Lead, Row, Card } from "./_ui";

export default function ForWho() {
  return (
    <Section>
      <H2>Dla kogo jest ten kurs</H2>

      <Lead>
        Dla polskich specjalistów ruchu, którzy znają angielski na poziomie
        komunikatywnym, ale chcą mówić precyzyjnie i bez wahania
        podczas prowadzenia zajęć.
      </Lead>

      <Row>
        <Card title="Instruktorzy Pilates" icon="🧘">
          Prowadzisz sesje 1:1 lub grupowe i chcesz brzmieć naturalnie,
          a nie tłumaczyć dosłownie z polskiego.
        </Card>

        <Card title="Nauczyciele jogi" icon="🧠">
          Pracujesz z klientami międzynarodowymi
          i potrzebujesz jasnej komunikacji.
        </Card>

        <Card title="Trenerzy fitness" icon="🏋️">
          Chcesz klarownie mówić o technice,
          tempie i progresji.
        </Card>

        <Card title="Trenerzy sportowi / WF" icon="🏃">
          Prowadzisz zajęcia w środowisku mieszanym językowo.
        </Card>
      </Row>
    </Section>
  );
}