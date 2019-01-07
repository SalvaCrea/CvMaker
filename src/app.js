import Vue from 'vue/dist/vue.js';

import Compagny from 'src/vuejs/components/compagny';
import HeaderCv from 'src/vuejs/components/header';

import mediaMixin from 'src/vuejs/mixins/media';

Vue.config.devtools = true;

Vue.mixin(mediaMixin);

const app = new Vue({
    el: "#app",
    components: {
        HeaderCv,
        Compagny
    }
});

console.log(app)