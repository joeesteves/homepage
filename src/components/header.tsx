import profileLogo from "../assets/profile.jpg";

export const Header = () => (
  <div className="header">
    <img src={profileLogo} className="logo" alt="Profile logo" />
    <h1>Joe Esteves {`=>`}</h1>
    <h5>Software Developer</h5>
  </div>
);
