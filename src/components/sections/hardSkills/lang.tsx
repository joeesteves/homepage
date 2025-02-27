import { Section } from "../../section";
import elixir from "@assets/elixir.webp";
import ruby from "@assets/ruby.png";
import ts from "@assets/ts.webp";
import js from "@assets/js.webp";
import haskell from "@assets/haskell.png";

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
