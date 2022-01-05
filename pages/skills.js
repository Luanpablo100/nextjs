import fs from 'fs'

import Link from 'next/link'

import Container from '../Components/Container'

export default function Home({posts}) {
    return (
        <Container>
            <h1 className='font-bold text-4xl mb-3'>Habilidades</h1>
            <div className='md:flex'>
                <div className='text-center mr-2'>
                    <h2 className='font-bold text-2xl'>Desenvolvimento</h2>
                    <div id='development' className='border-2 border-green-400 rounded py-2 pl-2 pr-10 m-3 shadow-md text-left'>
                        <ul className='flex flex-col'>
                            {posts.skills.development.map(skill => (
                                <li className='my-1 font-bold'>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <h2 className='font-bold text-2xl'>Idiomas</h2>

                    <div id='languages' className='border-2 border-yellow-400 rounded py-2 pl-2 pr-10 m-3 shadow-md text-left'>
                        <ul className='flex flex-col'>
                            {posts.skills.languages.map(skill => (
                                <li className='my-1 font-bold'>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='text-center ml-2'>
                    <h2 className='font-bold text-2xl'>Redes de computadores</h2>
                    <div id='network' className='border-2 border-sky-400 rounded py-2 pl-2 pr-10 m-3 shadow-md text-left'>
                        <ul className='flex flex-col'>
                            {posts.skills.network.map(skill => (
                                <li className='my-1 font-bold'>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <h2 className='font-bold text-2xl'>Outros</h2>
                    <div id='others' className='border-2 border-orange-400 rounded py-2 pl-2 pr-10 m-3 shadow-md text-left'>
                        <ul className='flex flex-col'>
                            {posts.skills.others.map(skill => (
                                <li className='my-1 font-bold'>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Link href={'/'}><a className="text-teal-900 font-bold text-xl hover:underline underline-offset-2">Voltar</a></Link>
      </Container>
      )
}

export async function getStaticProps(context) {
    const posts = JSON.parse(fs.readFileSync('./posts/posts.json', 'utf8'))
    return {
      props: {posts},
    }
  }