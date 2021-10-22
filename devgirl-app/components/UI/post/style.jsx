import styled from "styled-components";

export const flexBox = styled.div`
    background: rgba(255, 255, 255, 0.26);
    width: 95%;
    height: 17rem;
    border-radius: 30px;
    display: flex;
    margin: 2.2rem 4.5rem;
    position: relative;
`

export const  container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0rem 1.5rem;
`

export const  containerTxt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0rem 1.5rem;
`

export const containerImg = styled.div`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 8rem;
    height: 8rem;
`

export const userName = styled.p`
    font-size: 2rem;
    font-weight: 500;
`

export const titlePost = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    width: 100%;
`

export const descriptionPost = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
    width: 100%;
`

export const ul = styled.ul`
    font-weight: 300;
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20rem;
    margin-right: 5rem;
    position: absolute;
    bottom: .4rem;
    right: 0;
`

export const li = styled.li`
    display: flex;
    align-items: center;
`


