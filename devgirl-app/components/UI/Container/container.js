import * as style from './style.jsx'

export default function Container({children}){
    return(
        <style.FlexBox>
            {children}
        </style.FlexBox>
    )
}