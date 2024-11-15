export const Login = () => {
    return (
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-900">Bienvenidos a </h1>
                <p className="leading-relaxed mt-4">Cras vitae consectetur justo. Sed elit leo, gravida vitae metus vel, auctor lacinia nibh.</p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center">Iniciar Sesion</h2>
                <div className="relative mb-4">
                    <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Usuario o Email</label>
                    <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">Contraseña</label>
                    <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <button className="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Iniciar Sesion</button>
            </div>
        </div>
    </section>
    )
}