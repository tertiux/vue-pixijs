<!-- LanguageSwitcher.vue -->

<template>
    <div>
      <button @click="changeLanguage('en')">English</button>
      <button @click="changeLanguage('zh')">中文</button>
    </div>
</template>

<script>
export default {
methods: {
    changeLanguage(locale) {
    this.$i18n.locale = locale;
    },
},
};
</script>
  