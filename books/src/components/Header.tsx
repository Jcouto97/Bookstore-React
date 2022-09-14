import React, { useEffect, useState } from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';


/*
ver posiçao onde estou, se abaixo de x renderizo componente em vez de header links -> hamburguer menu
*/

function Header() {

    //state para poder guardar window size, e ser updatable
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        //forma de captar que esta a alterar tamaho do ecra
        window.addEventListener('resize', handleWindowResize);

        return () => {
            //para remover evento
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    return (
        <>
            {
                windowSize.innerWidth <= 630 ? <HeaderMobile /> : <HeaderDesktop />

            }
        </>
    )
}

export default Header
