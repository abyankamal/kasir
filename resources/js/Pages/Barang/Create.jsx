// resources/js/Pages/Barang/Create.jsx
import React from "react";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        kode: "",
        nama: "",
        harga: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("barang.store"));
    };

    return (
        <ApplicationLayout>
            <Head title="Tambah Barang" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-semibold mb-4">
                        Tambah Barang
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="kode">Kode</label>
                            <input
                                id="kode"
                                type="text"
                                value={data.kode}
                                onChange={(e) =>
                                    setData("kode", e.target.value)
                                }
                                className="w-full mt-1"
                            />
                            {errors.kode && (
                                <div className="text-red-500">
                                    {errors.kode}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="nama">Nama</label>
                            <input
                                id="nama"
                                type="text"
                                value={data.nama}
                                onChange={(e) =>
                                    setData("nama", e.target.value)
                                }
                                className="w-full mt-1"
                            />
                            {errors.nama && (
                                <div className="text-red-500">
                                    {errors.nama}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="harga">Harga</label>
                            <input
                                id="harga"
                                type="number"
                                value={data.harga}
                                onChange={(e) =>
                                    setData("harga", e.target.value)
                                }
                                className="w-full mt-1"
                            />
                            {errors.harga && (
                                <div className="text-red-500">
                                    {errors.harga}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Simpan Barang
                        </button>
                    </form>
                </div>
            </div>
        </ApplicationLayout>
    );
}
