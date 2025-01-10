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
const search  = ref('')
watch(search, async (value) => {
  console.log(value)
  const results = await searchContent(search)
  console.log(results.value)
})
</script>

<template>
  <Menubar :model="items">
    <template #start>
      <span class="logo">TensoRaws</span>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <InputText placeholder="还没写等等" type="text" class="w-32 sm:w-auto" size="small" v-model="search" />
        <nav @click="$colorMode.preference = $colorMode.preference === 'dark' ? 'light' : 'dark'" >
          <Icon name="ph:sun" v-if="$colorMode.preference === 'light'" />
          <Icon name="ph:moon" v-else />
        </nav>
        <Avatar image="" shape="circle" />
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
