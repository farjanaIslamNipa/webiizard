<template>
  <nav class="bg-brand">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-2 items-center">
        <div class="col-span-3">
          <router-link to="{name: 'Home'}">
            <img src="../assets/images/global/brand-logo.png" class="h-9" alt="">
          </router-link>
        </div>
        <div class="col-span-9">
          <div class="flex justify-between items-center w-full pl-8">
            <div class="flex items-center gap-6">
              <router-link to="/" class="menu-link" active-class="active-menu">Home</router-link>
              <router-link to="#" class="menu-link">Web Solution</router-link>
              <router-link to="#" class="menu-link">Projects</router-link>
              <router-link to="#" class="menu-link">About Us</router-link>
              <router-link to="#" class="menu-link">Contact Us</router-link>
            </div>
            <div class="flex gap-2 items-center">
              <p class="text-white text-sm">Find Us:</p>
              <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:01700557663" class="text-white text-sm">01700557663</a>
              </div>
              <a href="#" target="_blank" hover:opacity-50><img src="/images/facebook.svg" alt=""></a>
              <a href="#" target="_blank" hover:opacity-50><img src="/images/linkedin.svg" alt=""></a>
            </div>
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
