import Head from 'next/head'
import Link from 'next/link'

import fs from 'fs'

export default function Home({posts}) {
  return (

    
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Portifólio - Luan Oliveira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

      <img src='https://github.com/Luanpablo100.png' alt='Luan Oliveira Profile' className='rounded-full h-44'/>

      <h1>Luan Oliveira</h1>
          <h3>{posts.description}</h3>

          <h2>Here are some of my projects.</h2>
        <div className='grid grid-cols-4 gap-2'>
          
          {posts.posts.map(item => (
            <Link href={`/${item.name}`} key={item.name}>
              <a>
                <div className='p-4 bg-gray-500 rounded text-white'>
                  {item.name}
                </div>
              </a>
            </Link>
          ))}
          
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  const posts = JSON.parse(fs.readFileSync('./posts/posts.json', 'utf8'))
  return {
    props: {posts},
  }
}
