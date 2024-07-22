<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Models\Customer;
use App\Models\Sales;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SalesController extends Controller
{
    public function index()
    {
        $sales = Sales::with('customer')->latest()->get();
        return Inertia::render('Sales/Index', ['sales' => $sales]);
    }

    public function create()
    {
        $customers = Customer::all();
        $barangs = Barang::all();
        return Inertia::render('Sales/Create', [
            'customers' => $customers,
            'barangs' => $barangs,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'customer_id' => 'required|exists:m_customer,id',
            'items' => 'required|array|min:1',
            'items.*.barang_id' => 'required|exists:m_barang,id',
            'items.*.qty' => 'required|integer|min:1',
            'items.*.diskon_pct' => 'required|numeric|min:0|max:100',
            'ongkir' => 'required|numeric|min:0',
        ]);

        DB::transaction(function () use ($validated) {
            $sales = Sales::create([
                'kode' => 'S' . time(),
                'tgl' => now(),
                'cust_id' => $validated['customer_id'],
                'ongkir' => $validated['ongkir'],
            ]);

            $subtotal = 0;
            $total_diskon = 0;

            foreach ($validated['items'] as $item) {
                $barang = Barang::find($item['barang_id']);
                $harga_bandrol = $barang->harga;
                $diskon_nilai = $harga_bandrol * ($item['diskon_pct'] / 100) * $item['qty'];
                $harga_diskon = $harga_bandrol - ($harga_bandrol * $item['diskon_pct'] / 100);
                $total = $harga_diskon * $item['qty'];

                $sales->details()->create([
                    'barang_id' => $item['barang_id'],
                    'harga_bandrol' => $harga_bandrol,
                    'qty' => $item['qty'],
                    'diskon_pct' => $item['diskon_pct'],
                    'diskon_nilai' => $diskon_nilai,
                    'harga_diskon' => $harga_diskon,
                    'total' => $total,
                ]);

                $subtotal += $harga_bandrol * $item['qty'];
                $total_diskon += $diskon_nilai;
            }

            $sales->update([
                'subtotal' => $subtotal,
                'diskon' => $total_diskon,
                'total_bayar' => $subtotal - $total_diskon + $validated['ongkir'],
            ]);
        });

        return redirect()->route('sales.index')->with('message', 'Transaksi berhasil disimpan');
    }
}
