import { Container, DividerLabel, ButtonLink } from "./_ui";

export default function Hero() {
    const whatsapp = "https://wa.me/48605769837";
    const email = "bartosznowickihq@gmail.com";

    return (
        <section style={{ padding: "86px 0 72px" }}>
            <Container>
                <DividerLabel text="Konwersacyjne lekcje angielskiego dla specjalistów ruchu • Online • Warszawa" />

                <h1
                    style={{
                        fontSize: 46,
                        lineHeight: 1.08,
                        margin: "16px 0 12px",
                        letterSpacing: -0.6,
                    }}
                >
                    Pracujesz z ruchem?
                    <br />
                    Mów o nim swobodnie po angielsku.
                </h1>

                <p
                    style={{
                        fontSize: 18,
                        lineHeight: 1.7,
                        maxWidth: 760,
                    }}
                >
                    <strong>English in Movement</strong> to indywidualne,
                    konwersacyjne lekcje angielskiego dla trenerów,
                    fizjoterapeutów, instruktorów i innych specjalistów ruchu.
                    Ćwiczymy język, którego naprawdę używasz podczas pracy z klientem:
                    instrukcje ruchowe, cueing, anatomię, biomechanikę
                    i naturalną komunikację.
                </p>

                <div
                    style={{
                        marginTop: 24,
                        display: "flex",
                        gap: 14,
                        flexWrap: "wrap",
                    }}
                >
                    <ButtonLink href={whatsapp} variant="primary">
                        Umów lekcję na WhatsApp
                    </ButtonLink>

                    <ButtonLink href={`mailto:${email}`} variant="ghost">
                        Napisz e-mail
                    </ButtonLink>
                </div>
            </Container>
        </section>
    );
}