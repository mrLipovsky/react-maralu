import Head from "next/head";
import { FaHamburger } from "react-icons/fa";
// import Script from 'next/script';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maralu company web</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="../script/script.js"></script>

        {/* <Script src="../script/script.js" /> */}
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40">
      
        <section className="bg-sky-700 h-screen">
          <div className="text-2xl flex justify-center gap-16 py-3 text-gray-100">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>

          <nav className="p-10 mb-12 flex justify-between items-center">
            <h1 className="text-2xl font-burtons text-white">Maralu s.r.o.</h1>
            <span className='md:hidden block'>
                <FaHamburger name="menu" onclick='Menu(this)' className="text-white cursor-pointer text-4xl"/>
            </span>
            <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white md:bg-sky-700 md: w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ">
              <li className=" mx-4 my-6 md:my-0">
                <a className=' text-black md:text-white px-4 py-2 rounded-md ml-8' href="#">Autodoprava</a>
              </li>
              <li className=" mx-4 my-6 md:my-0">
                <a className=' text-black md:text-white px-4 py-2 rounded-md ml-8' href="#">Uctovnictvo</a>
              </li>
              <li className=" mx-4 my-6 md:my-0">
                <a className=' text-black md:text-white px-4 py-2 rounded-md ml-8' href="#">O Nas</a>
              </li>
              <li className=" mx-4 my-6 md:my-0">
                <a className=' text-black md:text-white px-4 py-2 rounded-md ml-8' href="#">Kontakt</a>
              </li>
              <li className=" mx-4 my-6 md:my-0">
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white md:text-black px-8 py-2 rounded-md ml-8"
                  href="#">
                  Objednat
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10 leading-10">
            <h2 className="text-lg">
              {" "}
              NAJLEPŠIA AUTODOPRAVA A ÚČTOVÍCTVOV TRENČIANSKOM KRAJI{" "}
            </h2>
            <h1 className="text-5xl">Autodoprava & Účtovníctvo</h1>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-2 rounded-md scroll-m-10 my-40"
              href="#"
            >
              Objednat
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden ">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1"> Autodoprava </h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              <span className="text-yellow-500">Je</span> Slovenská prepravná
              spoločnosť(Autodoprava) so špecializáciou na malú dopravu, ktorá
              ponúka svoje služby súkromníkom ale aj firmám a stále sa úspešne
              rozširuje a zlepšuje. Okrem dopravy zabezpečuje množstvo ďalších
              služieb pre naších zákazníkov.
            </p>
            <h3 className="text-3xl py-1"> Účtovníctvo </h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              <span className="text-yellow-500">Je</span> Slovenská prepravná
              spoločPredmetom účtovníctva je aj vykazovanie skutočností o
              účtovných prípadoch a vykazovanie aktív a pasív v účtovnej
              závierke. Spravodlivo fakturujeme vykonané práce podľa skutočného
              počtu zúčtovaných položiek a vypracovaných výkazo. Ponúkame
              zodpovednosť za dodržanie zákonom stanovených termínov a lehôt.
              Vaša starosť je robiť biznis, naša starosť je rozsah, spôsob a
              preukázateľnosť účtovníctva spoľahlivo, podľa platnej legislatívy.
            </p>
          </div>
          <div>
            <div>
              <Image src={web1}/>
            </div>
            <div>
              <Image src={web2}/>
            </div>
            <div>
              <Image src={web3}/>
            </div>
            <div>
              <Image src={web4}/>
            </div>
            <div>
              <Image src={web5}/>
            </div>
          </div>


        </section>
      </main>
    </div>

  );
}
