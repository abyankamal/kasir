// resources/js/Pages/Barang/Index.jsx
import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({ auth, barangs }) {
    const deleteBarang = (id) => {
        if (confirm("Are you sure you want to delete this item?")) {
            Inertia.delete(route("barang.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
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
                    <table className="mt-4 w-full">
                        <thead>
                            <tr>
                                <th>Kode</th>
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {barangs.map((barang) => (
                                <tr key={barang.id}>
                                    <td>{barang.kode}</td>
                                    <td>{barang.nama}</td>
                                    <td>{barang.harga}</td>
                                    <td>
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
                                                deleteBarang(barang.id)
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
