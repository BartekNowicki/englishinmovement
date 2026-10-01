import { Section, H2, Lead, Row, Card } from "./_ui";

export default function WhatYouLearn() {
    return (
        <Section tone="soft">
            <H2>Co będziemy ćwiczyć</H2>

            <Lead>
                Pracujemy na realnych sytuacjach z treningu i terapii.
                Tematy dopasowujemy do Twojej specjalizacji i codziennej pracy z klientem.
            </Lead>

            <Row>
                <Card title="Instrukcje i cueing" icon="🎯">
                    Jak jasno opisywać pozycję, kierunek ruchu, tempo,
                    oddech i sposób wykonania ćwiczenia.
                </Card>

                <Card title="Anatomia i biomechanika" icon="🧩">
                    Jak naturalnie mówić o ruchu, stawach, mięśniach,
                    zakresach ruchu, obciążeniu i kontroli.
                </Card>

                <Card title="Korekta ruchu" icon="💬">
                    Jak poprawiać technikę, proponować zmianę
                    i przekazywać wskazówki bez tłumaczenia zdań w głowie.
                </Card>

                <Card title="Ból i ograniczenia" icon="🛡️">
                    Jak pytać o ból, dyskomfort, wcześniejsze urazy
                    i dostosować komunikację do aktualnych możliwości klienta.
                </Card>
            </Row>
        </Section>
    );
}