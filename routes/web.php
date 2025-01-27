<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ContactController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\GeoController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('dashboard')->group(function () {
    Route::get('contacts', [ContactController::class, 'index'])->name('contact.index');
    Route::get('contacts/create', [ContactController::class, 'create'])->name('contact.create');
    Route::post('contacts', [ContactController::class, 'store'])->name('contact.store');
    Route::get('contacts/{contact}/edit', [ContactController::class, 'edit'])->name('contact.edit');
    Route::post('contacts/{contact}', [ContactController::class, 'update'])->name('contact.update');
    Route::delete('contacts/{contact}', [ContactController::class, 'destroy'])->name('contact.destroy');

    Route::get('/search', [GeoController::class, 'search'])->name('geo.search');

});



require __DIR__.'/auth.php';
