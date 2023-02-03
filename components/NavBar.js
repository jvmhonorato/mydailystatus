import React from "react";
import Link from 'next/link'

const NavBar = () => {
    return(
        <div className="bg-gray-500">
            <Link href='/'>Home</Link>
            <Link href='/about'>Sobre</Link>
            <Link href='/registration'>Cadastro</Link>
            <Link href='/login'>Entrar</Link>
            
        </div>
    )
}

export default NavBar