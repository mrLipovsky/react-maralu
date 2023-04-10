import Head from "next/head";
import Image from "next/image";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import bgtaxs from "../public/bg-taxs.jpg";

import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default function Home() {
  const [navbar, setNavBar] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Maralu company web</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <Script src="../script/script.js" /> */}
      </Head>

      <main className="bg-white dark:bg-black ">
        <NavBar/>
        
        <section className="bg-white dark:bg-black h-screen
        bg-fixed bg-cover bg-center custom-img px-10 md:px-20 lg:px-40 ">
          <div className="text-center leading-10 pt-80 ">
            <h2 className="text-lg mb-5 text-white">
              NAJLEPŠIA AUTODOPRAVA A ÚČTOVÍCTVOV TRENČIANSKOM KRAJI
            </h2>
            <h1 className="text-5xl mb-5 text-white">Autodoprava & Účtovníctvo</h1>
            <a className=" text-yellow-500 px-8 py-2 rounded-md border-solid border-2 border-yellow-500	"
              href="#">
              Objednat
            </a>
          </div>
        </section>

        <section className="bg-white h-screen dark:bg-black
        bg-fixed bg-cover bg-center px-10 md:px-20 lg:px-40">
          <div>
            <h3 className="text-3xl pt-10"> Autodoprava </h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              <span className="text-yellow-500">Je</span> Slovenská prepravná
              spoločnosť(Autodoprava) so špecializáciou na malú dopravu, ktorá
              ponúka svoje služby súkromníkom ale aj firmám a stále sa úspešne
              rozširuje a zlepšuje. Okrem dopravy zabezpečuje množstvo ďalších
              služieb pre naších zákazníkov.
            </p>
            <h3 className="text-3xl pt-10"> Účtovníctvo </h3>
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
        
        <Footer/>
        
      </main>
      <script type="text/javascript" src="../script/script.js"></script>

    </div>

  );
}
