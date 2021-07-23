import * as style from './auth.jsx'
import Image from 'next/image'
import Link from 'next/link'
import github from './images/github.svg'
import google from './images/google.svg'
import apple from './images/apple.svg'



export default function Auth(){

    const auth = [github,google,apple]

    
    
    return(
        <style.container>
            {/* Adicionar tag link */}
            {auth.map((item, index) => {
                return <Image   
                key={index} 
                src={item} 
                alt={`Icon for auth ${item}`} 
                width={50} 
                height={50}/>
            })}
        </style.container>
    )
}