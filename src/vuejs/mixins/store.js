import store from 'src/services/store';

export default {
    data: function () {
        return { store: store };
    },
    methods: {
        getStore() {
            return this.store;
        }
    }
};