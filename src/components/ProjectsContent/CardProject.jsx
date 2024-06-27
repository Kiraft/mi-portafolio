export default function CardProject({ project }) {

    const {id, title, imgs, descripcion, url, tecnologias} = project

    return (
        <div className="group bg-[#07131d] flex flex-col items-center relative rounded-[20px] overflow-hidden" >
            <a href="">
                <img src={`/img/projects/${imgs[0]}`} alt="" className="w-[800px]" />

                <div className="group-hover:block hidden project-items-info absolute top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-25 backdrop-blur-sm ">
                    <div className="w-[100%] h-[100%] pl-[20px] flex items-end">
                        <div className="">
                            <h5 className="text-left  mt-[10px] mb-[10px] text-4xl font-bold">{title}</h5>
                            <p className="mt-[15px] mb-[15px] text-2xl">{descripcion}</p>
                            <ul className="flex gap-[20px] justify-start mt-[10px] mb-[10px]">
                                <li className=" bg-[#091A28] list-none  rounded-[20px] py-[12.5px] px-[35px] flex">
                                    <p className="m-0">JavaFX</p>
                                </li>
                                <li className=" bg-[#091A28] list-none  rounded-[20px] py-[12.5px] px-[35px] flex">
                                    <p className="m-0 ">MySQL</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}