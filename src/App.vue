<script setup>
</script>

<template>
   <nav>
    <RouterLink to="/">Home </RouterLink>
    <RouterLink to="/graph">Graph</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  z-index: 200;
}

main {
  z-index: 100;
}
</style>
