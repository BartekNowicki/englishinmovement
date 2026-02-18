import { Section, H2, Lead, ButtonLink, Muted } from "./_ui";

export default function Enroll() {
  const email = "bartosznowickihq@gmail.com";
  const whatsappLink = "https://wa.me/48605769837";

  return (
    <Section tone="soft">
      <H2>Zapis na kurs</H2>

      <Lead>
        Aby zapisać się na najbliższą edycję,
        wyślij wiadomość mailową.
      </Lead>

      <div style={{ marginBottom: 20 }}>
        <ButtonLink href={`mailto:${email}`} variant="primary">
          Zapisz się mailowo
        </ButtonLink>
      </div>

      <Muted>
        Masz szybkie pytanie?
        Napisz na WhatsApp.
        Często prowadzę zajęcia i nie zawsze mogę odebrać telefon,
        ale na wiadomości odpowiadam do końca dnia.
      </Muted>

      <div style={{ marginTop: 12 }}>
        <a href={whatsappLink} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>

      <div style={{ marginTop: 24 }}>
        <Muted>
          Facebook:{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61587856476781"
            target="_blank"
            rel="noreferrer"
          >
            englishinmovement
          </a>
          <br />
          Instagram:{" "}
          <a
            href="https://www.instagram.com/englishinmovement.pl/"
            target="_blank"
            rel="noreferrer"
          >
            @englishinmovement.pl
          </a>
        </Muted>
      </div>
    </Section>
  );
}