import { Section } from "../section";

const description = (
  <div className="section__description">
    <p>
      I love tackling complex problems and building efficient, scalable solutions. With over a 15 years of experience in software development, I thrive in remote and async environments, where I can focus on delivering real value. I embrace the functional programming paradigm for its clarity, reliability, and ability to model complex domains elegantly. Writing maintainable, high-quality code is a core part of my approach.
    </p>
    <p>
      I've worked across the entire development lifecycle, often serving as a tech lead. This includes not only designing and implementing new features from scratch, but also ensuring that these solutions are built with maintainability at their core. My extensive experience with large legacy codebases has ingrained in me the importance of writing clean, well-architected code that stands the test of time, minimizing future technical debt and maximizing long-term impact. From initial concept to successful deployment, I prioritize creating robust systems that are easy to understand, extend, and support.  
    </p>
    <p>
      My expertise includes building and integrating microservices and third-party systems, communicating them via APIs (REST, GQL) or message brokers like Kafka. At the same time, I care about consistently increasing test coverage, optimizing queries, algorithms, and CI flows, and improving legacy code in general.
    </p>
    <p>
      I have experience working side by side with ML teams, integrating predictive LLM models into real-world applications. Beyond software development, I closely follow advancements in blockchain technology, especially the evolution of Algorand and its approach to scalability and decentralization.
    </p>
  </div>
);

export const SectionProfile = () => (
  <Section icon={"user"} title="Summary" description={description} />
);
