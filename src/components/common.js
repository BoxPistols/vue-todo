import Vue from 'vue'

Vue.filter('numberToLocaleString', function (val) {
    return val.toLocaleString()
})

Vue.filter('numberToUSD', function (jpy) {
    return (jpy / 94).toFixed(2)
})
