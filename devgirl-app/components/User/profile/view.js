import * as style from "./style"
import Button  from "../../buttons/btnTransparent"
import Image from "next/dist/client/image"
import iconEdit from './edit.svg'
import imgProfile from './imgProfile.jpeg'

export default function ViewProfile(){
    return(
        <style.container>
            <Button href='#'>
                <Image
                    src={iconEdit}
                    width={35}
                    height={35}/>
                Editar Perfil
            </Button>
            <style.containerImg>
                <Image
                    src={imgProfile}
                    width={150}
                    height={180}
                    alt={`Image profile`}
                    objectFit={'layout:"responsive"'}
                />
            </style.containerImg>
            
        </style.container>
    )
}