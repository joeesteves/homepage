import { Section } from "../section";
import profileLogo from "../../assets/profile.jpg";

const Stack = (props: { name: string; img: string }) => (
  <>
    <div className="stack">
      <img src={props.img} alt={props.name} />
      <p>{props.name}</p>
    </div>
  </>
);

const description = (
  <>
    <Stack name="Elixir" img={profileLogo} />
  </>
);

export const SectionStack = () => (
  <Section icon={"stack"} title="Stack" description={description} />
);
