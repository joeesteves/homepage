import { Section } from "../section";
import { SectionFrameworks } from "./hardSkills/frameworks";
import { SectionLang } from "./hardSkills/lang";
import { SectionOtherTools } from "./hardSkills/otherTools";

export const SectionHardSkills = () => (
  <Section
    icon={"wrench"}
    title="Hard Skills"
    description={
      <div className="section__description">
        <SectionLang />
        <SectionFrameworks />
        <SectionOtherTools />
      </div>
    }
  />
);
