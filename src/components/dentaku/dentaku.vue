<template>
    <div class="container">
        <div class="row">
            <div class="col text-center my-4">
                <h1>{{ title }} Dentaku</h1>
                <div class="m-api">
                    <div class="c-bpi">{{ bpi }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            title: 'Hello',
            bpi: 'Hi',
        }
    },
    mounted() {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => {
                console.log(res.data.bpi)
            })
    },
}
</script>

<style lang="scss" scoped>
</style>