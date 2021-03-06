import Container from "../../Components/Container";

import Link from "next/link";

import Image from "next/image";

export default function Home() {
    return (

        <Container>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20">

                <Image src={'/img/jwt-next-auth.png'} width={180} height={180}/>

                <h1 className='text-4xl font-bold'>JWT Next Auth</h1>
                <h3 className='max-w-xl text-justify text-xl'>You can only go where I allow!</h3>

                <h2 className='text-xl my-4'>I don't even need to say how important authentications are on the web, this application uses JWT to allow access to pages.</h2>
                <a href="https://github.com/Luanpablo100/switchmap" className="bg-gray-900 rounded px-6 py-3 text-teal-400 hover:font-bold" target={'_blank'}>Repo</a>
                <div className=" text-left w-1/3">
                    <Link href={'/projects'}><a className="text-teal-900 font-bold text-xl hover:underline underline-offset-2">Voltar</a></Link>
                </div>
            </main>
        </Container>
    )
}