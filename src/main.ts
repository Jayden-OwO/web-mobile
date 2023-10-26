import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import '@/styles/index.scss';
import 'vant/es/toast/style';

const app = createApp(App);

app.use(createPinia()).use(router).mount('#app');
