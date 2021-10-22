import styled from "styled-components";


export const form = styled.form.attrs({ 
  method: 'POST'
})`
  display: flex;
  flex-direction: column;
`

export const labelName = styled.label`
    font-size: 2rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    margin-top: 3.5rem;
`

export const inputName = styled.input.attrs({ 
    type: 'text',
    name: 'name'
  })`
    background: rgb(255,255,255,26%);
    outline: none;
    border: none;
    border-radius: 20px;
    margin-top: 1rem;
    width: 50rem;
    height: 5rem;
    font-size: 3rem;
    color: #fff;
    text-align: center;
`

export const labelEmail = styled.label`
    font-size: 2rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    margin-top: 3.5rem;
`

export const inputEmail = styled.input.attrs({ 
    type: 'text',
    name: 'email'
  })`
    background: rgb(255,255,255,26%);
    outline: none;
    border: none;
    border-radius: 20px;
    margin-top: 1rem;
    width: 50rem;
    height: 5rem;
    font-size: 3rem;
    color: #fff;
    text-align: center;
`

export const labelPassword = styled.label`
    font-size: 2rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    margin-top: 3.5rem;
`

export const inputPassword = styled.input.attrs({ 
    type: 'text',
    name: 'senha'
  })`
    background: rgb(255,255,255,26%);
    outline: none;
    border: none;
    border-radius: 20px;
    margin-top: 1rem;
    width: 50rem;
    height: 5rem;
    font-size: 3rem;
    color: #fff;
    text-align: center;
`

export const inputBtn = styled.input.attrs({ 
    type: 'submit',
    value: 'Criar'
  })`
    background: #18A0FB;
    color: #fff;
    font-size: 3rem;
    border-radius: 30px;
    padding: 0.25rem 1rem;
    width: 12rem;
    height: 5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    position: relative;
    align-self: center;
    cursor: pointer;
`
