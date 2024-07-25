<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BarangController extends Controller
{
    public function index()
    {
        $barangs = Barang::latest()->get();
        return Inertia::render('Barang/Index', ['barangs' => $barangs]);
    }

    public function create()
    {
        return Inertia::render('Barang/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'kode' => 'required|string|max:10|unique:m_barang,kode',
            'nama' => 'required|string|max:100',
            'harga' => 'required|numeric|min:0',
        ]);

        Barang::create($validated);

        return redirect()->route('barang')->with('message', 'Barang berhasil ditambahkan');
    }

    public function edit(Barang $barang)
    {
        return Inertia::render('Barang/Edit', ['barang' => $barang]);
    }

    public function update(Request $request, Barang $barang)
    {
        $validated = $request->validate([
            'kode' => 'required|string|max:10|unique:m_barang,kode,' . $barang->id,
            'nama' => 'required|string|max:100',
            'harga' => 'required|numeric|min:0',
        ]);

        $barang->update($validated);

        return redirect()->route('barang.index')->with('message', 'Barang berhasil diperbarui');
    }

    public function destroy(Barang $barang)
    {
        $barang->delete();
        return redirect()->route('barang.index')->with('message', 'Barang berhasil dihapus');
    }
}
