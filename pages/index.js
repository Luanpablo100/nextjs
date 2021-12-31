import Link from 'next/link'

import fs from 'fs'
import Container from '../Components/Container'

export default function Home({posts}) {
  return (

    
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <Container>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20">

      <img src='https://github.com/Luanpablo100.png' alt='Luan Oliveira Profile' className='rounded-full h-44'/>

      <h1 className='text-4xl font-bold'>Luan Oliveira</h1>
          <h3 className='max-w-xl text-justify text-xl'>{posts.description}</h3>

          <h2 className='text-xl my-4'>Here you can check something i have done.</h2>

        <div className='grid grid-cols-3 gap-3'>
          <Link href={'/projects'}><a>Projects</a></Link>
          <Link href={'/skills'}><a>Skills</a></Link>
          {/* <Link href={'/projects'}><a>Projects</a></Link> */}
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
