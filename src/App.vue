<template>
    <div id="app">
        <!-- <code class="debug">
        {{ $data }}
        </code>-->
        <!-- <input type="checkbox" name="hoge" id="hoge" v-model="isDone" />
        <label for="hoge">hoge</label>-->

        <div class="flex center">
            <img width="60px" src="./assets/logo.png" />
        </div>
        <!-- <ToDo /> -->
        <!-- <BitCoin /> -->
        <!-- <Dentaku /> -->
        <Template />
    </div>
</template>

<script>
// import ToDo from './components/todo/ToDo'
// import Dentaku from './components/dentaku/dentaku'
// import BitCoin from './components/api/bitCoin/bitCoin'
import Template from './components/utility/Template'

export default {
    name: 'App',
    data() {
        return {
            // isDone: false,
        }
    },
    components: {
        // ToDo,
        // Dentaku,
        // BitCoin,
        Template,
    },
}
</script>

<style lang="sass" scoped>
@import url("https://bootstrapbuildspace.sfo2.cdn.digitaloceanspaces.com//NYsiLXJhQPZL/avwgbGyXdigf/bootstrap.min.css")

#app
    max-width: 1440px
    margin: 20px auto
    padding: 4vh 8vw
    font-family: "Avenir", Helvetica, BIZ UDPゴシック, sans-serif
    font-size: 1em
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: lighten(#2c3e50, 10%)
</style>
