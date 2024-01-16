<template>
  <div class="fixed top-0 left-0 right-0 mb-10 z-40">
    <div
      class="bg-white py-2 px-8 flex items-center justify-between mb-5 shadow-md"
    >
      <img src="../assets/logo.png" alt="logo" class="logo" />
      <div class="flex justify-center">
        <h1 class="cursor-pointer">Dashboard</h1>
        &nbsp;
        &nbsp;
        <div class="flex items-center cursor-pointer">
          <icon name="material-symbols:settings-outline"></icon>
          <h1>Configuración</h1>
        </div>
      </div>
      <div class="flex items-center">
        <img src="../assets/logo.png" class="w-10 h-8 p-1" alt="" />
        <div>
          <p class="text-sm">Juan Pedro</p>
          <p class="text-xs">Admin</p>
        </div>
        <div class="cursor-pointer">
          <icon name="material-symbols:arrow-drop-down" color="gray"></icon>
        </div>
        <div class="cursor-pointer">
          <nuxtLink to="/">
          <icon name="material-symbols:account-circle-off" size="25" color="gray"></icon>
          </nuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 50px;
  height: 35px;
}
</style>
