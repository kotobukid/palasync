import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export declare type Item = {
    value: string,
    label: string
}

export declare type State = {
    items: Item[],
    value1: string,
    value2: string
}

export default new Vuex.Store({
    state: {
        items: [],
        value1: '',
        value2: '',
    } as State,
    mutations: {
        'set-items'(state: State, items: Item[]) {
            state.items = items;
        },
        'set-value1'(state: State, v: string) {
            state.value1 = v;
        },
        'set-value2'(state: State, v: string) {
            state.value2 = v;
        }
    },
    actions: {},
    modules: {},
    getters: {
        value1(state: State): string {
            return state.value1;
        },
        value2(state: State): string {
            return state.value2;
        },
        items(state: State): Item[] {
            return state.items;
        }
    }
})
