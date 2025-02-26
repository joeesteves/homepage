import "./App.scss";
import { Header } from "./components/header";
import { SectionProfile } from "./components/sections/profile";
import { SectionStack } from "./components/sections/stack";

function App() {
  return (
    <div className="main-container">
      <Header />
      <SectionProfile />
      <SectionStack />
    </div>
  );
}

export default App;
