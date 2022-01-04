import fs from 'fs'
import Link from 'next/link'
import Image from 'next/image'

import Container from '../../Components/Container'

export default function Home({posts}) {
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>

            {posts.posts.map(item => (
            <Link href={`/projects/${item.name}`} key={item.name}>
                <div className='flex flex-col items-center justify-center border rounded-md py-2 px-3 cursor-pointer shadow hover:shadow-md'>
                    <Image src={`/img/${item.name}.png`} width={70} height={70}/>
                    <h2>{item.name}</h2>
                </div>
            </Link>
        ))}
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
  