import { Section, H2, Lead, ButtonLink } from "./_ui";

export default function Contact() {
    const whatsapp = "https://wa.me/48605769837";
    const email = "bartosznowickihq@gmail.com";

    return (
        <Section>
            <H2>Umów lekcję</H2>

            <Lead>
                Chcesz swobodniej i precyzyjniej komunikować się po angielsku
                podczas pracy z klientem?
            </Lead>

            <p
                style={{
                    fontSize: 17,
                    lineHeight: 1.7,
                    maxWidth: 720,
                    marginTop: 14,
                }}
            >
                Napisz do mnie przez WhatsApp lub e-mail. Porozmawiamy o Twojej
                specjalizacji, poziomie angielskiego i sytuacjach, w których
                najczęściej potrzebujesz języka w swojej pracy.
            </p>

            <div
                style={{
                    marginTop: 28,
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
        </Section>
    );
}