import Container from '../Components/Container'

import Link from 'next/link'

export default function Home() {
    return (
        <Container>
            <h1 className='font-bold text-4xl mb-3'>Carreira</h1>
            <div className='md:flex'>
                <div>
                    <h2>Formação Acadêmica</h2>
                    <ul>
                        <li>
                            <h3>Ensino Médio</h3>
                            <p>Escola Estadual Professor Ruy Alencar - 2020</p>
                        </li>
                        <li>
                            <h3>Ensino Superior</h3>
                            <p>Redes de Computadores - Universidade Estácio de Sá</p>
                            <p>2022-2025</p>
                        </li>
                    </ul>
                    <h2>Cursos</h2>
                    <ul>
                        <li>
                            <h3>Técnico em Informática - SENAC</h3>
                            <p>Novembro 2019 - Agosto 2021</p>
                        </li>
                        <li>
                            <h3>Desenvolvedor FullStack JS - IGTI</h3>
                            <p>Novembro 2020 - Janeiro 2021</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Experiência Profissional</h1>
                    <ul>
                        <li>
                            <h3>Aprendiz de T.I - Atack Hiperatacado</h3>
                            <p></p>
                            <p>Agosto 2018 - Novembro 2020</p>

                        </li>
                        <li>
                            <h3>Estagiário de T.I - Atack Hiperatacado</h3>
                            <p></p>
                            <p>Janeiro de 2021 - Atualmente</p>
                        </li>
                    </ul>
                </div>
            </div>
            <Link href={'/'}><a className="text-teal-900 font-bold text-xl hover:underline underline-offset-2">Voltar</a></Link>
        </Container>
    )
}