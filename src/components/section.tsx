import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const availableIcons = {
  github: faGithub,
  user: faUser,
};
export const Section = (props: {
  icon: keyof typeof availableIcons;
  title: string;
  description: string;
}) => {
  return (
    <div className="section">
      <div className="section__header">
        <FontAwesomeIcon icon={availableIcons[props.icon]} />
        <h2>{props.title}</h2>
      </div>
      <p>{props.description}</p>
    </div>
  );
};
