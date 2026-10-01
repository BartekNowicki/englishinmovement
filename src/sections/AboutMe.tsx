import { Section, H2, Lead } from "./_ui";
import bartosz from "../assets/bartosz.jpg";

export default function AboutMe() {
    return (
        <Section tone="soft">
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1.3fr) minmax(280px, 0.7fr)",
                    gap: 48,
                    alignItems: "center",
                }}
            >
                <div>
                    <H2>O mnie</H2>

                    <Lead>
                        Łączę dwa obszary, które od lat są częścią mojego życia:
                        język angielski i pracę z ruchem.
                    </Lead>

                    <div
                        style={{
                            fontSize: 17,
                            lineHeight: 1.75,
                            maxWidth: 760,
                        }}
                    >
                        <p>
                            Jestem{" "}
                            <strong>
                                certyfikowanym trenerem personalnym, trenerem medycznym,
                                instruktorem Pilatesu oraz nauczycielem języka angielskiego
                            </strong>
                            .
                        </p>

                        <p>
                            Ruch i język angielski towarzyszą mi od dzieciństwa.
                            Dorastając w Stanach Zjednoczonych, trenowałem różne
                            dyscypliny sportowe zarówno w szkole, jak i w klubach sportowych.
                            Dzięki temu język związany ze sportem, treningiem i ruchem
                            poznawałem naturalnie — w praktyce.
                        </p>

                        <p>
                            Dziś zawodowo pracuję z klientami jako trener i instruktor
                            Pilatesu, dlatego dobrze znam sytuacje, w których specjalista
                            musi szybko i precyzyjnie wytłumaczyć ruch, skorygować technikę,
                            zapytać o odczucia albo odpowiednio zareagować podczas ćwiczenia.
                        </p>

                        <p>
                            <strong>English in Movement</strong> powstało właśnie z połączenia
                            tych doświadczeń. Na lekcjach rozmawiamy o Twojej pracy
                            i ćwiczymy język, którego naprawdę potrzebujesz podczas kontaktu
                            z anglojęzycznym klientem.
                        </p>
                    </div>
                </div>

                <div>
                    <img
                        src={bartosz}
                        alt="Bartosz Nowicki – trener, instruktor Pilatesu i nauczyciel angielskiego"
                        style={{
                            width: "100%",
                            display: "block",
                            borderRadius: 24,
                            objectFit: "cover",
                            aspectRatio: "4 / 5",
                        }}
                    />
                </div>
            </div>
        </Section>
    );
}