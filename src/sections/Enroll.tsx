import { Section, H2, Lead, ButtonLink, Muted } from "./_ui";
import { FaFacebook, FaInstagram } from "react-icons/fa";

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
          Zapisz się
        </ButtonLink>
      </div>

      <Muted>
        Masz szybkie pytanie?
        Napisz do mnie na WhatsApp.
        Często prowadzę zajęcia i nie zawsze mogę odebrać telefon,
        ale na wiadomości odpowiadam do końca dnia.
      </Muted>

      <div style={{ marginTop: 12 }}>
        <a href={whatsappLink} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>

      <div style={{ marginTop: 24 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <a
            href="https://www.facebook.com/profile.php?id=61587856476781"
            target="_blank"
            rel="noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <FaFacebook size={18} />
            englishinmovement
          </a>

          <a
            href="https://www.instagram.com/englishinmovement.pl/"
            target="_blank"
            rel="noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <FaInstagram size={18} />
            @englishinmovement.pl
          </a>
        </div>
      </div>
    </Section>
  );
}