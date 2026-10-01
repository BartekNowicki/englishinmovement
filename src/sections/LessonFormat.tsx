import { Section, H2, Lead, Row, Card } from "./_ui";

export default function LessonFormat() {
    return (
        <Section>
            <H2>Jak wyglądają lekcje</H2>

            <Lead>
                To indywidualne, konwersacyjne spotkania oparte na Twojej pracy,
                specjalizacji i realnych sytuacjach z klientami.
            </Lead>

            <Row>
                <Card title="Indywidualna konwersacja" icon="💬">
                    Dużo mówienia, pytań i praktycznego używania języka
                    zamiast pracy według sztywnego programu.
                </Card>

                <Card title="Twoja specjalizacja" icon="🎯">
                    Rozmawiamy o treningu, Pilatesie, fizjoterapii,
                    anatomii lub innych tematach związanych z Twoją pracą.
                </Card>

                <Card title="Realne sytuacje" icon="🎬">
                    Ćwiczymy instrukcje, rozmowy z klientem, korekty
                    oraz sytuacje, które rzeczywiście zdarzają się podczas pracy.
                </Card>

                <Card title="Feedback na bieżąco" icon="📘">
                    Poprawiam język podczas rozmowy i pokazuję,
                    jak powiedzieć coś bardziej naturalnie, jasno i precyzyjnie.
                </Card>
            </Row>
        </Section>
    );
}