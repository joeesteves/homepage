import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBoxesStacked, faUser } from "@fortawesome/free-solid-svg-icons";
import { JSX } from "react";

const availableIcons = {
  github: faGithub,
  user: faUser,
  stack: faBoxesStacked,
};
export const Section = (props: {
  icon: keyof typeof availableIcons;
  title: string;
  description: JSX.Element | string;
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
