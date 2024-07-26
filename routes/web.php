<?php

use App\Http\Controllers\BarangController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SalesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::redirect('/', '/sales');
Route::get('/sales', [SalesController::class, 'index'])->name('sales');
Route::get('/sales/create', [SalesController::class, 'create'])->name('sales.create');
Route::post('/sales/store', [SalesController::class, 'create'])->name('sales.store');
Route::get('sales/edit/{user}', [SalesController::class, 'edit'])->name('sales.edit');
Route::patch('sales/update/{user}', [SalesController::class, 'update'])->name('sales.update');
Route::get('/barang', [BarangController::class, 'index'])->name('barang');
Route::get('/barang/tambah', [BarangController::class, 'create'])->name('barang.create');
Route::post('/barang/store', [BarangController::class, 'store'])->name('barang.store');
Route::get('barang/edit/{barang}', [BarangController::class, 'edit'])->name('barang.edit');
Route::patch('barang/update/{barang}', [barangController::class, 'update'])->name('barang.update');
Route::get('/customer', [CustomerController::class, 'index'])->name('customer');
Route::get('/customer/tambah', [CustomerController::class, 'create'])->name('customer.create');
Route::post('/customer/store', [CustomerController::class, 'store'])->name('customer.store');
Route::get('customer/edit/{customer}', [CustomerController::class, 'edit'])->name('customer.edit');
Route::patch('customer/update/{customer}', [CustomerController::class, 'update'])->name('customer.update');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
