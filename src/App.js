import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutMe } from './components/AboutMe';
import { ProjectsPage } from './components/ProjectsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<><Banner /><Skills /><Projects /><Contact /></>} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
