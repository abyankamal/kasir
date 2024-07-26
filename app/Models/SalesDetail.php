<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesDetail extends Model
{
    use HasFactory;

    protected $table = 't_sales_detail';
    protected $fillable = ['sales_id', 'barang_id', 'harga_bandrol', 'qty', 'diskon_pct', 'diskon_nilai', 'harga_diskon', 'total'];

    public function sales()
    {
        return $this->belongsTo(Sales::class, 'sales_id');
    }

    public function barang()
    {
        return $this->belongsTo(Barang::class, 'barang_id');
    }
}
