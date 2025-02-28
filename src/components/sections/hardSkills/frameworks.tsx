import { Section } from "../../section";
import ror from "@assets/images/badges/ror.webp";
import phoenix from "@assets/images/badges/phoenix.webp";
import node from "@assets/images/badges/node.webp";
import effect from "@assets/images/badges/effect.webp";
import react from "@assets/images/badges/react.webp";
import redux from "@assets/images/badges/redux.webp";

const Stack = (props: { name: string; img: string }) => (
  <>
    <div className="stack-badge">
      <img src={props.img} alt={props.name} />
      <span>{props.name}</span>
    </div>
  </>
);

const description = (
  <div className="section__description">
    <Stack name="EffectTs" img={effect} />
    <Stack name="React" img={react} />
    <Stack name="Redux" img={redux} />
    <Stack name="Phoenix" img={phoenix} />
    <Stack name="Ruby on Rails" img={ror} />
    <Stack name="NodeJS" img={node} />
  </div>
);

export const SectionFrameworks = () => (
  <Section title="Frameworks" description={description} hierarchy={2} />
);
