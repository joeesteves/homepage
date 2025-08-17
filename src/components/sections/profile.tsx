import { Section } from "../section";

const description = (
  <div className="section__description">
    <p>
      <strong>Full-Stack Engineer</strong> with 15+ years of experience building enterprise-scale applications and leading high-performing development teams. As an independent developer, I've built complete solutions from scratch—making critical decisions about tech stack selection, system architecture, and deployment strategies. I specialize in architecting robust solutions across the entire stack, from React frontends with modern state management to diverse backend technologies including Rails, Elixir, and Node.js, handling everything from initial coding to production deployment.
    </p>
    <p>
      As a technical leader and independent developer, I've successfully guided teams through complex system migrations, legacy code modernization, and greenfield projects across multiple backend ecosystems—from Rails monoliths to Elixir's high-concurrency systems to Node.js microservices. My independent work has given me deep expertise in making architectural decisions under real-world constraints, choosing the optimal backend technology for specific business requirements and designing scalable deployment pipelines across different platforms.
    </p>
    <p>
      I excel at building and scaling full-stack applications from the ground up, making strategic decisions about modern architectures: microservices communication via REST/GraphQL APIs, real-time features with WebSockets, message queuing with Kafka, and containerized deployments with Docker/Kubernetes. My independent development experience spans the entire DevOps pipeline—from initial architecture design and coding to CI/CD implementation, infrastructure provisioning, and production monitoring.
    </p>
    <p>
      Beyond TypeScript, I bring valuable experience in Elixir/Phoenix and Ruby on Rails, having maintained and developed over large codebases. I'm passionate about emerging technologies including blockchain development (Algorand ecosystem) and AI integration, always seeking to leverage cutting-edge tools to solve complex business challenges.
    </p>
  </div>
);

export const SectionProfile = () => (
  <Section icon={"user"} title="Summary" description={description} />
);
