<script setup lang="ts"></script>

<template>
  <div
    class="container mx-auto justify-center items-center flex"
    style="height: 100vh"
  >
    <div
      class="login text-center bg-white py-5 px-8 rounded-lg drop-shadow w-full sm:w-1/3 mx-3"
    >
      <h1 class="text-2xl font-bold">Bienvenido</h1>
      <p class="text-xs my-2">Ingresa tu correo electronico y tu contraseña</p>

      <label class="block my-5">
        <span class="block text-left text-sm font-medium text-slate-700"
          >Correo electrónico</span
        >
        <input
          type="text"
          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </label>

      <label class="block my-5">
        <span class="block text-left text-sm font-medium text-slate-700"
          >Contraseña</span
        >
        <input
          type="password"
          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </label>

      <nuxtLink to="/dashboard">
        <button
          class="p-3 rounded-3xl w-full bg-gray-300 hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
        >
          Ingresar
        </button>
      </nuxtLink>
    </div>
  </div>
</template>
