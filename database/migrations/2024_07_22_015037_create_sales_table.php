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
        Schema::create('t_sales', function (Blueprint $table) {
            $table->id();
            $table->string('kode', 15);
            $table->dateTime('tgl');
            $table->foreignId('cust_id')->constrained('m_customer');
            $table->decimal('subtotal', 10, 2);
            $table->decimal('diskon', 10, 2);
            $table->decimal('ongkir', 10, 2);
            $table->decimal('total_bayar', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};
