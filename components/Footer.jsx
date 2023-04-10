import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import deved from "../public/dev-ed-wave.png";


function Footer() {
    const [footer, setFooter] = useState(true);
    return(

        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 ">
            <Image src={deved} layout="fill" objectFit="cover" />
        </div>

    )
}

export default Footer;