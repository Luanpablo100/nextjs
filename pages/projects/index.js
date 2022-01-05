import fs from 'fs'
import Link from 'next/link'
import Image from 'next/image'

import Container from '../../Components/Container'

export default function Home({posts}) {
    return (
        <Container>
            <h1 className='font-bold text-4xl mb-3'>Projetos</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>

            {posts.posts.map(item => (
            <Link href={`/projects/${item.name}`} key={item.name}>
                <div className='flex flex-col items-center justify-center border rounded-md py-2 px-3 cursor-pointer shadow hover:shadow-md'>
                    <Image src={`/img/${item.name}.png`} width={70} height={70}/>
                    <h2>{item.name}</h2>
                </div>
            </Link>
        ))}
            <a href='https://github.com/Luanpablo100' target={'_blank'}>
                <div className='flex flex-col items-center justify-center border rounded-md py-2 px-3 cursor-pointer shadow hover:shadow-md'>
                    <Image src={`/img/Github.png`} width={70} height={70}/>
                    <h2>Meu Github</h2>
                </div>
            </a> 
            </div>
            <div className='mt-4'>
                <Link href={'/'}><a className='text-teal-900 font-bold text-xl'>Voltar</a></Link>
            </div>
      </Container>
    )
}

export async function getStaticProps(context) {
    const posts = JSON.parse(fs.readFileSync('./posts/posts.json', 'utf8'))
    return {
      props: {posts},
    }
  }
  