<template>
  <nav class="bg-brand">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <div>
          <router-link to="{name: 'Home'}">
            <img src="../assets/images/global/brand-logo.png" class="h-9" alt="">
          </router-link>
        </div>
        <div>
          <div class="flex items-center gap-6">
            <router-link to="/" class="menu-link" active-class="active-menu">Home</router-link>
            <router-link to="#" class="menu-link">Web Solution</router-link>
            <router-link to="#" class="menu-link">Projects</router-link>
            <router-link to="#" class="menu-link">About Us</router-link>
            <router-link to="#" class="menu-link">Contact Us</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped>

</style>
