import Container from "../../Components/Container";
import Slider from "../../Components/Slider";

import Link from "next/link";

export default function Home() {

    // const images = [
    //     { url: "/img/switchmap/1.jpeg" },
    //     { url: "/img/switchmap/2.jpeg" },
    //     { url: "/img/switchmap/3.jpeg" },
    //     { url: "/img/switchmap/4.jpeg" },
    //     { url: "/img/switchmap/5.jpeg" },
    // ];

    return (

        <Container>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20">

                <img src='/img/glpi-inventory-control.png' alt='Luan Oliveira Profile' className=' h-44'/>

                <h1 className='text-4xl font-bold'>Glpi Inventory control</h1>
                <h3 className='max-w-xl text-justify text-xl'>Controle  seus insumos com agilidade e praticidade!</h3>

                <p className='text-xl my-4'>Para empresas que utilizam o software GLPI, que contém diversas funcionalidades para o setor de TI, para interagir por meio da API do próprio para gerenciar os insumos (ou ativos) cadastrados, adicionando ou retirando do estoque com facilidade.</p>
                <p className='text-xl my-4'>O principal objetivo é que, em três passos: autenticação, seleção e ação, o usuário possa rapidamente adicionar ou retirar os ativos do inventário.</p>
                <code className='text-xl my-4'>Ainda em desenvolvimento!</code>

                <div className=''>
                    {/* <Slider images={images}/> */}
                </div>

                <a href="https://github.com/Luanpablo100/glpi-inventory-control" className="bg-gray-900 rounded px-6 py-3 text-teal-400 hover:font-bold mt-5" target={'_blank'}>Repositório</a>
                <div className=" text-left w-1/3">
                    <Link href={'/projects'}><a className="text-teal-900 font-bold text-xl hover:underline underline-offset-2">Voltar</a></Link>
                </div>
            </main>
        </Container>
    )
}