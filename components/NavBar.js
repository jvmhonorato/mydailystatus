import React from "react";
import Link from 'next/link'

const NavLink = ({href, children}) => {
    return(
        <Link href={href} className=' p-2 hover:underline hover:text-red-800'>
            {children}
            </Link>
    )
}

const NavBar = () => {
    return(
        <div className="bg-gray-500 py-4 text-center">
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/about'>Sobre</NavLink>
            <NavLink href='/registration'>Cadastro</NavLink>
            <NavLink href='/login'>Entrar</NavLink>
            
        </div>
    )
}

export default NavBar