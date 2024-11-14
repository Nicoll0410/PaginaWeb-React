import { NavLink } from "react-router-dom"

export const NavBar = () => {

    const btnLink = 'block inline-block py-1 text-black hover:text-accent cursor-pointer mr-4'
    const activeLink = 'block inline-bloc1 py-1 text-accent mr-4'

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span className="ml-3 text-xl font-semibold text-accent">Nicoll Giraldo</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink to="/" className={({isActive}) => isActive ? activeLink : btnLink}>Inicio</NavLink>
                    <NavLink to="/cursos" className={({isActive}) => isActive ? activeLink : btnLink}>Cursos</NavLink>
                    <NavLink to="/imagenes" className={({isActive}) => isActive ? activeLink : btnLink}>Imagenes</NavLink>
                </nav>
                <NavLink to="/registro" className={({isActive}) => isActive ? activeLink : btnLink}>Registro</NavLink>
                <NavLink to="/login" className={({isActive}) => isActive ? activeLink : btnLink}>Login</NavLink>
            </div>
        </header>
    )
}