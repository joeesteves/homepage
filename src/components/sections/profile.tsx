import { Section } from "../section";

const description = (
  <div className="section__description">
    I love tackling complex problems and building efficient, scalable solutions.
    With over a decade of experience in software development, I thrive in remote
    and async environments, where I can focus on delivering real value. I
    embrace the functional programming paradigm for its clarity, reliability,
    and ability to model complex domains elegantly. Writing maintainable,
    high-quality code is a core part of my approach. I’ve worked across the
    entire development lifecycle, from design to deployment, ensuring that
    software is not only built but also shipped successfully. I also have
    experience working side by side with ML teams, integrating predictive models
    into real-world applications. Beyond software development, I closely follow
    advancements in blockchain technology, especially the evolution of Algorand
    and its approach to scalability and decentralization.
  </div>
);

export const SectionProfile = () => (
  <Section icon={"user"} title="Summary" description={description} />
);
