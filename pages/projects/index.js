import fs from 'fs'
import Link from 'next/link'

import Container from '../../Components/Container'

export default function Home({posts}) {
    return (
        <Container>
            <div className='grid grid-cols-3 gap-3'>

            {posts.posts.map(item => (
                <Link href={`/projects/${item.name}`} key={item.name}>
            <a>
                <div className="p-4 border border-2 border-slate-400 rounded-xl  text-teal-400 font-bold text-md py-10 px-6 text-center bg-gray-900 hover:border-teal-400 hover:shadow">
                {item.name}
                </div>
            </a>
            </Link>
        ))}
            </div>
            <div>
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
  