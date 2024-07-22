<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sales_detail', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sales_id')->constrained('sales');
            $table->foreignId('barang_id')->constrained('barang');
            $table->decimal('harga_bandrol', 10, 2);
            $table->integer('qty');
            $table->decimal('diskon_pct', 5, 2);
            $table->decimal('diskon_nilai', 10, 2);
            $table->decimal('harga_diskon', 10, 2);
            $table->decimal('total', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales_details');
    }
};
