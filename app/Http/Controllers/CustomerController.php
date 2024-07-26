<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::latest()->get();
        return Inertia::render('Customer/Index', ['customers' => $customers]);
    }

    public function create()
    {
        return Inertia::render('Customer/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'kode' => 'required|string|max:10|unique:m_customer,kode',
            'name' => 'required|string|max:100',
            'telp' => 'required|string|max:20',
        ]);

        Customer::create($validated);

        return redirect()->route('customers')->with('message', 'Customer berhasil ditambahkan');
    }

    public function edit(Customer $customer)
    {
        return Inertia::render('Customers/Edit', ['customer' => $customer]);
    }

    public function update(Request $request, Customer $customer)
    {
        $validated = $request->validate([
            'kode' => 'required|string|max:10|unique:m_customer,kode,' . $customer->id,
            'name' => 'required|string|max:100',
            'telp' => 'required|string|max:20',
        ]);

        $customer->update($validated);

        return redirect()->route('customers.index')->with('message', 'Customer berhasil diperbarui');
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();
        return redirect()->route('customers.index')->with('message', 'Customer berhasil dihapus');
    }
}
