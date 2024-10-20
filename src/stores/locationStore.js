import { defineStore } from "pinia";
import { 
  getProvincies, 
  getRegencies, 
  getDistricts, 
  getVillages
} from "../services/locationService";

export const useLocationStore = defineStore("locationStore", {
  state: () => ({
    locationData: {
      // Store array data of locations
      provinciesOptions: [],
      regenciesOptions: [],
      districtsOptions: [],
      villagesOptions: [],
    }
  }),
  actions: {
    // Fetches array data of locations using service
    async fetchLocation(type, id = null) {
      try {
        let response;

        switch (type) {
          case "province":
            response = await getProvincies();
            this.locationData.provinciesOptions = response.data;
            break;
          case "regency":
            response = await getRegencies(id);
            this.locationData.regenciesOptions = response.data;
            break;
          case "district":
            response = await getDistricts(id);
            this.locationData.districtsOptions = response.data;
            break;
          case "village":
            response = await getVillages(id);
            this.locationData.villagesOptions = response.data;
            break;
        }
      } catch (error) {
        console.error(`Error fetching ${type}:`, error);
      }
    }
  }
});
