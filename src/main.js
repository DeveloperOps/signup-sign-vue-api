import { createApp }  from 'vue'
import App from './App.vue'
import routes from './router/router';
import store from './store';

const app = createApp(App);
app.use(routes);
app.use(store);
app.config.devtools = true;
app.mount('#app')
