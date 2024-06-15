export default function CardProject({ project }) {

    const {id, title, imgs, descripcion, url, tecnologias} = project

    return (
        <div className="project-item" >

            <div className="project-img">
                <img src={`/img/projects/${imgs[0]}`} alt="" />
            </div>

            <div className="project-items-info">

                <div className="project-info">
                    <h5>{title}</h5>
                    <ul>
                        <li>
                            <img src="/img/svgs/java-svgrepo-com.svg" alt="" />
                            <p>JavaFX</p>
                        </li>
                        <li>
                            <img src="/img/svgs/mysql-svgrepo-com.svg" alt="" />
                            <p>MySQL</p>
                        </li>
                    </ul>
                    <p>{descripcion}</p>
                </div>

                <div className="project-links">
                    <a className="main-btn" href="#">GitHub<img src="img/svgs/mysql-svgrepo-com.svg" alt="" /></a>
                </div>

            </div>

        </div>
    )
}