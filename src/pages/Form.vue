<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h1 class="text-2xl font-bold mb-4 text-center">Penerima Bantuan Sosial</h1>
    <h2 class="text-lg font-semibold mb-6 text-center">
      Lembaga Pemberdayaan Masyarakat Jawa Barat
    </h2>

    <form
      id="data-form"
      enctype="multipart/form-data"
      method="POST"
      @submit.prevent="handleSubmit"
    >
      <!-- 1. DATA PRIBADI -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-4">1. Data Pribadi</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <!-- Nama -->
          <div>
            <label class="block text-sm font-medium mb-1" for="nama"
              >Nama</label
            >
            <input
              id="nama"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="text"
              maxlength="255"
              placeholder="Ketik disini..."
              v-model="formData.nama" 
              required
            />
          </div>

          <!-- NIK -->
          <div>
            <label class="block text-sm font-medium mb-1" for="nik">NIK</label>
            <input
              id="nik"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Ketik disini..."
              maxlength="16"
              v-model="formData.nik"
              required
            />
          </div>
        </div>

        <!-- Nomor KK -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label class="block text-sm font-medium mb-1" for="no_kk"
              >Nomor Kartu Keluarga</label
            >
            <input
              id="no_kk"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Ketik disini..."
              maxlength="16"
              v-model="formData.no_kk"
              required
            />
          </div>

          <!-- Umur -->
          <div>
            <label class="block text-sm font-medium mb-1" for="umur"
              >Umur (25 tahun ke atas)</label
            >
            <input
              id="umur"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="number"
              min="25"
              placeholder="Ketik disini..."
              v-model="formData.umur"
              required
            />
          </div>
        </div>

        <!-- Jenis Kelamin -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1" for="jenis_kelamin"
            >Jenis Kelamin</label
          >
          <select
            id="jenis_kelamin"
            class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            v-model="formData.jenis_kelamin"
            required
          >
            <option value="">Pilih...</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
      </div>

      <!-- 2. DOKUMEN PENDUKUNG -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-4">2. Dokumen Pendukung</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <!-- Input foto KTP -->
          <div>
            <label class="block text-sm font-medium mb-1" for="foto_ktp"
              >Foto KTP (Max 2MB, JPG/JPEG/PNG/BMP)</label
            >
            <input
              id="foto_ktp"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="file"
              accept=".jpg,.jpeg,.png,.bmp"
              @change="validateFile($event, 'foto_KTP')"
              required
            />
          </div>

          <!-- Input foto KK -->
          <div>
            <label class="block text-sm font-medium mb-1" for="foto_kk"
              >Foto KK(Max 2MB, JPG/JPEG/PNG/BMP)</label
            >
            <input
              id="foto_kk"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="file"
              accept=".jpg,.jpeg,.png,.bmp"
              @change="validateFile($event, 'foto_KK')"
              required
            />
          </div>
        </div>
      </div>

      <!-- 3. ALAMAT DAN PENGHASILAN -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-4">
          Sesi 3: Alamat dan Penghasilan
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

          <!-- Penghasilan Sebelum Pandemi -->
          <div class="mb-4">
            <label
              class="block text-sm font-medium mb-1"
              for="penghasilan_sebelum"
              >Penghasilan Sebelum Pandemi</label
            >
            <input
              id="penghasilan_sebelum"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="number"
              placeholder="Ketik disini..."
              v-model="formData.penghasilan_pra_pandemi"
              required
            />
          </div>

          <!-- Penghasilan Setelah Pandemi -->
          <div class="mb-4">
            <label
              class="block text-sm font-medium mb-1"
              for="penghasilan_setelah"
              >Penghasilan Setelah Pandemi</label
            >
            <input
              id="penghasilan_setelah"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="number"
              placeholder="Ketik disini..."
              v-model="formData.penghasilan_pos_pandemi"
              required
            />
          </div>

          <!-- Alasan -->
          <div class="mb-4 md:col-span-2">
            <label class="block text-sm font-medium mb-1" for="alasan"
              >Alasan Membutuhkan Bantuan</label
            >
            <div class="flex items-center">
              <select
                id="alasan"
                ref="alasanSelect"
                class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                v-model="formData.alasan"
              >
                <option value="">Pilih...</option>
                <option value="Kehilangan Pekerjaan">
                  Kehilangan Pekerjaan
                </option>
                <option value="Pendidikan">Pendidikan</option>
                <option value="Kesehatan">Kesehatan</option>
                <option value="Bencana Alam">Bencana Alam</option>
                <option value="Lainnya">Lainnya</option>
              </select>

              <input
                ref="alasanLainnyaContainer"
                id="alasan_lain"
                type="text"
                class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ml-2"
                placeholder="Tuliskan alasan lainnya..."
                style="display: none"
                v-model="formData.alasan_lain"
              />
            </div>
          </div>

          <!-- RT -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="rt">RT</label>
            <input
              id="rt"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Ketik disini..."
              maxlength="3"
              v-model="formData.rt"
              required
            />
          </div>

          <!-- RW -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="rw">RW</label>
            <input
              id="rw"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Ketik disini..."
              maxlength="3"
              v-model="formData.rw"
              required
            />
          </div>

          <!-- Alamat -->
          <div class="mb-4 md:col-span-2">
            <label class="block text-sm font-medium mb-1" for="alamat"
              >Alamat (Maksimal 255 karakter)</label
            >
            <textarea
              id="alamat"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              maxlength="255"
              placeholder="Ketik disini..."
              v-model="formData.alamat"
              required
            ></textarea>
          </div>

          <!-- Provinsi -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="provinsi"
              >Provinsi</label
            >
            <select
              id="provinsi"
              v-model="selectedProvinsi"
              @change="fetchLocation('regency', selectedProvinsi)"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Pilih Provinsi</option>
              <option
                v-for="provinsi in locationData.provinciesOptions"
                :key="provinsi.id"
                :value="provinsi.id"
              >
                {{ provinsi.name }}
              </option>
            </select>
          </div>

          <!-- Kabupaten/Kota -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="kabupaten_kota"
              >Kabupaten/Kota</label
            >
            <select
              id="kabupaten"
              v-model="selectedKabupaten"
              @change="fetchLocation('district', selectedKabupaten)"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Pilih Kabupaten/Kota</option>
              <option
                v-for="kabupaten in locationData.regenciesOptions"
                :key="kabupaten.id"
                :value="kabupaten.id"
              >
                {{ kabupaten.name }}
              </option>
            </select>
          </div>

          <!-- Kecamatan -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="kecamatan"
              >Kecamatan</label
            >
            <select
              id="kecamatan"
              v-model="selectedKecamatan"
              @change="fetchLocation('village', selectedKecamatan)"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Pilih Kecamatan</option>
              <option
                v-for="kecamatan in locationData.districtsOptions"
                :key="kecamatan.id"
                :value="kecamatan.id"
              >
                {{ kecamatan.name }}
              </option>
            </select>
          </div>

          <!-- Kelurahan/Desa -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="kelurahan"
              >Kelurahan/Desa</label
            >
            <select
              id="kelurahan"
              v-model="selectedKelurahan"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Pilih Kelurahan/Desa</option>
              <option
                v-for="kelurahan in locationData.villagesOptions"
                :key="kelurahan.id"
                :value="kelurahan.id"
              >
                {{ kelurahan.name }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Checkbox -->
      <div class="flex items-center mb-4">
        <input
          type="checkbox"
          id="confirmation"
          v-model="isConfirmed"
          class="mr-2"
        />
        <label for="confirmation" class="text-sm">
          Saya menyatakan bahwa data yang diisikan adalah benar dan siap
          mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data
          tersebut.
        </label>
      </div>

      <!-- Submit button -->
      <div class="mt-6">
        <button
          class="w-full md:w-auto px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline transition duration-200 flex items-center justify-center"
          type="submit"
          :disabled="!isConfirmed || isLoading"
          :class="{
            'opacity-50 cursor-not-allowed': !isConfirmed || isLoading,
          }"
        >
          <p v-if="!isLoading">Submit</p>
          <div v-else class="flex items-center">
            <span class="spinner mr-2"></span>
            Loading
          </div>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
/* Menambahkan sedikit padding dan shadow untuk form */
.bg-white {
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1,
h2 {
  margin-bottom: 1rem;
}

label {
  font-weight: 500;
}

button {
  transition: background-color 0.2s;
}

button:hover {
  background-color: #3b82f6;
}

.spinner {
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useFormStore } from "../stores/formStore";
import { useLocationStore } from "../stores/locationStore";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const formStore = useFormStore();
const formData = formStore.formData;

const locationStore = useLocationStore();
const locationData = locationStore.locationData;
const fetchLocation = locationStore.fetchLocation;

const router = useRouter();

const alasanSelect = ref(null);
const alasanLainnyaContainer = ref(null);

const isLoading = ref(false);

// State to store selected location
const selectedProvinsi = ref(formData.selectedProvinsi);
const selectedKabupaten = ref(formData.selectedKabupaten);
const selectedKecamatan = ref(formData.selectedKecamatan);
const selectedKelurahan = ref(formData.selectedKelurahan);

const isConfirmed = ref(false);

// Function to check validity of the file inputed
const validateFile = (event, fileType) => {
  const file = event.target.files[0];
  const maxSizeInMB = 2;
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/bmp"];

  if (file) {
    // Check file type
    if (!allowedTypes.includes(file.type)) {
      event.target.value = null; // Reset file input
      return;
    }

    // Check file size (in MB)
    const fileSizeInMB = file.size / (1024 * 1024);
    if (fileSizeInMB > maxSizeInMB) {
      event.target.value = null; // Reset file input
      return;
    }

    // Store the file in formData
    formStore.formData[fileType] = file.name;
  }
};

const handleSubmit = () => {
  isLoading.value = true; 

  // Server load simulation with time respons 1500 ms
  setTimeout(() => {
    const success = Math.random() > 0.2; 

    if (success) {
      router.push("/preview"); 
    } else {
      toast.error(
        "503: Internal server overload, silahkan submit ulang data.",
        {
          autoClose: 5000,
          theme: "colored",
          position: "top-center",
          pauseOnHover: false,
        }
      );
    }

    isLoading.value = false;
  }, 1500);
};

onMounted(() => {
  if (alasanSelect.value) {
    alasanSelect.value.addEventListener("change", function () {
      if (this.value === "Lainnya") {
        alasanLainnyaContainer.value.style.display = "block";
        alasanSelect.value.style.display = "none";
      } else {
        alasanLainnyaContainer.value.style.display = "none";
        alasanSelect.value.style.display = "block";
      }
    });
  } else {
    console.warn("alasanSelect is not available in DOM");
  }

  // Callback provincies data
  fetchLocation("province");
});

// Watch for changes on selected province, regency, district, and village
watch(
  [selectedProvinsi, selectedKabupaten, selectedKecamatan, selectedKelurahan],
  async ([province, regency, district, village]) => {
    try {
      if (province) {
        await fetchLocation("regency", province); 

        const currentProvince = locationData.provinciesOptions.find(
          (option) => option.id === selectedProvinsi.value
        );

        formStore.setFormData({ selectedProvinsi: currentProvince.name });
      }

      if (regency) {
        await fetchLocation("district", regency); 

        const currentRegency = locationData.regenciesOptions.find(
          (option) => option.id === selectedKabupaten.value
        );

        formStore.setFormData({ selectedKabupaten: currentRegency.name });
      }

      if (district) {
        await fetchLocation("village", district);

        const currentDistrict = locationData.districtsOptions.find(
          (option) => option.id === selectedKecamatan.value
        );

        formStore.setFormData({ selectedKecamatan: currentDistrict.name });
      }

      if (village) {
        const currentVillage = locationData.villagesOptions.find(
          (option) => option.id === selectedKelurahan.value
        );

        formStore.setFormData({ selectedKelurahan: currentVillage.name });
      }
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  }
);
</script>
