import {Link, Outlet} from 'react-router-dom';

export default function Layout()
{
    return (
        <main>
            <nav>
                <Link to="/">Inicio |</Link>
                <Link to="/Componentes/Centro"> Centro |</Link>
                <Link to="/Componentes/Alumno"> Base de Datos</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </main>
    )
}