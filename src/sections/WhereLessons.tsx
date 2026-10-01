import { Section, H2, Lead, Row, Card } from "./_ui";

export default function WhereLessons() {
    return (
        <Section tone="soft">
            <H2>Gdzie możemy się spotkać</H2>

    <Lead>
    Wybierz formę, która najlepiej pasuje do Twojego trybu pracy
    i miejsca zamieszkania.
    </Lead>

    <Row>
    <Card title="Online" icon="💻">
        Lekcje z dowolnego miejsca, z wykorzystaniem materiałów,
        zdjęć, nagrań i przykładów bezpośrednio z Twojej pracy.
    </Card>

    <Card title="Stacjonarnie w Warszawie" icon="📍">
        Spotkania na żywo dla osób, które wolą bezpośrednią rozmowę
    i chcą ćwiczyć język w bardziej naturalnym kontakcie.
    </Card>
    </Row>
    </Section>
);
}