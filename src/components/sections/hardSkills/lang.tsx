import { Section } from "../../section";
import elixir from "@assets/images/badges/elixir.webp";
import ruby from "@assets/images/badges/ruby.webp";
import ts from "@assets/images/badges/ts.webp";
import js from "@assets/images/badges/js.webp";
import haskell from "@assets/images/badges/haskell.webp";

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
    <Stack name="TypeScript" img={ts} />
    <Stack name="Elixir" img={elixir} />
    <Stack name="Ruby" img={ruby} />
    <Stack name="JavaScript" img={js} />
    <Stack name="Haskell" img={haskell} />
  </div>
);

export const SectionLang = () => (
  <Section
    title="Programming Languages"
    description={description}
    hierarchy={2}
  />
);
