<script setup lang="ts">
import tableStatus from "../../components/dhb/TableStatus.vue";
import { StatusCards } from "../../interfaces/status.cards.type";
import { useCounterStore } from '../../stores/user.store'
import { storeToRefs } from 'pinia';
const store = useCounterStore()
const { dataModal } = storeToRefs(store)

const props = defineProps({
  isOpen: Boolean,
});
</script>
<template>
  <div class="modal-overlay z-50" v-if="props.isOpen">
    <div class="modal text-left">
      
      <div class="header text-left bg-gray-300 rounded-lg flex">
        <div :class="{'bg-white': true}">General</div> 
        <div>Oferta comercial</div>
      </div>

      <div class="offer">
        {{ dataModal.progress.category }}
        |
        Cita agendada
        <tableStatus :status="(dataModal.status as StatusCards)"></tableStatus>
      </div>

      <div class="p-10 pt-2">
        <h6 class="text-left">Informacion personal</h6>

        <div class="grid grid-cols-12 grid-rows-3">
          <p class="col-span-1">Nombre:</p>
          <p class="col-span-3">
            <strong>{{ dataModal.name }}</strong>
          </p>
          <p class="col-span-1">Celular:</p>
          <p class="col-span-3">
            <strong>{{ dataModal.phone }}</strong>
          </p>
          <p class="col-span-4"></p>
          <p class="col-span-1">Fecha nacimiento:</p>
          <p class="col-span-3">
            <strong>{{ dataModal.date }}</strong>
          </p>
          <p class="col-span-1">Correo:</p>
          <p class="col-span-3">
            <strong>{{ dataModal.email }}</strong>
          </p>
          <p class="col-span-4"></p>
          <p class="col-span-1">RFC:</p>
          <p class="col-span-3">
            <strong>{{ dataModal.rfc }}</strong>
          </p>
          <p class="col-span-1">Dirección:</p>
          <p class="col-span-3">
            <strong>{{ dataModal.address }}</strong>
          </p>
        </div>

        <hr />

        <div class="grid grid-cols-12 grid-rows-3 my-5">
          <p class="col-span-1">Produto:</p>
          <p class="col-span-3"><strong> Electrónico</strong></p>
          <p class="col-span-1">Estado</p>
          <p class="col-span-3"><strong> Nuevo León </strong></p>
          <p class="col-span-4"></p>
          <p class="col-span-1">Sub Producto: &nbsp; &nbsp; &nbsp;</p>
          <p class="col-span-3"><strong>IMSS</strong></p>
          <p class="col-span-1">Banco:</p>
          <p class="col-span-3"><strong>Banorte</strong></p>
          <p class="col-span-4"></p>
          <p class="col-span-1">Tipo Nómina</p>
          <p class="col-span-3"><strong>Jubilado</strong></p>
          <p class="col-span-1">Sucursal:</p>
          <p class="col-span-3"><strong>Escobedo</strong></p>
          <p class="col-span-4"></p>
          <p class="col-span-1">Operación</p>
          <p class="col-span-3"><strong>Crédito Nuevo</strong></p>
          <p class="col-span-1">Promotor:</p>
          <p class="col-span-3">
            <strong>Pamela Cheves García (81 10375 28740)</strong>
          </p>
        </div>

        <div class="text-right" @click="$emit('isOpen', false)">
          <button>Cerrar</button>
        </div>

        <div class="close" @click="$emit('isOpen', false)">
          <p class="text-2xl"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.offer{
  padding: 0.8rem;
  width: 250px;
  font-size: 0.8rem;
  position: absolute;
  right: 0;
}
.header > div{
  padding: 10px 10px;
  cursor: pointer;
  border-top-left-radius: 8px;
  color: rgb(15, 104, 48);
  font-weight: bold;
  font-size: 16px;
}

.col-span-1,
.col-span-2,
.col-span-3,
.col-span-4,
.col-span-5,
.col-span-6,
.col-span-7 {
  margin-bottom: 0px;
  margin-top: 0px;
}

p.col-span-1,
p.col-span-2,
p.col-span-3,
p.col-span-4,
p.col-span-5,
p.col-span-6 {
  font-size: 0.8rem;
}
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  transition: all 2s;
  align-items: center;
}

.modal {
  background-color: white;
  height: auto;
  width: 80%;
  /* padding: 20px 40px; */
  border-radius: 7px;
  position: relative;
}
.close::before {
  margin: 8px;
  padding: 0px;
  content: "x";
  border-radius: 50px;
  background-color: #bfbfbf99;
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  font-weight: bolder;
  width: 30px;
  height: 30px;
  color: black;
  font-size: 18px;
  text-align: center;
}

.close-img {
  width: 25px;
}
.close p {
  margin-top: 0;
  margin-right: 0px;
  margin-bottom: 0;
  padding: 0;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: rgb(59, 135, 87);
  width: 80px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 8px;
  margin-top: 10px;
}
</style>
