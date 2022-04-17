import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { setupStore } from './store/pinia';
import { setupVant } from './vant';
import axios from './axios';
import VueAxios from 'vue-axios';
import '@/utils/viewport'
import '@/utils/eruda'


const app = createApp(App)
app.use(router)
setupStore(app)
setupVant(app)
app.use(VueAxios, axios);
app.mount('#app')
