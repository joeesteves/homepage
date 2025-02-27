import { Section } from "../section";
import { SectionFrameworks } from "./hardSkills/frameworks";
import { SectionLang } from "./hardSkills/lang";

export const SectionHardSkills = () => (
  <Section
    icon={"wrench"}
    title="Hard Skills"
    description={
      <>
        <SectionLang />
        <SectionFrameworks />
      </>
    }
  />
);
