import "./App.scss";
import { Header } from "./components/header";
import { SectionProfile } from "./components/sections/profile";

function App() {
  return (
    <div className="main-container">
      <Header />
      <SectionProfile />
    </div>
  );
}

export default App;
