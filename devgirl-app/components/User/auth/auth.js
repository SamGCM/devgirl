import * as style from './auth.jsx'
import Image from 'next/image'
import Link from 'next/link'

import github from './images/github.svg'
import google from './images/google.svg'
import apple from './images/apple.svg'



export default function Auth(){

    
    return(
        <style.container>
            {/* Adicionar tag link */}
            <Image   
                src={github} 
                alt={`Icon for auth github`} 
                width={50} 
                height={50}/>
            <Image   
                src={google} 
                alt={`Icon for auth google`} 
                width={50} 
                height={50}/>
            <Image   
                src={apple} 
                alt={`Icon for auth apple`} 
                width={50} 
                height={50}/>
        </style.container>
    )
}