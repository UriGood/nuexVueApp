<script lang="ts" setup>
import { evaluations } from "../../data/evaluations.data";
import type { evaluation } from "../../interfaces/evaluation.type";
import tableStatus from "../../components/dhb/TableStatus.vue";
import { StatusCards } from "../../interfaces/status.cards.type";
import progressComponent from "../dhb/progressComponent.vue";
import type { progressType } from "../../interfaces/evaluation.type";
import modalComponent from "./modalComponent.vue";
import { useCounterStore } from "../../stores/user.store";

const store = useCounterStore();
const { setDataModal } = store;

let isOpenModal = ref(false);
let evaluationsUser = ref(evaluations);
let inputValue = ref("");
let filteredEvaluations: evaluation[] = [];

function writing() {
  filteredEvaluations = [];
  let textInput: string = inputValue.value?.toLowerCase() || "";
  let filteredByName: evaluation[];

  if (inputValue.value == "") return (evaluationsUser.value = evaluations);

  if (inputValue.value != "") {
    let evalFilter: evaluation[] = evaluations as evaluation[];
    filteredByName = evalFilter.filter(
      ({ name, status, phone, progress, date, _id }) => {
        return (
          name.toLowerCase().includes(textInput) ||
          status.toLowerCase().includes(textInput) ||
          phone.toLowerCase().includes(textInput) ||
          progress.category.toLowerCase().includes(textInput) ||
          date.toLowerCase().includes(textInput) ||
          _id.toString().includes(textInput)
        );
      }
    );

    filteredEvaluations.push(...filteredByName);
    evaluationsUser.value = filteredEvaluations;
  }
}

function prepareModal(data: evaluation) {
  isOpenModal.value = true;
  setDataModal(data);
}
</script>

<template>
  <div
    class="py-8 px-5 lg:px-12 bg-white w-full rounded-md my-5 drop-shadow "
  >
    <div class="m-2 lg:m-0 overflow-x-scroll lg:overflow-x-auto">
      <p class="text-xl font-bold py-3">Mis Evaluaciones</p>

      <label class="relative block px-1">
        <input
          class="w-full sm:w-2/5 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-green-100 focus:ring-offset-green-600 focus:ring-1 sm:text-sm"
          placeholder="Buscar"
          type="text"
          name="search"
          @keyup="writing()"
          v-model="inputValue"
        />
      </label>

      <table class="table-auto text-left w-full my-10">
        <thead>
          <tr class="border-b-2">
            <th>Id</th>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Celular</th>
            <th>Progreso</th>
            <th>Estatus</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in evaluationsUser" :key="item._id">
            <td class="py-3">{{ item._id }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.phone }}</td>
            <td>
              <progressComponent :pgrs="(item.progress as progressType)" />
            </td>
            <td><tableStatus :status="(item.status as StatusCards)" /></td>
            <td>
              <span
                @click="prepareModal(item as evaluation)"
                class="cursor-pointer"
                >
                <icon name="bi:eye-fill" color="gray" size="20"/>
                &nbsp;
                <icon name="bi:pencil-square" color="gray" size="20"/>
                </span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <modalComponent
    :isOpen="isOpenModal"
    @is-open="isOpenModal = false"
  ></modalComponent>
</template>

<style scoped>
td {
  font-size: 0.75rem;
}
</style>
