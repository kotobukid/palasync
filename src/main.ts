import Vue from 'vue'
import App from './App.vue'
import store, {Item} from './store'

Vue.config.productionTip = false;

store.commit('set-value1', 'fuga');

setTimeout(() => {
    store.commit('set-items1', [
        {value: '', label: ''},
        {value: 'hoge', label: 'hoge'},
        {value: 'fuga', label: 'fuga'},
    ] as Item[]);
}, 500);

setTimeout(() => {
    store.commit('set-items2', [
        {value: '', label: ''},
        {value: 'hoge', label: 'HOGE'},
        {value: 'fuga', label: 'FUGA'},
    ] as Item[]);
}, 1500);

setTimeout(() => {
    store.commit('set-value2', 'hoge');
}, 1000);

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
