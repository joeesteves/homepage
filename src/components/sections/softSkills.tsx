import { Section } from "../section";
import { Stack } from "../stack";

const description = (
  <div className="section__description">
    <Stack name="Team player" />
    <Stack name="Time managment" />
    <Stack name="Problem solving" />
    <Stack name="Critical thinking" />
    <Stack name="Self learning" />
  </div>
);
export const SectionSoftSkills = () => (
  <Section icon={"droplet"} title="Soft Skills" description={description} />
);
