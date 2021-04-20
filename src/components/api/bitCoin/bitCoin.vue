<template>
    <div class="container">
        <div class="row">
            <div class="col text-center my-4">
                <h1 v-cloak>{{ title }}</h1>
                <div class="m-api">
                    <div class="c-bpi">
                        <section v-if="hasError">
                            <h2>Error</h2>
                        </section>
                        <section v-else>
                            <div v-if="loading">
                                <div>
                                    <b-spinner label="Loading..."></b-spinner>
                                    <br />loading...
                                </div>
                            </div>
                            <div v-else>
                                <ul v-cloak>
                                    <li
                                        v-for="(d, index) in bpi "
                                        :key="d.index"
                                    >{{ index }} : {{ d.rate_float | currencyDecimal(2) }}</li>
                                </ul>
                            </div>
                        </section>
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
            hasError: false,
            loading: true,
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
                this.hasError = true
                console.log(error)
            })
            .finally(() => {
                this.loading = false
            })
    },
    filters: {
        currencyDecimal(x, y) {
            return x.toFixed(y)
        },
    },
}
</script>

<style lang="scss" scoped>
    .c-bpi {
        margin: 24px auto;
    }
</style>