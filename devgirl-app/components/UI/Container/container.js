import * as style from './style'

export default function Container({children}){
    return(
        <style.FlexBox>
            {children}
        </style.FlexBox>
    )
}