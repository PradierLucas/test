<?php

namespace App\Http\Controllers;

use App\Models\Geolugar;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GeoController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query', ''); 
        $items = $request->input('per_page', 10); // Obtener la cantidad de items por página desde la solicitud
        $lugares = Geolugar::query()
            ->when($query, function ($q) use ($query) {
                $q->where('descripcion', 'LIKE', "%$query%");
            })
            ->orderBy('id', 'asc')
            ->paginate($items) // Usar la cantidad de items por página dinámica
            ->withQueryString(); // Agrega la query string para mantener `query` en la paginación

        return Inertia::render('Pagination', [
            'lugares' => $lugares,
            'filters' => $request->only('query', 'per_page'), // Pasa los filtros al cliente para reutilizarlos
        ]);
    }
}
