import axios from "axios";

// Getting array data for list of locations
export const getProvincies = async () => {
  return axios.get("/api/api-wilayah-indonesia/api/provinces.json");
};

export const getRegencies = async (provinceId) => {
  return axios.get(
    `/api/api-wilayah-indonesia/api/regencies/${provinceId}.json`
  );
};

export const getDistricts = async (regencyId) => {
  return axios.get(
    `/api/api-wilayah-indonesia/api/districts/${regencyId}.json`
  );
};

export const getVillages = async (districtId) => {
  return axios.get(
    `/api/api-wilayah-indonesia/api/villages/${districtId}.json`
  );
};
