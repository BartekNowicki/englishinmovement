import { Container, DividerLabel, ButtonLink } from "./_ui";

export default function Hero() {
  const email = "bartosznowickihq@gmail.com";

  return (
    <section style={{ padding: "86px 0 72px" }}>
      <Container>
        <DividerLabel text="Kameralny kurs językowy dla instruktorów ruchu • 12h live • Warszawa" />

        <h1
          style={{
            fontSize: 46,
            lineHeight: 1.08,
            margin: "16px 0 12px",
            letterSpacing: -0.6,
          }}
        >
          Uczysz ruchu po angielsku?
          <br />
          Zrób to pewnie, naturalnie i profesjonalnie.
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 760 }}>
          <strong>English in Movement</strong> to specjalistyczne szkolenie
          dla instruktorów sportu, Pilatesu, jogi, fitnessu i trenerów,
          którzy pracują w języku angielskim i chcą brzmieć
          precyzyjnie oraz profesjonalnie.
        </p>

        <div style={{ marginTop: 24 }}>
          <ButtonLink href={`mailto:${email}`} variant="primary">
            Zapisz się
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}