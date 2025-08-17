import { Section } from "../section";

const description = (
  <div className="section__description">
    <div className="leadership-highlights">
      <div className="leadership-item">
        <h4>Senior Engineering Leader @ TheRealReal</h4>
        <p>Leading full-stack development teams using TypeScript, Elixir, and Rails for the inbound flow systems. Architecting scalable e-commerce solutions, implementing microservices, CI/CD pipelines, and mentoring developers across multiple technology stacks and best practices.</p>
      </div>

      <div className="leadership-item">
        <h4>Full-Stack Team Lead @ Caravana.dev</h4>
        <p>Led development teams in building modern web applications with TypeScript, React, and Node.js. Focused on creating scalable software solutions, establishing engineering best practices, and mentoring developers in functional programming and clean architecture patterns.</p>
      </div>

      <div className="leadership-item">
        <h4>Senior Software Engineer @ Crosshero</h4>
        <p>Developed and maintained full-stack applications using Ruby on Rails with modern frontend technologies. Built scalable web applications, implemented RESTful APIs, collaborated with cross-functional teams to deliver robust solutions, and contributed to system architecture decisions for optimal performance and database optimization.</p>
      </div>
      
      <div className="leadership-item">
        <h4>Technical Architecture & Strategy</h4>
        <p>15+ years designing and implementing enterprise-scale applications across multiple companies. Specialized in migrating legacy systems to modern TypeScript stacks, establishing coding standards, and building resilient distributed systems with React frontends and Node.js backends.</p>
      </div>
      
      <div className="leadership-item">
        <h4>Team Development & Mentoring</h4>
        <p>Proven track record of growing engineering teams from junior to senior levels. Expert in establishing TypeScript best practices, conducting code reviews, implementing testing strategies, and fostering a culture of continuous learning and technical excellence.</p>
      </div>
      
      <div className="leadership-item">
        <h4>Open Source Contributions</h4>
        <p>Active contributor to the TypeScript ecosystem with multiple open-source projects. Experience with RxJS, Effect-TS, and functional programming libraries. Committed to knowledge sharing and advancing the broader development community.</p>
      </div>
    </div>
  </div>
);

export const SectionLeadership = () => (
  <Section 
    icon="star" 
    title="Leadership & Experience" 
    description={description} 
  />
);
