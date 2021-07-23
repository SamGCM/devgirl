import Link from 'next/link'
import Image from 'next/image'

import imgProfile from './imgProfile.jpeg'
import iconNotification from './notification.svg'


import * as style from './style.jsx'

export default function Layout({children}){

    const menu = ['Tutoriais', 'Dicas', 'Motivacional' , 'Estudos']


    return(
        <style.container>
            <style.nav>
                <style.navbar>
                    <li>
                        <Image 
                            src={iconNotification}
                                width={35}
                                height={35}
                                alt={`Notification Icon`}
                        />
                    </li>
                    <li>
                        <style.containerImg>
                            <Image src={imgProfile} /* VAI SER SUBSTITUIDO POR API*/
                                width={50}
                                height={70}
                                alt={`Image profile`}
                                objectFit={'layout:"responsive"'}
                            />
                        </style.containerImg>
                    </li>
                    <style.nameUser>
                        <Link href='#'>
                            <a>Fernando {/* VAI SER SUBSTITUIDO POR API */}</a>
                        </Link>
                    </style.nameUser>
                </style.navbar>
            </style.nav>
            <style.menu>
                
                <style.ul>Categorias
                    {menu.map((item, index) =>{
                        return <style.li key={index}>
                            <Link href='#'>
                                <a>{item}</a>
                            </Link>
                        </style.li>
                    })}
                </style.ul>
            </style.menu>
            {children}
        </style.container>
    )
}