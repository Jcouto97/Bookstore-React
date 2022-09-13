import styled from 'styled-components';

export const Book_Details_Container = styled.div`
    padding: 60px;
    display: flex;
    justify-content: center;
    gap: 50px;
    font-family: "Inria Serif", serif;

    h1{
    background: linear-gradient(94.99deg, #b65667 -3.88%, #ea2eff 120.78%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: "Inria Serif", serif;
    font-size: 28px;
    }

    h3{
        font-weight: 400;
    }
`

export const Book_Image = styled.div`
    padding: 20px;
    background: linear-gradient(160.7deg, #ea5470 0%, #da79e5 100%);
`

export const Book_Data = styled.div`
    padding: 20px;
    background-color: #F0F0F0;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    width: 30%;
    a{
        display: flex;
        gap: 10px;
        margin-top: auto;
        align-items: center;
        img{
            height: 25%;
        }
    }
`