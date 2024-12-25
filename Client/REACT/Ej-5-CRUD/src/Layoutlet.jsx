import React from "react";
import {Link, Outlet} from 'react-router-dom';

export default function Layoutlet()
{
    return (
        <main>
            <nav>
                <Link to="/">Inicio |</Link>
                <Link to="/Centro">Centro |</Link>
                <Link to="/Daw2">Alumnos</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </main>
    )
}