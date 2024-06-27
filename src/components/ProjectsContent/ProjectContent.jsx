import { projects } from "../../data/projectsData"
import CardProject from "./CardProject";

export default function ProjectsContent() {
    return (
        <>
            <h1 className="text-[40px] text-left my-[25px]" id="section-projects">Proyectos</h1>
            <div className="container-projects">

                {projects.map((project) => (
                    <CardProject key={project.id} project={project} />
                ))}

            </div>
        </>
    )

}