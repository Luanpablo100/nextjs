import Container from "../../Components/Container";

import Link from "next/link";

export default function Home() {
    return (

        <Container>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20">

                <img src='/img/switchmap.png' alt='Luan Oliveira Profile' className=' h-44'/>

                <h1 className='text-4xl font-bold'>Switchmap</h1>
                <h3 className='max-w-xl text-justify text-xl'>Where this switchport goes? I can tell you!</h3>

                <h2 className='text-xl my-4'>Switchmap is a web service to document switchports, based on the fact that in network infrastructures it is very common to have cascading, where ports connect to patch panels, and from them to sectors, with Switchmap you can know which sector the port goes.</h2>
                <a href="https://github.com/Luanpablo100/switchmap" className="bg-gray-900 rounded px-6 py-3 text-teal-400 hover:font-bold" target={'_blank'}>Repo</a>
                <div className=" text-left w-1/3">
                    <Link href={'/'}><a className="text-teal-900 font-bold text-xl">Voltar</a></Link>
                </div>
            </main>
        </Container>
    )
}