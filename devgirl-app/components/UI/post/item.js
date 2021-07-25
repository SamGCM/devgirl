import * as style from './style'
import Image from 'next/dist/client/image'
import imgProfile from './images/imgProfile.jpeg'

import iconComment from './images/chat.svg'
import iconLike from './images/heart-fill.svg'
import iconShare from './images/share.svg'


export default function ItemPost(){

    const navItems = [iconLike, iconComment, iconShare]



    return(
        <style.flexBox>
            <style.container>
                <style.containerImg>
                    <Image
                        src={imgProfile}
                        width={80}
                        height={100}
                        alt={`Image profile`}
                        objectFit={'layout:"responsive"'}
                    />
                </style.containerImg>
                <style.userName>Fernando</style.userName>
            </style.container>
            <style.containerTxt>
                <style.titlePost>
                    A importância de uma boa base na Programação
                </style.titlePost>
                <style.descriptionPost>
                Lorem ipsum lacinia ad egestas tellus, imperdiet sem pretium purus. Lorem ipsum lacinia ad egestas tellus, imperdiet sem prasas.
                </style.descriptionPost>
                <nav>
                    <style.ul>
                        {navItems.map((item, index) =>{
                            return <style.li key={index}>
                                <Image
                                    src={item}
                                    width={30}
                                    height={30}
                                    alt={'Icone'}
                                    objectFit={'layout:"responsive"'}
                                />
                            </style.li>
                        })}
                    </style.ul>
                </nav>
            </style.containerTxt>
        </style.flexBox>
    )
}