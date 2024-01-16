<template>
  <div class="container mx-auto my-5 justify-between flex items-end">
    <div>
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <p class="text-zinc-400">
        Buenos días <span class="activated">Juan Pedro</span>
      </p>

      <!-- <nuxtLink to="/">
        <p class="text-zinc-400 my-3">Cerrar sesión</p>
      </nuxtLink> -->
    </div>

    <div class="bg-white px-2 py-1 h-10 rounded-md flex items-center">
      <p class="dates">Todo</p>
      <p class="dates">Hoy</p>
      <p class="dates">
        <strong class="underline underline-offset-4">Mes </strong>
      </p>
      <p class="dates">Año</p>
      <p class="cursor-pointer">
        <icon color="gray" size="25" name="quill:meatballs-v"></icon>
      </p>
    </div>
  </div>
</template>

<style scoped>
.dates {
  padding: 0px 6px;
  cursor: pointer;
}
</style>
