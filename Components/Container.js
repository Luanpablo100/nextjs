import Head from "next/head"

export default function Container({children}) {
    return (
        <>
            <Head>
                <title>Portifólio - Luan Oliveira</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 text-justify w-full flex-1 md:px-20">
                {children}
            </div>
        </>
    )
}