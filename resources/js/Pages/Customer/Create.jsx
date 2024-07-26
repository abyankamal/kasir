import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        kode: "",
        name: "",
        telp: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("customer.store"));
    };

    return (
        <ApplicationLayout>
            <Head title="Tambah Customer" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-semibold mb-4">
                        Tambah Customer
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
                            <label htmlFor="name">Nama</label>
                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full mt-1"
                            />
                            {errors.name && (
                                <div className="text-red-500">
                                    {errors.name}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="telp">Telepon</label>
                            <input
                                id="telp"
                                type="number"
                                value={data.telp}
                                onChange={(e) =>
                                    setData("telp", e.target.value)
                                }
                                className="w-full mt-1"
                            />
                            {errors.telp && (
                                <div className="text-red-500">
                                    {errors.telp}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Simpan Customer
                        </button>
                    </form>
                </div>
            </div>
        </ApplicationLayout>
    );
}
