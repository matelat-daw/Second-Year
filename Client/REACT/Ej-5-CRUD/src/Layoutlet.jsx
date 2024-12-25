import {Link, Outlet} from 'react-router-dom'

export default function Layoutlet()
{
    return (
        <main>
            <nav>
                <Link to="/">Inicio |</Link>
                <Link to="/Centro">Centro |</Link>
                <Link to="/Crud">Alumnos</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </main>
    )
}