import Vue from 'vue'

Vue.filter('numberToLocaleString', function(val) {
    return val.toLocaleString()
})
