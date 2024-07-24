import Modal from "@/Components/Modal";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function Create({ auth, customers, barangs }) {
    const { data, setData, post, processing, errors } = useForm({
        customer_id: "",
        items: [],
        ongkir: 0,
    });

    const [items, setItems] = useState([]);
    const [showCustomer, setShowCustomer] = useState(false);

    const handleCloseCustomer = () => setShowCustomer(false);
    const handleShowCustomer = () => setShowCustomer(true);

    const addItem = () => {
        setItems([...items, { barang_id: "", qty: 1, diskon_pct: 0 }]);
    };

    const updateItem = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setItems(newItems);
        setData("items", newItems);
    };

    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
        setData("items", newItems);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("sales.store"));
    };

    return (
        <ApplicationLayout>
            <Head title="Tambah Transaksi" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-8">
                            <label className="text-2xl font-semibold">
                                Transaksi
                            </label>
                            <div>
                                <div class="md:flex md:items-center mt-4 mb-6">
                                    <div class="flex w-full">
                                        <div class="md:w-1/12">
                                            <label
                                                class="block text-black font-bold mb-1 md:mb-0"
                                                for="inline-password"
                                            >
                                                No
                                            </label>
                                        </div>
                                        <div class="md:w-1/5">
                                            <input
                                                class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                                id="first-name"
                                                type="number"
                                                placeholder="Nomor Transaksi"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="md:flex md:items-center mb-6">
                                    <div class="flex w-full">
                                        <div class="md:w-1/12">
                                            <label
                                                class=" text-gray-500 font-bold mb-1 md:mb-0"
                                                for="inline-password"
                                            >
                                                Tanggal
                                            </label>
                                        </div>
                                        <div class="md:w-1/5">
                                            <input
                                                class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                                id="first-name"
                                                type="date"
                                                placeholder="Nomor Transaksi"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleShowCustomer}
                                className="bg-green-500 text-white px-4 py-2 rounded"
                            >
                                Tambah Konsumen
                            </button>
                            <Modal
                                show={showCustomer}
                                onClose={handleCloseCustomer}
                            >
                                <div className="p-6 w-full">
                                    <p className="text-center">
                                        Tambah Konsumen
                                    </p>
                                    <select
                                        value={data.customer_id}
                                        onChange={(e) =>
                                            setData(
                                                "customer_id",
                                                e.target.value
                                            )
                                        }
                                        className="w-full mt-1"
                                    >
                                        <option value="">Pilih Customer</option>
                                        {customers.map((customer) => (
                                            <option
                                                key={customer.id}
                                                value={customer.id}
                                            >
                                                {customer.name}
                                            </option>
                                        ))}
                                    </select>
                                    <div class="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
                                        <form class="space-y-4">
                                            <div class="flex items-center">
                                                <label
                                                    for="kode"
                                                    class="w-20 font-bold text-gray-700"
                                                >
                                                    Kode
                                                </label>
                                                <input
                                                    type="text"
                                                    id="kode"
                                                    name="kode"
                                                    class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                                <button
                                                    type="button"
                                                    class="ml-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="h-5 w-5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="flex items-center">
                                                <label
                                                    for="nama"
                                                    class="w-20 font-bold text-gray-700"
                                                >
                                                    Nama
                                                </label>
                                                <input
                                                    type="text"
                                                    id="nama"
                                                    name="nama"
                                                    class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div class="flex items-center">
                                                <label
                                                    for="telp"
                                                    class="w-20 font-bold text-gray-700"
                                                >
                                                    Telp
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="telp"
                                                    name="telp"
                                                    class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div>
                                    <div class="md:flex md:items-center mt-4 mx-auto mb-6">
                                        <div class="flex w-full">
                                            <div class="md:w-1/12">
                                                <label
                                                    class="block text-black font-bold mb-1 md:mb-0"
                                                    for="inline-password"
                                                >
                                                    No
                                                </label>
                                            </div>
                                            <div class="md:w-1/5">
                                                <input
                                                    class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                                    id="first-name"
                                                    type="number"
                                                    placeholder="Nomor Transaksi"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </div>

                        <div className="mb-4">
                            <button
                                type="button"
                                onClick={addItem}
                                className="bg-green-500 text-white px-4 py-2 rounded"
                            >
                                Tambah Item
                            </button>
                        </div>

                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="mb-4 p-4 border rounded"
                            >
                                <select
                                    value={item.barang_id}
                                    onChange={(e) =>
                                        updateItem(
                                            index,
                                            "barang_id",
                                            e.target.value
                                        )
                                    }
                                    className="w-full mb-2"
                                >
                                    <option value="">Pilih Barang</option>
                                    {barangs.map((barang) => (
                                        <option
                                            key={barang.id}
                                            value={barang.id}
                                        >
                                            {barang.nama}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="number"
                                    value={item.qty}
                                    onChange={(e) =>
                                        updateItem(index, "qty", e.target.value)
                                    }
                                    placeholder="Qty"
                                    className="w-full mb-2"
                                />
                                <input
                                    type="number"
                                    value={item.diskon_pct}
                                    onChange={(e) =>
                                        updateItem(
                                            index,
                                            "diskon_pct",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Diskon (%)"
                                    className="w-full mb-2"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeItem(index)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Hapus
                                </button>
                            </div>
                        ))}

                        <div className="mb-4">
                            <label>Ongkir</label>
                            <input
                                type="number"
                                value={data.ongkir}
                                onChange={(e) =>
                                    setData("ongkir", e.target.value)
                                }
                                className="w-full mt-1"
                            />
                        </div>

                        <table
                            border="1"
                            className="min-w-full border border-collapse divide-y divide-gray-300"
                        >
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0 border border-slate-600"
                                        colspan="2"
                                        rowSpan={2}
                                    >
                                        <button>Tambah</button>
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0 border border-slate-600"
                                        rowSpan={2}
                                    >
                                        No
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0 border border-slate-600"
                                        rowSpan={2}
                                    >
                                        Kode Barang
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0 border border-slate-600"
                                        rowSpan={2}
                                    >
                                        Nama Barang
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0 border border-slate-600"
                                        rowSpan={2}
                                    >
                                        Qty
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0 border border-slate-600"
                                        rowSpan={2}
                                    >
                                        Harga Bandrol
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 text-center sm:pl-0 border border-slate-600"
                                        colspan="2"
                                    >
                                        Diskon
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0 border border-slate-600"
                                        rowSpan={2}
                                    >
                                        Harga Diskon
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0 border border-slate-600"
                                        rowSpan={2}
                                    >
                                        Total
                                    </th>
                                </tr>
                                <tr>
                                    <th className="border border-slate-600">
                                        (%)
                                    </th>
                                    <th className="border border-slate-600">
                                        (Rp)
                                    </th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-600">
                                        Ubah
                                    </td>
                                    <td className="border border-slate-600">
                                        Hapus
                                    </td>
                                    <td className="border border-slate-600">
                                        1
                                    </td>
                                    <td className="border border-slate-600">
                                        A001
                                    </td>
                                    <td className="border border-slate-600">
                                        Barang A
                                    </td>
                                    <td className="border border-slate-600">
                                        1
                                    </td>
                                    <td className="border border-slate-600">
                                        200,000.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0%
                                    </td>
                                    <td className="border border-slate-600">
                                        -
                                    </td>
                                    <td className="border border-slate-600">
                                        200,000.00
                                    </td>
                                    <td className="border border-slate-600">
                                        200,000.00
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-600">
                                        Ubah
                                    </td>
                                    <td className="border border-slate-600">
                                        Hapus
                                    </td>
                                    <td className="border border-slate-600">
                                        2
                                    </td>
                                    <td className="border border-slate-600">
                                        C025
                                    </td>
                                    <td className="border border-slate-600">
                                        Barang B
                                    </td>
                                    <td className="border border-slate-600">
                                        2
                                    </td>
                                    <td className="border border-slate-600">
                                        350,000.00
                                    </td>
                                    <td className="border border-slate-600">
                                        15%
                                    </td>
                                    <td className="border border-slate-600">
                                        52,500.00
                                    </td>
                                    <td className="border border-slate-600">
                                        297,500.00
                                    </td>
                                    <td className="border border-slate-600">
                                        595,000.00
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-600">
                                        Ubah
                                    </td>
                                    <td className="border border-slate-600">
                                        Hapus
                                    </td>
                                    <td className="border border-slate-600">
                                        3
                                    </td>
                                    <td className="border border-slate-600">
                                        A102
                                    </td>
                                    <td className="border border-slate-600">
                                        Barang C
                                    </td>
                                    <td className="border border-slate-600">
                                        2
                                    </td>
                                    <td className="border border-slate-600">
                                        125,000.00
                                    </td>
                                    <td className="border border-slate-600">
                                        20%
                                    </td>
                                    <td className="border border-slate-600">
                                        25,000.00
                                    </td>
                                    <td className="border border-slate-600">
                                        100,000.00
                                    </td>
                                    <td className="border border-slate-600">
                                        200,000.00
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-600">
                                        Ubah
                                    </td>
                                    <td className="border border-slate-600">
                                        Hapus
                                    </td>
                                    <td className="border border-slate-600">
                                        4
                                    </td>
                                    <td className="border border-slate-600">
                                        A301
                                    </td>
                                    <td className="border border-slate-600">
                                        Barang D
                                    </td>
                                    <td className="border border-slate-600">
                                        3
                                    </td>
                                    <td className="border border-slate-600">
                                        300,000.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0%
                                    </td>
                                    <td className="border border-slate-600">
                                        -
                                    </td>
                                    <td className="border border-slate-600">
                                        300,000.00
                                    </td>
                                    <td className="border border-slate-600">
                                        900,000.00
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-600">
                                        Ubah
                                    </td>
                                    <td className="border border-slate-600">
                                        Hapus
                                    </td>
                                    <td className="border border-slate-600">
                                        5
                                    </td>
                                    <td className="border border-slate-600">
                                        B221
                                    </td>
                                    <td className="border border-slate-600">
                                        Barang E
                                    </td>
                                    <td className="border border-slate-600">
                                        2
                                    </td>
                                    <td className="border border-slate-600">
                                        300,000.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0%
                                    </td>
                                    <td className="border border-slate-600">
                                        -
                                    </td>
                                    <td className="border border-slate-600">
                                        300,000.00
                                    </td>
                                    <td className="border border-slate-600">
                                        600,000.00
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="9"></td>
                                    <td className="text-left" align="right">
                                        Sub Total
                                    </td>
                                    <td>2,495,000.00</td>
                                </tr>
                                <tr>
                                    <td colspan="9"></td>
                                    <td className="text-left" align="right">
                                        Diskon
                                    </td>
                                    <td>5,000.00</td>
                                </tr>
                                <tr>
                                    <td colspan="9"></td>
                                    <td
                                        className="col-span-10 text-left"
                                        align="right"
                                    >
                                        Ongkir
                                    </td>
                                    <td>11,000.00</td>
                                </tr>
                                <tr>
                                    <td colspan="9"></td>
                                    <td className="text-left" align="right">
                                        Total Bayar
                                    </td>
                                    <td>2,479,000.00</td>
                                </tr>
                            </tfoot>
                        </table>

                        <div className="flex justify-center mt-8">
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-blue-500 text-white px-4 py-2 mr-8 rounded"
                            >
                                Simpan
                            </button>
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Hapus
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </ApplicationLayout>
    );
}
