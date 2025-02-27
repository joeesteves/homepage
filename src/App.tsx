import "./App.scss";
import { Header } from "./components/header";
import { SectionProfile } from "./components/sections/profile";
import { SectionHardSkills } from "./components/sections/hardSkills";

function App() {
  return (
    <div className="main-container">
      <Header />
      <SectionProfile />
      <SectionHardSkills />
    </div>
  );
}

export default App;
