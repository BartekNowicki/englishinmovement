import Hero from "../sections/Hero";
import ForWho from "../sections/ForWho";
import WhatYouLearn from "../sections/WhatYouLearn";
import LessonFormat from "../sections/LessonFormat";
import AboutMe from "../sections/AboutMe";
import WhereLessons from "../sections/WhereLessons";
import Contact from "../sections/Contact";

export default function HomePage() {
    return (
        <>
            <Hero />
            <ForWho />
            <WhatYouLearn />
            <LessonFormat />
            <AboutMe />
            <WhereLessons />
            <Contact />
        </>
    );
}