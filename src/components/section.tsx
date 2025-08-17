import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBoxesStacked,
  faDroplet,
  faUser,
  faWrench,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { JSX } from "react";

const availableIcons = {
  github: faGithub,
  user: faUser,
  stack: faBoxesStacked,
  wrench: faWrench,
  droplet: faDroplet,
  star: faStar,
};

export const Section = (props: {
  icon?: keyof typeof availableIcons;
  title: string;
  hierarchy?: number;
  description: JSX.Element | string;
}) => {
  const hierarchy = props.hierarchy || 1;

  return (
    <div className="section">
      <div className="section__header">
        {props.icon && <FontAwesomeIcon icon={availableIcons[props.icon]} />}
        <div className="section__title">
          {renderTitle({ title: props.title, hierarchy })}
        </div>
      </div>
      {props.description}
    </div>
  );
};

const renderTitle = ({
  title,
  hierarchy,
}: {
  title: string;
  hierarchy: number;
}) => {
  switch (hierarchy) {
    case 2:
      return <h3>{title}</h3>;
    default:
      return <h2>{title}</h2>;
  }
};
