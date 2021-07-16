import Vue from 'vue'
import App from './App.vue'
import store, {Item} from './store'

Vue.config.productionTip = false

store.commit('set-value1', 'fuga');

setTimeout(() => {
    store.commit('set-items', [
        {value: '', label: ''},
        {value: 'hoge', label: 'hoge'},
        {value: 'fuga', label: 'fuga'},
    ] as Item[]);
}, 500);

new Vue({
    store,
    render: h => h(App),
    mounted() {
        setTimeout(() => {
            this.$store.commit('set-value2', 'hoge');
        }, 1000);
    }
}).$mount('#app')
