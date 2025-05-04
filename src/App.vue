<script setup>
import Graph from './components/Graph.vue';
</script>

<template>
  <!--
    <nav>
     <RouterLink to="/">Home </RouterLink>
     <RouterLink to="/graph">Graph</RouterLink>
    </nav>
    <RouterView />
  -->
  <main>
    <Graph />
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
