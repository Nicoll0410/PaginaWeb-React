export const NavBar = () => {

    const btnLink = 'block online-block py-1 text-white hover:text-accent cursor-pointer mr-4'
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl font-semibold text-white">Nicoll Giraldo</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className={btnLink}>Inicio</a>
                    <a className={btnLink}>Cursos</a>
                    <a className={btnLink}>Imagenes</a>
                </nav>
                <a className={btnLink}>Login</a>
                <a className={btnLink}>Registro</a>
            </div>
        </header>
    )
}
