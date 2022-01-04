import Container from "../../Components/Container";

import Image from "next/image";

import Link from "next/link";

export default function Home() {
    return (

        <Container>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20">

                <Image src={'/img/next-planetscale.png'} width={200} height={200}/>

                <h1 className='text-4xl font-bold'>Next + Planetscale</h1>
                <h3 className='max-w-xl text-justify text-2xl'>Um app utilizando Planetscale, o banco de dados SQL em nuvem, escalável e feito para desenvolvedores.</h3>
                <p className="max-w-xl text-justify text-xl mt-2">Uma simples lista de tarefas, com alta disponibilidade, otimizada e feita usando um conjunto de tecnologias javascript.</p>

                <h2 className='text-xl my-4'>Como funciona?</h2>
                <div className="flex mt-3">
                    <div className="animate-bounce">
                        <a href="https://luanpablo100-planetscale.vercel.app" className="rounded px-6 py-3 text-white font-bold mx-2 bg-gradient-to-br from-indigo-500 to-orange-500" target={'_blank'}>Aplicação</a>
                    </div>
                    <div>
                        <a href="https://github.com/Luanpablo100/next-prisma-planetscale" className="bg-gray-900 rounded px-6 py-3 text-teal-400 hover:font-bold mx-2" target={'_blank'}>Repositório</a>
                    </div>
                </div>
                <div className=" text-left w-1/3  mt-4">
                    <Link href={'/projects'}><a className="text-teal-900 font-bold text-xl hover:underline underline-offset-2">Voltar</a></Link>
                </div>
            </main>
        </Container>
    )
}