import "./App.scss";
import { Header } from "./components/header";
import { SectionProfile } from "./components/sections/profile";
import { SectionHardSkills } from "./components/sections/hardSkills";
import { SectionSoftSkills } from "./components/sections/softSkills";

function App() {
  return (
    <div className="main-container">
      <Header />
      <SectionProfile />
      <SectionHardSkills />
      <SectionSoftSkills />
    </div>
  );
}

export default App;
