import * as style from './transparent'

export default function Button({children, href}){
    return(
        <style.btn href={href}>
            {children}
        </style.btn>
    )
}