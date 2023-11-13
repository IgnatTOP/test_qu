import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/HomePage.vue';
import FormPage from './components/FormPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/form', component: FormPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount('#app');
