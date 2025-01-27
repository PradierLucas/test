<?php

namespace App\Http\Controllers;

use App\Models\Geolugar;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GeoController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query', ''); // Obtén el parámetro de búsqueda si existe
        $lugares = Geolugar::query()
            ->when($query, function ($q) use ($query) {
                $q->where('descripcion', 'LIKE', "%$query%");
            })
            ->orderBy('id', 'asc')
            ->paginate(10)
            ->withQueryString(); // Agrega la query string para mantener `query` en la paginación

        return Inertia::render('Pagination', [
            'lugares' => $lugares,
            'filters' => $request->only('query'), // Pasa los filtros al cliente para reutilizarlos
        ]);
    }
}
