import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Maralu company web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10'>
        <section className='bg-sky-700 h-screen'>
        <nav className='p-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons'>Maralu</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
            </li>
            <li>
            <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Kontaktujte nas</a>
            </li>
            <li></li>
            <li></li>
          </ul>
        </nav>
        <div className='text-center p-10 py-10'>
          <h2 className='text-lg'> NAJLEPŠIA AUTODOPRAVA A ÚČTOVÍCTVOV TRENČIANSKOM KRAJI </h2>
           <h1 className='text-5xl'>Autodoprava & Účtovníctvo</h1>
           <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Objednat</a>
        </div>
        <div>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube /> 
        </div>

        </section>
      </main>
    </div>
  );
}