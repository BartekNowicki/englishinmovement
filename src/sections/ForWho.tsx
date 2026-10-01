import { Section, H2, Lead, Row, Card } from "./_ui";

export default function ForWho() {
  return (
      <Section>
        <H2>Dla kogo są te lekcje</H2>

        <Lead>
          Dla osób pracujących z ruchem i ciałem, które znają angielski,
          ale chcą swobodniej, precyzyjniej i bardziej naturalnie
          komunikować się z klientami.
        </Lead>

        <Row>
          <Card title="Trenerzy personalni" icon="🏋️">
            Prowadzenie treningu, instrukcje, korekta techniki
            i naturalna rozmowa z klientem.
          </Card>

          <Card title="Trenerzy medyczni" icon="🎯">
            Język związany z ruchem, ograniczeniami, powrotem
            do aktywności i bezpiecznym progresowaniem ćwiczeń.
          </Card>

          <Card title="Fizjoterapeuci" icon="🩺">
            Wywiad, rozmowa o bólu i funkcji oraz jasne
            objaśnianie ćwiczeń i zaleceń.
          </Card>

          <Card title="Instruktorzy Pilatesu" icon="🧘">
            Cueing, ustawienie ciała, oddech, kierunki ruchu
            oraz prowadzenie sesji po angielsku.
          </Card>

          <Card title="Instruktorzy fitness i jogi" icon="🤸">
            Precyzyjne instrukcje, tempo, pozycje, modyfikacje
            i kontakt z klientami międzynarodowymi.
          </Card>

          <Card title="Trenerzy sportowi" icon="🏃">
            Komunikacja podczas treningu, nauczania techniki
            i pracy ze sportowcem.
          </Card>

          <Card title="Nauczyciele WF" icon="🏀">
            Prowadzenie zajęć i wydawanie jasnych instrukcji
            w środowisku anglojęzycznym.
          </Card>

          <Card title="Inni specjaliści ruchu" icon="💬">
            Jeśli zawodowo pracujesz z ciałem, ruchem lub sportem,
            lekcje możemy dopasować do Twojej specjalizacji.
          </Card>
        </Row>
      </Section>
  );
}