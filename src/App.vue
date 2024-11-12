<template>
  <div>
    <!-- Header Section -->
    <Header />

    <!-- Navbar Section -->
    <Navbar />

    <!-- Main Content (This will change depending on the route) -->
    <router-view />

    <!-- Footer Section -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import router from './router';
</script>

<style scoped>
/* Optional: You can add specific styling for the App here */
</style>
