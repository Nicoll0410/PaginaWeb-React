import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export const Registro = () => {
    return (
        <>

        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-accent text-6xl">Registrate Gratis</h2><br/><br/>

            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900 text-xl">Informacion Personal</h2>
                <p className="mt-1 text-sm/6 text-gray-600">Los campos que contienen el * son obligatorios</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                            Primer Nombre *
                        </label>
                    <div className="mt-2">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                        Segundo Nombre
                    </label>
                    <div className="mt-2">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                        Primer Apellido *
                    </label>
                    <div className="mt-2">
                        <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                        Segundo Apellido *
                    </label>
                    <div className="mt-2">
                        <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="date" className="block text-sm/6 font-medium text-gray-900">
                        Fecha de Nacimiento *
                    </label>
                    <div className="mt-2">
                        <input
                            id="date"
                            name="date"
                            type="date"
                            autoComplete="date"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="gender" className="block text-sm/6 font-medium text-gray-900">
                        Genero *
                    </label>
                    <div className="mt-2">
                        <select
                            id="gender"
                            name="gender"
                            autoComplete="gender-name"
                            className="block w-full rounded-md bg-white border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                            >
                            <option></option>
                            <option>Femenino</option>
                            <option>Masculino</option>
                            <option>Otro</option>
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-full">
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Email *
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                        Ciudad *
                    </label>
                    <div className="mt-2">
                        <select
                            id="city"
                            name="city"
                            autoComplete="city-name"
                            className="block w-full rounded-md bg-white border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                            >
                            <option>Medellín</option>
                            <option>Bogotá</option>
                            <option>Barranquilla</option>
                            <option>Cartagena</option>
                            <option>Bucaramanga</option>
                            <option>Santa Marta</option>
                            <option>Ibagué</option>
                            <option>Montería</option>
                            <option>Pereira</option>
                        </select>
                    </div>
                </div>

                <div className="sm: col-span-3">
                    <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                        Direccion *
                    </label>
                    <div className="mt-2">
                        <input
                            id="street-address"
                            name="street-address"
                            type="text"
                            autoComplete="street-address"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>


                <div className="sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">
                        Telefono *
                    </label>
                    <div className="mt-2">
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">
                        Telefono 2
                    </label>
                    <div className="mt-2">
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                            Nombre de Usuario *
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                                        />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        Contraseña *
                    </label>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        Confirmar Contraseña *
                    </label>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                    <div className="col-span-full">
                        <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                            Foto-Avatar
                        </label>
                            <div className="mt-2 flex items-center gap-x-3 text-center">
                                <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
                                    <button
                                        type="button"
                                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                        Change
                                    </button>
                            </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                            Selecciona tu foto
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-1 py-1">
                            <div className="text-center">
                                <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                                <div className="mt-4 flex text-sm/6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-pink-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:text-pink-500"
                                        >
                                        <span>Subir un archivo</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">o arrastrar y soltar</p>
                                </div>
                                <p className="text-xs/5 text-gray-600">PNG, JPG, GIF de 10MB</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="rounded-md text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lgbg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Cancelar
            </button>
            <button
                type="submit"
                className="rounded-md text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lgbg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Enviar
            </button>
        </div>
    </form>
        </>
    )
}
