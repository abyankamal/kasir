import React from "react";
import { Head, Link } from "@inertiajs/react";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import Pagination from "@/Components/Pagination";

export default function Index({ auth, barangs }) {
    const deleteBarang = (id) => {
        if (confirm("Are you sure you want to delete this item?")) {
            Inertia.delete(route("barang.destroy", id));
        }
    };

    return (
        <ApplicationLayout>
            <Head title="Daftar Barang" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-semibold mb-4">
                        Daftar Barang
                    </h1>
                    <Link
                        href={route("barang.create")}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Tambah Barang
                    </Link>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="mt-8 flow-root">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                        {barangs.length > 0 ? (
                                            <table className="min-w-full divide-y divide-gray-300">
                                                <thead>
                                                    <tr>
                                                        <th>Kode</th>
                                                        <th>Nama</th>
                                                        <th>Harga</th>
                                                        <th>Aksi</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {barangs.map((barang) => (
                                                        <tr key={barang.id}>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                {barang.kode}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                {barang.nama}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                {barang.harga}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                <Link
                                                                    href={route(
                                                                        "barang.edit",
                                                                        barang.id
                                                                    )}
                                                                    className="text-blue-600 hover:text-blue-900 mr-2"
                                                                >
                                                                    Edit
                                                                </Link>
                                                                <button
                                                                    onClick={() =>
                                                                        deleteBarang(
                                                                            barang.id
                                                                        )
                                                                    }
                                                                    className="text-red-600 hover:text-red-900"
                                                                >
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        ) : (
                                            <div className="text-center py-4">
                                                <p className="text-gray-500 text-lg">
                                                    No items found.
                                                </p>
                                            </div>
                                        )}
                                        {/* <Pagination links={barangs.links} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ApplicationLayout>
    );
}
