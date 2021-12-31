import fs from 'fs'

import Link from 'next/link'

import Container from '../Components/Container'

export default function Home({posts}) {
    return (
        <Container>
            <div className='grid grid-cols-3 gap-3'>

            {posts.skills.map(skill => (
                <div className="p-4 border border-2 border-slate-400 rounded-xl  text-blue-800 font-bold text-md py-5 px-3 text-center hover:border-teal-400 hover:shadow cursor-pointer">
                    {skill}
                </div>
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