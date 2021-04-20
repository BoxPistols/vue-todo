<template>
    <div class="container">
        <div class="row">
            <div class="col text-center my-4">
                <h1>{{ title }}</h1>
                <div class="m-api">
                    <div class="c-bpi">
                        <ul>
                            <li
                                v-for="(d, index) in bpi "
                                :key="d.index"
                            >{{ index }} : {{ d.rate_float | currencyDecimal(2) }}</li>
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