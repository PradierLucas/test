import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import DataTable from 'react-data-table-component';

const Pagination = ({ auth, lugares, filters }) => {
    // Validar datos iniciales
    const { data = [], current_page = 1, last_page = 1 } = lugares || {};
    const [query, setQuery] = useState(filters.query || '');
    const [itemsPerPage, setItemsPerPage] = useState(per_page);

    // Función para cambiar de página
    const handlePageChange = (page) => {
        router.get('/dashboard/search', { page, query, per_page: itemsPerPage });
    };

    // Función para buscar
    const handleSearch = (e) => {
        e.preventDefault();

        if (query.length >= 3 ) {
            router.get('/dashboard/search', { query, per_page: itemsPerPage });
        }
    };

    // Función para cambiar la cantidad de elementos por página
    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(e.target.value);
        router.get('/dashboard/search', { query, per_page: e.target.value });
    };

    // Columnas para la tabla
    const columns = [
        {
            name: 'Nombre',
            selector: (row) => row.descripcion,
            sortable: true,
        },
        {
            name: 'Estado',
            selector: (row) => (row.sn_estado ? 'Activo' : 'Inactivo'),
            sortable: true,
        },
    ];

    console.log(data);

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl">Lugares</h2>}>
            <Head title="Lugares" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm rounded-lg p-6">

                        <form onSubmit={handleSearch} className="flex items-center gap-4 mb-4">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Buscar por nombre (mínimo 3 caracteres)"
                                className="border p-2 rounded w-full"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Buscar
                            </button>
                        </form>

                        <div className="flex items-center gap-4 mb-4">
                            <label htmlFor="itemsPerPage">Resultados por página:</label>
                            <select
                                id="itemsPerPage"
                                value={itemsPerPage}
                                onChange={handleItemsPerPageChange}
                                className="border  rounded"
                            >
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                            </select>
                        </div>

                        <DataTable
                            columns={columns}
                            data={data}
                            highlightOnHover
                            fixedHeader
                            fixedHeaderScrollHeight="400px"
                        />

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