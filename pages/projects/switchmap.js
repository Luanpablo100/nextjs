import Container from "../../Components/Container";
import Slider from "../../Components/Slider";

import Link from "next/link";

export default function Home() {

    const images = [
        { url: "/img/switchmap/1.jpeg" },
        { url: "/img/switchmap/2.jpeg" },
        { url: "/img/switchmap/3.jpeg" },
        { url: "/img/switchmap/4.jpeg" },
        { url: "/img/switchmap/5.jpeg" },
    ];

    return (

        <Container>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20">

                <img src='/img/switchmap.png' alt='Luan Oliveira Profile' className=' h-44'/>

                <h1 className='text-4xl font-bold'>Switchmap</h1>
                <h3 className='max-w-xl text-justify text-xl'>Não sabe para onde isso vai? Eu te mostro!</h3>

                <p className='text-xl my-4'>Switchmap é um serviço web para documentar portas de Switchs de rede, baseado na necessidade que muitas empresas com rede bem estruturada tem de saber para onde determinado cabo de rede se destina, principalmente, quando há a necessidade de manutenção.</p>
                <p className='text-xl my-4'>O aplicativo exibe uma interface onde podem ser cadastrados seguindo a estrutura Hack  Switch  Porta, cada porta pode ser definida para um setor, e receber descrições próprias ou do patch panel em caso de cascateamento.</p>
                <p className='text-xl my-4'>Devido usar o banco de dados local SQLite, o Switchmap apenas pode ser inicializado localmente, por enquanto, mas aqui estão algumas screenshots:</p>

                <div className=''>
                    <Slider images={images}/>
                </div>

                <a href="https://github.com/Luanpablo100/switchmap" className="bg-gray-900 rounded px-6 py-3 text-teal-400 hover:font-bold mt-5" target={'_blank'}>Repositório</a>
                <div className=" text-left w-1/3">
                    <Link href={'/projects'}><a className="text-teal-900 font-bold text-xl hover:underline underline-offset-2">Voltar</a></Link>
                </div>
            </main>
        </Container>
    )
}