
import Header from "./components/Header/Header";
import CardProject from "./components/CardProject/CardProject";
import MainContent from "./components/MainContent/MainContent";
import { projects } from "./data/projectsData"

function App() {

  return (
    <>
      <Header />

      <main>
        <MainContent />
        <h1>Proyectos</h1>
        <div className="container-projects">

          {projects.map( (project) => (
            <CardProject key = {project.id} project = {project} />
          ))}
         
        </div>

        <h1>Habilidades</h1>
        <div className="container-stack">
          <ul>
            <li>
              <div>

              </div>
            </li>
          </ul>
        </div>

        <h1>Contacto</h1>
        <div className="container-stack">
          <ul>
            <li>
              <div>

              </div>
            </li>
          </ul>
        </div>

        <footer className="contaner-footer">
          <div className="footer-social">
            <ul>
              <li><a href="#"> Twitter</a></li>
              <li><a href="#"> Facebook</a></li>
              <li><a href="#"> Github</a></li>
              <li><a href="#"> Instagram</a></li>
              <li><a href="#"> Youtube</a></li>
            </ul>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
