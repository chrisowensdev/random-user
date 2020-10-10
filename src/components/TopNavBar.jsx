import React from 'react'

import { Navbar, NavbarBrand, NavbarItem, Icon, NavbarBurger, NavbarMenu, NavbarStart, NavbarLink, NavbarDropdown, NavbarDivider, NavbarEnd} from 'bloomer';

const TopNavBar = () => {
    return (
        <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0'}}>
<NavbarBrand>
    <NavbarItem>
        RANDOM USER
    </NavbarItem>
    <NavbarItem isHidden='desktop'>
        <Icon className='fa fa-github' />
    </NavbarItem>
    <NavbarItem isHidden='desktop'>
        <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
    </NavbarItem>
    <NavbarBurger />
</NavbarBrand>
<NavbarMenu >
    <NavbarStart>
        <NavbarItem href='#/'>Home</NavbarItem>
        <NavbarItem hasDropdown isHoverable>
            <NavbarLink href='#/documentation'>Documentation</NavbarLink>
            <NavbarDropdown>
                <NavbarItem href='#/'>One A</NavbarItem>
                <NavbarItem href='#/'>Two B</NavbarItem>
                <NavbarDivider />
                <NavbarItem href='#/'>Two A</NavbarItem>
            </NavbarDropdown>
        </NavbarItem>
    </NavbarStart>
    <NavbarEnd>
        <NavbarItem href="https://github.com/AlgusDark/bloomer" isHidden='touch'>
            <Icon className='fa fa-github' />
        </NavbarItem>
        <NavbarItem href="https://twitter.com/AlgusDark" isHidden='touch'>
            <Icon className='fa fa-twitter' />
        </NavbarItem>
    </NavbarEnd>
</NavbarMenu>
</Navbar>
    )
}

export default TopNavBar
