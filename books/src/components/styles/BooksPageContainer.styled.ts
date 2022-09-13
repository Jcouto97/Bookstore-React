import styled from "styled-components";

export const BooksPage_Container = styled.div`
      display: grid;
        grid-gap: 20px;
        /* estou a dar grid entre a side bar e a grid dos books 
        para cada 1 espaço da sidebar tenho 6 para os books*/
        grid-template-columns: 1fr 4fr;
` 