
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Contact from "./components/ContactContent/Contact";
import ProjectsContent from "./components/ProjectsContent/ProjectContent";

function App() {

  return (
    <div className="bg-[#091A28] text-[white]">

      <Header />

      <main className=" max-w-[1500px] m-auto">
    
        <MainContent />

        <ProjectsContent/>

        {/* <Contact/> */}
      </main>
        <footer className="flex justify-center mt-[100px]">
          <div className="footer-social">
            <ul className="flex gap-[10px]">
              <li><span>Construido por</span></li>
              <li><a href="#"> Jonathan Osvaldo</a></li>
              <li><span>con</span></li>
              <li><a href="https://react.dev/"> ReactJS</a></li>
            </ul>
          </div>
        </footer>
    </div> 
  )
}

export default App
