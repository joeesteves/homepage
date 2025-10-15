import { Section } from "../section";

const description = (
  <div className="section__description">
    <p>
      <strong>Full-Stack Engineer</strong> with more than 15 years of experience building web applications. As an independent developer, I've built complete solutions from scratch, exploring and chosing the right technology for the stack, architecture, and deployment strategies. I like architecting and planning robust solutions from the ground and across the entire stack, from React with modern state management to diverse backend technologies including Rails, Elixir, and Node, handling everything from initial design to production deployment.
    </p>
    <p>
      I've successfully guided teams through complex system migrations, legacy code modernization, and greenfield projects across multiple backend, from Rails monoliths to Elixir's to Node.js. My independent work has given me expertise in making architectural decisions under real-world constraints, choosing the optimal (generally the simplest) solution for specific business requirements and designing deployment pipelines across different platforms.
    </p>
    <p>
      I love building and scaling full-stack applications from the ground up, making strategic decisions about modern architectures: microservices communication via REST/GraphQL APIs, real-time features with WebSockets, message queuing with Kafka, and containerized deployments with Docker/Kubernetes. My independent development experience spans the entire DevOps pipeline, from initial architecture design and coding to CI/CD implementation, infrastructure provisioning, and production monitoring.
    </p>
    <p>
      Beyond TypeScript, I bring valuable experience in Elixir/Phoenix and Ruby on Rails, having maintained and developed over large codebases. I'm passionate about programming in general (my personal programming bookshell 📖 can confirm) I keep learning almost every day, new patters, blockchain, languages, paradigms, IA tooling since this is what I love to do.
    </p>
  </div>
);

export const SectionProfile = () => (
  <Section icon={"user"} title="Summary" description={description} />
);
