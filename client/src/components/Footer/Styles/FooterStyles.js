import styled from 'styled-components'

export const Container = styled.div`
    padding: 50px 60px;
    background: linear-gradient(to right, rgba(138, 117, 114, 0.2) 0%, rgba(112,130,110,0.5) 100% );
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1100px;
    margin # auto;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    // padding: 20px;
    @media (max-width: 620px) {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        display: grid;
        justify-content: space-evenly;
        grid-gap: 30px;
        padding-left: 20px;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const Link = styled.div`
    font-size: 20px;
    padding-bottom: 5px;

    &:hover {
        color: rgb(138, 117, 114);
        transition: 200ms ease-in;
    }

    @media (max-width: 620px) {
        font-size: 16px
    }

`

export const Title = styled.div`
    font-size: 25px;
    font-weight: bold;

    @media (max-width: 620px) {
        font-size: 20px
    }
`