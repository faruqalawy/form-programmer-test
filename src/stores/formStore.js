import { defineStore } from "pinia";

export const useFormStore = defineStore('form', {
    state: () => ({
        formData: {
            nama: '',
            nik: '',
            no_kk: '',
            umur: 0,
            jenis_kelamin: '',
            foto_KTP: '',
            foto_KK: '',
            selectedProvinsi: '',
            selectedKabupaten: '',
            selectedKecamatan: '',
            selectedKelurahan: '',
            alamat: '',
            rt: '',
            rw: '',
            penghasilan_pra_pandemi: 0,
            penghasilan_pos_pandemi: 0,
            alasan: '',
            alasan_lain: ''
        }
    }),
    actions: {
        setFormData(data) {
            if (data.umur !== undefined) data.umur = Number(data.umur);
            if (data.penghasilan_pra_pandemi !== undefined) data.penghasilan_pra_pandemi = Number(data.penghasilan_pra_pandemi);
            if (data.penghasilan_pos_pandemi !== undefined) data.penghasilan_pos_pandemi = Number(data.penghasilan_pos_pandemi);
            this.formData = { ...this.formData, ...data };
        },
        clearFormData() {
            this.formData = {
                nama: '',
                nik: '',
                no_kk: '',
                umur: 0,
                jenis_kelamin: '',
                foto_KTP: '',
                foto_KK: '',
                alamat: '',
                rt: '',
                rw: '',
                alasan: '',
                selectedProvinsi: '',
                selectedKabupaten: '',
                selectedKecamatan: '',
                selectedDesa: '',
                penghasilan_pra_pandemi: 0,
                penghasilan_pos_pandemi: 0,
            };
        }
    }
})