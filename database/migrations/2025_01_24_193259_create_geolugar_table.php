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
        Schema::create('geolugars', function (Blueprint $table) {
            $table->id(); // Campo ID autoincremental
            $table->string('descripcion', 255); // Campo descripción con un máximo de 255 caracteres
            $table->tinyInteger('sn_estado')->default(1); // Campo estado (tinyint), por defecto 1
            $table->timestamps(); // Campos created_at y updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('geolugar');
    }
};
