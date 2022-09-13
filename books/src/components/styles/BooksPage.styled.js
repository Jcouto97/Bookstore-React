import styled from 'styled-components';

//book grid

export const Books_Container = styled.div`

`

export const Book_Grid = styled.div`
    margin: 80px 80px;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fit, 200px);
    justify-items: center;
    align-content: space-between;
    row-gap: 40px;
    column-gap: 90px;
`