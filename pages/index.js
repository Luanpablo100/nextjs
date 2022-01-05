import Link from 'next/link'
import Image from 'next/image'

import fs from 'fs'
import Container from '../Components/Container'

export default function Home({posts}) {
  return (

    
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <Container>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20">
      <Image src={'https://github.com/Luanpablo100.png'} width={200} height={200} className='rounded-full h-44 shadow'/>

      <h1 className='text-4xl font-bold my-3'>Luan Oliveira</h1>
          <h3 className='max-w-xl text-justify text-xl'>{posts.description}</h3>

          <h2 className='text-xl my-4'>Aqui estão algumas das coisas que já fiz:</h2>

        <div className='grid grid-cols-3 gap-3'>
          <Link href={'/projects'}><a className='text-teal-400 font-bold hover:text-teal-500 hover:underline underline-offset-2 text-xl text-center'>Projetos</a></Link>
          <Link href={'/skills'}><a className='text-teal-400 font-bold hover:text-teal-500 hover:underline underline-offset-2 text-xl text-center'>Habilidades</a></Link>
          <Link href={'/career'}><a className='text-teal-400 font-bold hover:text-teal-500 hover:underline underline-offset-2 text-xl text-center'>Carreira</a></Link>
        </div>
      </main>
      </Container>
    </div>
  )
}

export async function getStaticProps(context) {
  const posts = JSON.parse(fs.readFileSync('./posts/posts.json', 'utf8'))
  return {
    props: {posts},
  }
}
