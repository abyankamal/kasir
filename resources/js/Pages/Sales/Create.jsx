import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function Create({ auth, customers, barangs }) {
    const { data, setData, post, processing, errors } = useForm({
        customer_id: "",
        items: [],
        ongkir: 0,
    });

    const [items, setItems] = useState([]);

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
        <>
            <Head title="Tambah Transaksi" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-semibold mb-4">
                        Input Transaksi
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label>Customer</label>
                            <select
                                value={data.customer_id}
                                onChange={(e) =>
                                    setData("customer_id", e.target.value)
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
                            className="min-w-full divide-y divide-gray-300"
                        >
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"
                                        colspan="2"
                                    >
                                        Tambah
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"
                                    >
                                        No
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"
                                    >
                                        Kode Barang
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"
                                    >
                                        Nama Barang
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"
                                    >
                                        Qty
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"
                                    >
                                        Harga Bandrol
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 text-center sm:pl-0"
                                        colspan="2"
                                    >
                                        Diskon
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"
                                    >
                                        Harga Diskon
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"
                                    >
                                        Total
                                    </th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>(%)</th>
                                    <th>(Rp)</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ubah</td>
                                    <td>Hapus</td>
                                    <td>1</td>
                                    <td>A001</td>
                                    <td>Barang A</td>
                                    <td>1</td>
                                    <td>200,000.00</td>
                                    <td>0%</td>
                                    <td>-</td>
                                    <td>200,000.00</td>
                                    <td>200,000.00</td>
                                </tr>
                                <tr>
                                    <td>Ubah</td>
                                    <td>Hapus</td>
                                    <td>2</td>
                                    <td>C025</td>
                                    <td>Barang B</td>
                                    <td>2</td>
                                    <td>350,000.00</td>
                                    <td>15%</td>
                                    <td>52,500.00</td>
                                    <td>297,500.00</td>
                                    <td>595,000.00</td>
                                </tr>
                                <tr>
                                    <td>Ubah</td>
                                    <td>Hapus</td>
                                    <td>3</td>
                                    <td>A102</td>
                                    <td>Barang C</td>
                                    <td>2</td>
                                    <td>125,000.00</td>
                                    <td>20%</td>
                                    <td>25,000.00</td>
                                    <td>100,000.00</td>
                                    <td>200,000.00</td>
                                </tr>
                                <tr>
                                    <td>Ubah</td>
                                    <td>Hapus</td>
                                    <td>4</td>
                                    <td>A301</td>
                                    <td>Barang D</td>
                                    <td>3</td>
                                    <td>300,000.00</td>
                                    <td>0%</td>
                                    <td>-</td>
                                    <td>300,000.00</td>
                                    <td>900,000.00</td>
                                </tr>
                                <tr>
                                    <td>Ubah</td>
                                    <td>Hapus</td>
                                    <td>5</td>
                                    <td>B221</td>
                                    <td>Barang E</td>
                                    <td>2</td>
                                    <td>300,000.00</td>
                                    <td>0%</td>
                                    <td>-</td>
                                    <td>300,000.00</td>
                                    <td>600,000.00</td>
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

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Simpan Transaksi
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
