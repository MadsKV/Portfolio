<template>
  <nav class="bg-gray-800 text-white p-4">
    <ul class="flex space-x-8">
      <li v-for="item in navItems" :key="item.label">
        <a :href="item.link" :class="item.className">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const navItems = ref ([
  {label: 'Home', link: '#home', className: 'nav-link active'},
  {label: 'About', link: '#About', className: 'nav-link'},
  {label: 'Experience', link: '#Experience', className: 'nav-link'},
  {label: 'Projects', link: '#Projects', className: 'nav-link md:hidden'},
  {label: 'Contact', link: '#Contact', className: 'nav-link'},
]);

</script>

<style scoped>
</style>