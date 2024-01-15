<script lang="ts" setup>
import { evaluations } from "../../data/evaluations.data";
import type { evaluation } from '../../interfaces/evaluation.type'
import tableStatus from '../../components/dhb/TableStatus.vue'
import { StatusCards } from '../../interfaces/status.cards.type'
import progressComponent from '../dhb/progressComponent.vue'
import type{ progressType } from '../../interfaces/evaluation.type'

let evaluationsUser = ref(evaluations);
let inputValue = ref('');
let filteredEvaluations: evaluation[] = [];

function writing() {
  filteredEvaluations = [];
  let textInput: string = inputValue.value?.toLowerCase() || "";
  let filteredByName: evaluation[];

  //LLena el array si el campo es vacio
  if (inputValue.value == "") return (evaluationsUser.value = evaluations);

  if (inputValue.value != "") {
    let evalFilter:evaluation[] = evaluations as evaluation[];
    filteredByName = evalFilter.filter(({ name, status, phone, progress, date, _id }) =>{
      return name.toLowerCase().includes(textInput) 
      || status.toLowerCase().includes(textInput) 
      || phone.toLowerCase().includes(textInput) 
      || progress.category.toLowerCase().includes(textInput)
      || date.toLowerCase().includes(textInput) 
      || _id.toString().includes(textInput)
    });
    
    filteredEvaluations.push(...filteredByName);
    evaluationsUser.value = filteredEvaluations;
  }
}
</script>

<template>
  <div class="py-8 px-12 bg-white w-full rounded-md my-5 drop-shadow">
    <p class="text-xl font-bold py-3">Mis Evaluaciones</p>

    <label class="relative block">
      <span class="sr-only">Search</span>
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
      </span>
      <input
        class="w-2/5 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-100 focus:ring-offset-green-600 focus:ring-1 sm:text-sm"
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
        <tr
          v-for="{
            _id,
            date,
            name,
            icon,
            phone,
            status,
            progress,
          } in evaluationsUser"
          :key="_id"
        >
          <td class="py-3">{{ _id }}</td>
          <td>{{ date }}</td>
          <td>{{ name }}</td>
          <td>{{ phone }}</td>
          <td> 
            <progressComponent :pgrs="(progress as progressType)"/>
           </td>
          <td><tableStatus :status="(status as StatusCards)"/> </td>
          <td> Ver <br/> editar </td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
td{
  font-size: 0.75rem;
}
</style>
