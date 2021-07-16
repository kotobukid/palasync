import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export declare type Item = {
    value: string,
    label: string
}

export declare type State = {
    items1: Item[],
    items2: Item[],
    value1: string,
    value2: string
}

export default new Vuex.Store({
    state: {
        items1: [],
        items2: [],
        value1: '',
        value2: '',
    } as State,
    mutations: {
        'set-items1'(state: State, items: Item[]) {
            state.items1 = items;
        },
        'set-items2'(state: State, items: Item[]) {
            state.items2 = items;
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
        items1(state: State): Item[] {
            return state.items1;
        },
        items2(state: State): Item[] {
            return state.items2;
        }
    }
})
