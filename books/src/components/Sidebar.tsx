import React from 'react'
import { SidebarContainer } from './styles/Sidebar.styled';
import DirectionForm from './DirectionForm';
import FilterForm from './FilterForm';

interface ISidebarProps{
    handleDirection: (event: any) => void,
    handleFilter: (event: any) => void,
}

function Sidebar(props: ISidebarProps) {

    const { handleDirection, handleFilter } = props;

    return (
        <SidebarContainer>
            <DirectionForm handleDirection={handleDirection} />
            <FilterForm handleFilter={handleFilter} />
        </SidebarContainer>
    )
}

export default Sidebar