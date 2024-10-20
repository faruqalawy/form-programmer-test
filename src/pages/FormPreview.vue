<template>
  <div class="p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
    <h2 class="text-3xl font-bold text-indigo-600 mb-6 text-center">Data Form</h2>

    <!-- Display all data from formData -->
    <div class="space-y-4 text-lg text-gray-800">
      <div class="border-b pb-2">
        <span class="font-medium">Nama:</span> {{ formData.nama }}
      </div>
      <div class="border-b pb-2">
        <span class="font-medium">NIK:</span> {{ formData.nik }}
      </div>
      <div class="border-b pb-2">
        <span class="font-medium">No. KK:</span> {{ formData.no_kk }}
      </div>
      <div class="border-b pb-2">
        <span class="font-medium">Umur:</span> {{ formData.umur }}
      </div>
      <div class="border-b pb-2">
        <span class="font-medium">Jenis Kelamin:</span> {{ formData.jenis_kelamin }}
      </div>
      <div class="border-b pb-2">
        <span class="font-medium">Foto KTP:</span> {{ formData.foto_KTP }}
      </div>
      <div class="border-b pb-2">
        <span class="font-medium">Foto KK:</span> {{ formData.foto_KK }}
      </div>
      <div class="border-b pb-2">
        <span class="font-medium">Provinsi:</span> {{ formData.selectedProvinsi }}
      </div>
      <div class="border-b pb-2">
        <span class="font-medium">Kabupaten:</span> {{ formData.selectedKabupaten }}
      </div>
      <div class="border-b pb-2">
        <span class="font-medium">Kecamatan:</span> {{ formData.selectedKecamatan }}
      </div>
      <div class="border-b pb-2">
        <span class="font-medium">Kelurahan:</span> {{ formData.selectedKelurahan }}
      </div>
      <div class="border-b pb-2">
        <span class="font-medium">Alamat:</span> {{ formData.alamat }}
      </div>
      <div class="border-b pb-2">
        <span class="font-medium">RT:</span> {{ formData.rt }}
      </div>
      <div class="border-b pb-2">
        <span class="font-medium">RW:</span> {{ formData.rw }}
      </div>
      <div class="border-b pb-2">
        <span class="font-medium">Penghasilan Pra-Pandemi:</span> {{ formData.penghasilan_pra_pandemi }}
      </div>
      <div class="border-b pb-2">
        <span class="font-medium">Penghasilan Pasca-Pandemi:</span> {{ formData.penghasilan_pos_pandemi }}
      </div>
      <div class="border-b pb-2" v-if="formData.alasan !== 'Lainnya'">
        <span class="font-medium">Alasan:</span> {{ formData.alasan }}
      </div>
      <div class="border-b pb-2" v-if="formData.alasan === 'Lainnya'">
        <span class="font-medium">Alasan Lain:</span> {{ formData.alasan_lain }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useFormStore } from "../stores/formStore.js";
import { toast } from "vue3-toastify";

const formStore = useFormStore();
const formData = formStore.formData;

onMounted(() => {
  toast.success('Data berhasil disubmit!', {
    autoClose: 5000,
    theme: 'colored',
    position: 'top-center',
    pauseOnHover: false,
  });
});
</script>
