import { defineStore } from "pinia";
import type { evaluation } from '../interfaces/evaluation.type'
export const useCounterStore = defineStore("dataUser", {
  state: () => ({
    dataModal: {
        _id: "", 
        date: "",
        name: "",
        phone: "",
        progress: { category: "", progress: 0},
        status: "",
        icon: "",
        email:"",
        rfc: "",
        address: ""
    }
  }),

  getters: {
  },

  actions:{
    setDataModal(dataModal:any){
        this.dataModal = dataModal;
    }
  }
});
