import * as style from "./form.jsx"

export default function Form() {

        

    return (
        <style.form>
            <style.labelName htmlFor='name'>
                Nome:
                <style.inputName/>
            </style.labelName>
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