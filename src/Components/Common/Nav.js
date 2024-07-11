import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';

const Nav = () => {
    const [active, setActive] = useState('');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    useEffect(() => {
        const path = window.location.pathname;
        setActive(path.slice(1));
    }, []);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} style={{backgroundColor: 'red'}}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <img 
                        src={require('../../assets/locoroco.png')} 
                        alt="LocoRoco Logo" 
                        className='w-10'
                        />
                    <p 
                        className="font-bold text-inherit"
                        style={{color: '#f7b91e'}}
                        >Mariooooooo</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={active === 'chi_e'}>
                    <Link href="/chi_e">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={active === 'cosa_ha_fatto'}>
                    <Link href="/cosa_ha_fatto">
                        Portfolio
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={active === 'curriculum'}>
                    <Link href="/curriculum">
                        Curriculum
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem href="/chi_e" active={active === 'chi_e'}>Chi sono</NavbarMenuItem>
                <NavbarMenuItem href="/cosa_ha_fatto" active={active === 'cosa_ha_fatto'}>Portfolio</NavbarMenuItem>
                <NavbarMenuItem href="/curriculum" active={active === 'curriculum'}>Curriculum</NavbarMenuItem>
            </NavbarMenu>
        </Navbar>

    )
};



export default Nav;

