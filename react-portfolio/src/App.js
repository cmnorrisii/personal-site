import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="site-body">
      <Header />
      <AboutMe />
      <TechStack />
      <Projects />
    </div>
  );
}

export default App;
