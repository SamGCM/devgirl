import styled from "styled-components";

export const container = styled.div`
    width: 90vw;
    height: 70.6rem;
    background: rgb(11,11,11, 36%);
    border-radius: 50px;
    position: absolute;
`

export const nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    height: 8rem;
    border-bottom: 2px solid rgba(255, 255, 255, 0.56);
`
export const navbar = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 25rem;
    align-items: center;
    margin-right: 3rem;
`

export const nameUser = styled.li`
    font-weight: bold;
    font-size: 2rem;
`

export const containerImg = styled.div`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 5rem;
    height: 5rem;
` 

export const menu = styled.div`
    width: 30vw;
    height: 62.5rem;
    border-right: 2px solid rgba(255, 255, 255, 0.56);
    border-bottom-left-radius: 50px;
`

export const ul = styled.ul`
    font-weight: 300;
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
    position: relative;
    top: 8rem;
`

export const li = styled.li`
    font-weight: normal;
    font-size: 2.2rem;
    color: #fff;
    margin: 1rem 3rem;
`
