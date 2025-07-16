import { Section } from "../section";

const description = (
  <div className="section__description">
    <p>
      I love tackling complex problems and building efficient, scalable solutions. With over a 15 years of experience in software development, I thrive in remote and async environments, where I can focus on delivering real value. I embrace the functional programming paradigm for its clarity, reliability, and ability to model complex domains elegantly. Writing maintainable, high-quality code is a core part of my approach.
    </p>
    <p>
      I've worked across the entire development lifecycle, often serving as a tech lead. Designing and implementing new features from scratch to deployment, ensuring that software is not only built but also shipped successfully, are some of my daily tasks. My expertise includes building and integrating microservices and third-party systems, communicating them via API's (REST, GQL) or message brokers like Kafka. At the same time, I care about consistently increasing test coverage, optimizing queries/algorithms/CI flows and improving legacy code in general.  
    </p>
    <p>
      I have experience working side by side with ML teams, integrating predictive LLM models into real-world applications. Beyond software development, I closely follow advancements in blockchain technology, especially the evolution of Algorand and its approach to scalability and decentralization.
    </p>
  </div>
);

export const SectionProfile = () => (
  <Section icon={"user"} title="Summary" description={description} />
);
