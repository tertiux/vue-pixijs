import '@mdi/font/css/materialdesignicons.css';

<template>
  <div id="app">
    <!-- <PixiComponent /> -->
    <PixiComponent />

    <!-- Language Switcher -->
    <LanguageSwitcher />
    
    <!-- Header -->
    <Header />

    <!-- Sidebar -->
    <Sidebar />
    
    <!-- Header -->
    <div class="header"></div>
    
    <!-- Content Grip -->
    <div class="content">
      <div class="loader">
        <div class="loader-circle"></div>
      </div>
    </div>
  </div>
</template>

<script>

import LanguageSwitcher from "./components/Header.vue"
import Header from "./components/Header.vue"
import Sidebar from "./components/Sidebar.vue"
import PixiComponent from "./components/PixiComponent.vue"

export default {
  components: {
    LanguageSwitcher,
    Header,
    Sidebar,
    PixiComponent,
  }

  ,
  // Your component logic goes here
};

</script>