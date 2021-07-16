<template>
    <div id="app">
        <label>
            <span>Value1: {{ value1 }}</span>
            <select :value="value1">
                <option v-for="i in items" :value="i.value">{{ i.label }}</option>
            </select>
        </label>
        <br>
        <label>
            <span>Value2: {{ value2 }}</span>
            <select :value="value2">
                <option v-for="i in items" :value="i.value">{{ i.label }}</option>
            </select>
        </label>
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

    get value2(): string {
        return this.$store.getters['value2'];
    }

    get items(): Item[] {
        return this.$store.getters['items'];
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
}

span {
    display: inline-block;
    width: 180px;
}
</style>
