export default function MainContent() {
    return (
        <div className="my-[150px] pl-[30px] flex w-[100%] flex-row max-lg:flex-col ">
            <div className="flex justify-center items-center flex-1 h-[300px]">
                <img src="/img/logo/me.png" alt="" className="w-[400px] rounded-full object-cover"/>
            </div>
            <div className="flex items-center justify-center flex-1 h-[300px]">
                <div className="max-lg:items-center flex gap-[10px] flex-col items-start text-left w-[100%]">
                    <h1 className="text-[70px] m-0">JONATHAN MONROY</h1>
                    <h2 className="text-4xl font-bold">Desarrollador Web FullStack</h2>
                    <p className="text-2xl w-[700px]">Desarrollador con 4 años de experiencia, egresado del Tecnológico Nacional de México en la carrera de Ingeniería en Sistemas Computacionales. Autodidacta y apasionado por aprender cosas nuevas en el mundo del desarrollo de software.</p>
                    <div className="mt-[20px]">
                        <a className="w-[fit-content] inline-block mr-[35px] py-[12.5px] px-[35px] rounded-[20px] border-[2px] border-solid border-white" href="#">Descargar CV</a>
                        <a className="w-[fit-content] inline-block py-[12.5px] px-[35px] rounded-[20px] border-[2px] border-solid border-white" href="#">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )

}