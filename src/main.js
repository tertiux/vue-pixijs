// main.js

import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';

import './style.css'; // Add your global styles
import './index.scss'; // Add your global styles

createApp(App)
  .use(i18n) // Use the i18n plugin
  .mount('#app');
