import styled from "styled-components";

export const Hamburguer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    div{
        padding: 5px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        background-color: white;
        border: 1px solid #ed8cd4;
        border-radius: 10px;
        font-size: 15px;
        font-family: "Inria Serif",serif;
    }

    a:hover{
        color: #d95e97;
    }

`