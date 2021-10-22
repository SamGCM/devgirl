import * as style from "./style"
import Button  from "../../buttons/btnTransparent"
import Image from "next/dist/client/image"
import iconEdit from './images/edit.svg'
import ItemPost from "../post/item"

export default function Feed(){
    return(
        <style.container>
            <Button href='#'>
                <Image
                src={iconEdit}
                width={35}
                height={35}/>
                Novo Post
            </Button>
            <ItemPost/>
        </style.container>
    )
}