import * as style from "./style.jsx"

export default function Form() {
    return (
        <style.form>
            <style.labelEmail htmlFor='email'>
                Email:
                <style.inputEmail/>
            </style.labelEmail>
            <style.labelPassword htmlFor='password'>
                Senha:
                <style.inputPassword/>
            </style.labelPassword>
            <style.inputBtn/>
        </style.form>
    )
}