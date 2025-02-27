import { Section } from "../section";

const description = (
  <div className="section__description">
    Full-Stack Software developer with more than a decade of experience. I build
    B2B solutions using Elixir and Phoenix. I also handle Ruby on Rails, MEAN
    Stack, and ReactJS. I've worked for several years on a Ruby on Rails
    start-up integrating a global team. I feel comfortable working remote and
    async. In my soft software shop, I have to deal with all the parts involved
    in software development, design, code, test, and deployment. I know how to
    ship software. I choose Elixir + Phoenix for new projects. Deploy on
    Kubernets when possible I'm a blockchain enthusiast
  </div>
);

export const SectionProfile = () => (
  <Section icon={"user"} title="Summary" description={description} />
);
