import Vue from 'vue/dist/vue.js';

import mainView from 'src/vuejs/view/main';

import mediaMixin from 'src/vuejs/mixins/media';
import storeMixin from 'src/vuejs/mixins/store';

Vue.config.devtools = true;

Vue.mixin(mediaMixin);
Vue.mixin(storeMixin);

const app = new Vue({
    render: h => h(mainView)
}).$mount('#app');

console.log(app);