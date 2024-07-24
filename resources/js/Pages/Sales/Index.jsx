import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, sales }) {
    return (
        <>
            <Head title="Daftar Transaksi" />
            <div>
                <label for="search">Cari</label>
                <input type="text" id="search" name="search" />
            </div>

            <table border="1">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>No Transaksi</th>
                        <th>Tanggal</th>
                        <th>Nama Customer</th>
                        <th>Jumlah Barang</th>
                        <th>Sub Total</th>
                        <th>Diskon</th>
                        <th>Ongkir</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>202101-0001</td>
                        <td>01-Jan-2021</td>
                        <td>Cust A</td>
                        <td>2</td>
                        <td>250,000.00</td>
                        <td>5,000.00</td>
                        <td></td>
                        <td>245,000.00</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>202101-0002</td>
                        <td>01-Jan-2021</td>
                        <td>Cust B</td>
                        <td>5</td>
                        <td>600,000.00</td>
                        <td></td>
                        <td>15,000.00</td>
                        <td>615,000.00</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>202101-0003</td>
                        <td>02-Jan-2021</td>
                        <td>Cust A</td>
                        <td>1</td>
                        <td>125,000.00</td>
                        <td></td>
                        <td></td>
                        <td>125,000.00</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>202101-0004</td>
                        <td>02-Jan-2021</td>
                        <td>Cust C</td>
                        <td>3</td>
                        <td>320,000.00</td>
                        <td></td>
                        <td></td>
                        <td>320,000.00</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>202101-0005</td>
                        <td>03-Jan-2021</td>
                        <td>Cust D</td>
                        <td>2</td>
                        <td>560,000.00</td>
                        <td></td>
                        <td></td>
                        <td>560,000.00</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="8" align="right">
                            Grand Total
                        </td>
                        <td>1,865,000.00</td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}
