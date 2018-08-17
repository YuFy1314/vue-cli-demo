import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { MessageBox, Message, Notification } from 'element-ui';

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
