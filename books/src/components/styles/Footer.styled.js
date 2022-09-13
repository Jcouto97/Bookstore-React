import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: #f6f6f6;
    /* recebe prop do footer para fazer conditional rendering se é absoluto na pag ou n */
    position: ${(props) => (props.isFooterAbsolute ? 'absolute' : 'relative')};
    left: 0;
    right: 0;
    bottom: 0;

    //870px para nao aparecer footer a meio da pagina qd ela diminui
    @media (max-width: 870px){
    position: absolute;
    }
`

export const Footer_Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Footer_Text = styled.div`
    background: linear-gradient(94.99deg, #ea5470 -3.88%, #da79e5 120.78%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 12px;
    font-family: 'Inria Serif', serif;
`

export const Footer_Images = styled.div`
    display: flex;
    gap: 20px;
    height: 20px
`