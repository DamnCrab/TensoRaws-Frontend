<script setup lang="ts">
const items = ref([
  {
    label: '小作文',
    icon: 'pi pi-home'
  },
  {
    label: '种子',
    icon: 'pi pi-star'
  }
]);
</script>

<template>
  <Menubar :model="items">
    <template #start>
      <span class="logo">TensoRaws</span>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <InputText placeholder="还没写等等" type="text" class="w-32 sm:w-auto" />
        <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
      </div>
    </template>
  </Menubar>
</template>

<style scoped lang="less">
@import "assets/fonts/fonts.css";
.logo{
  font-family: 'Yuruka', cursive;
}
</style>
