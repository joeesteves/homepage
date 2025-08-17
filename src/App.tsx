import "./App.scss";
import { Header } from "./components/header";
import { SectionProfile } from "./components/sections/profile";
import { SectionLeadership } from "./components/sections/leadership";
import { SectionHardSkills } from "./components/sections/hardSkills";
import { SectionSoftSkills } from "./components/sections/softSkills";

function App() {
  return (
    <div className="main-container">
      <Header />
      <SectionProfile />
      <SectionLeadership />
      <SectionHardSkills />
      <SectionSoftSkills />
    </div>
  );
}

export default App;
