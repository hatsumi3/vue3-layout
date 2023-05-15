import { createApp } from 'vue';
//import './style.css';
import './assets/tailwind.css';
import App from './App.vue';
import { worker } from './mock';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

createApp(App).mount('#app');
