<template>
    <div class="container">
        <div class="row">
            <div class="col text-center my-4">
                <h1>{{ title }}</h1>
                <div class="m-api">
                    <div class="c-bpi">
                        <ul v-for="(d, index) in bpi " :key="d.index">
                            <li>{{ index }} : {{ d.rate_float}}</li>
                        </ul>
                    </div>
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
            title: 'BitCoin',
            bpi: null,
        }
    },
    mounted() {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => {
                console.log(res.data.bpi.USD.rate_float)
                this.bpi = res.data.bpi
            })
            .catch(error => {
                console.log(error)
            })
    },
}
</script>

<style lang="scss" scoped>
</style>