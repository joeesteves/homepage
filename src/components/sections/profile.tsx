import { Section } from "../section";

const description = (
  <div className="section__description">
    I love tackling complex problems and building efficient, scalable solutions. With over a 15 years of experience in software development, I thrive in remote and async environments, where I can focus on delivering real value. I embrace the functional programming paradigm for its clarity, reliability, and ability to model complex domains elegantly. Writing maintainable, high-quality code is a core part of my approach.
    <br />
    I've worked across the entire development lifecycle. Designing and implementing new features from scratch to deployment, ensuring that software is not only built but also shipped successfully, are some of my daily tasks. My expertise includes building and integrating microservices and third-party systems, communicating via various APIs and message brokers like Kafka, and consistently improving test coverage and CI pipelines.

    <br />
    I also have experience working side by side with ML teams, integrating predictive models into real-world applications. Beyond software development, I closely follow advancements in blockchain technology, especially the evolution of Algorand and its approach to scalability and decentralization.
  </div>
);

export const SectionProfile = () => (
  <Section icon={"user"} title="Summary" description={description} />
);
