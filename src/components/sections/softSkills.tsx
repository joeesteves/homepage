import { Section } from "../section";
import { Stack } from "../stack";

const description = (
  <div className="section__description">
    <Stack name="Technical Leadership" />
    <Stack name="Team Management" />
    <Stack name="Code Architecture" />
    <Stack name="Mentoring & Coaching" />
    <Stack name="Strategic Planning" />
    <Stack name="Cross-functional Collaboration" />
    <Stack name="Agile Methodologies" />
    <Stack name="Performance Optimization" />
  </div>
);
export const SectionSoftSkills = () => (
  <Section icon={"droplet"} title="Soft Skills" description={description} />
);
