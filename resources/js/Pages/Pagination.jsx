import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

const Pagination = ({ auth, lugares, filters }) => {
    // Validar datos iniciales
    const { data = [], current_page = 1, last_page = 1 } = lugares || {};
    const [query, setQuery] = useState(filters.query || '');

    // Función para cambiar de página
    const handlePageChange = (page) => {
        router.get('/dashboard/search', { page, query });
    };

    // Función para buscar
    const handleSearch = (e) => {
        e.preventDefault();
        router.get('/dashboard/search', { query });
    };


debugger
    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl">Lugares</h2>}>
            <Head title="Lugares" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm rounded-lg p-6">
                        {/* Formulario de búsqueda */}
                        <form onSubmit={handleSearch} className="flex items-center gap-4 mb-4">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Buscar por descripción"
                                className="border p-2 rounded w-full"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Buscar
                            </button>
                        </form>

                        {/* Tabla de resultados */}
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Descripción</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data?.map((item) => (
                                    <tr key={item.id}>
                                        <td className="px-6 py-4">{item.descripcion}</td>
                                        <td className="px-6 py-4">{item.sn_estado ? 'Activo' : 'Inactivo'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Paginación */}
                        <div className="flex justify-between items-center mt-4">
                            <button
                                onClick={() => handlePageChange(current_page - 1)}
                                disabled={current_page === 1}
                                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                            >
                                Anterior
                            </button>
                            <span>Página {current_page} de {last_page}</span>
                            <button
                                onClick={() => handlePageChange(current_page + 1)}
                                disabled={current_page === last_page}
                                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Pagination;
