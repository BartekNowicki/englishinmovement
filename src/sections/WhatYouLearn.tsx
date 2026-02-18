import { Section, H2, Lead, Row, Card } from "./_ui";

export default function WhatYouLearn() {
  return (
    <Section tone="soft">
      <H2>Czego nauczysz się podczas kursu</H2>

      <Lead>
        Program oparty jest na realnych sytuacjach z sali treningowej.
        Wszystko możesz zastosować natychmiast.
      </Lead>

      <Row>
        <Card title="Prowadzenie sesji od A do Z" icon="🎯">
          Rozgrzewka, część techniczna i zakończenie —
          spójnie po angielsku.
        </Card>

        <Card title="Język wzorców ruchu" icon="🧩">
          Push, pull, hinge, squat, lunge, rotacja i stabilizacja – wraz z językiem opisującym zakres ruchu, kontrolę i oddech.
        </Card>

        <Card title="Profesjonalne korekty" icon="💬">
          Jak poprawiać technikę jasno i bez niezręczności.
        </Card>

        <Card title="Bezpieczeństwo i ból" icon="🛡️">
          Jak mówić o dyskomforcie i modyfikacjach ćwiczeń.
        </Card>
      </Row>
    </Section>
  );
}