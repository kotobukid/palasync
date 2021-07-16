<template>
    <div id="app">
        <div class="wrapper">
            <label class="mb10">
                <span>Value1: {{ value1 }}</span>
                <select v-model="value1">
                    <option v-for="i in items1" :value="i.value">{{ i.label }}</option>
                </select>
            </label>
            <br>
            <label>
                <span>Value2: {{ value2 }}</span>
                <select v-model="value2">
                    <option v-for="i in items1" :value="i.value">{{ i.label }}</option>
                </select>
            </label>
        </div>
        <div class="wrapper">
            <label class="mb10">
                <span>Value1: {{ value1 }}</span>
                <select v-model="value1">
                    <option v-for="i in items2" :value="i.value">{{ i.label }}</option>
                </select>
            </label>
            <br>
            <label>
                <span>Value2: {{ value2 }}</span>
                <select v-model="value2">
                    <option v-for="i in items2" :value="i.value">{{ i.label }}</option>
                </select>
            </label>
        </div>
        <br>
        <div class="item">{{ items1 }}</div>
        <div class="item">{{ items2   }}</div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import {Item} from "@/store";

@Component({
    components: {
        HelloWorld,
    },
})
export default class App extends Vue {

    get value1(): string {
        return this.$store.getters['value1'];
    }

    set value1(v: string) {
        this.$store.commit('set-value1', v);
    }

    get value2(): string {
        return this.$store.getters['value2'];
    }

    set value2(v: string) {
        this.$store.commit('set-value2', v);
    }

    get items1(): Item[] {
        return this.$store.getters['items1'];
    }

    get items2(): Item[] {
        return this.$store.getters['items2'];
    }
}
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    font-size: 3rem;
}

select {
    font-size: 3rem;
    width: 300px;
}

span {
    display: inline-block;
    width: 400px;
    text-align: left;
}

label {
    display: block;
}

.mb10 {
    margin-bottom: 10px;
}

.wrapper {
    border: 1px solid grey;
    margin-bottom: 10px;
    padding: 20px;
    width: 1000px;
}

.item {
    font-size: 1rem;
}
</style>
