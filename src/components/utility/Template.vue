<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <code class="debug">{{ $data }}</code>
                </div>
            </div>

            <div class="row">
                <p>isOk ? 'Yes' : 'No' / 三項演算子の埋め込み</p>
                <div class="h3 text-center">{{ isOk ? 'Yes' : 'No' }}</div>
                <div class>
                    <button class="btn btn-primary" @click="toggle">Toggle</button>
                </div>
            </div>

            <div class="row">
                <h1>シンタックス構文</h1>
                <section class="section">
                    <p>*[WIP] v-once is don't move...＆非推奨</p>

                    <h2>v-pre</h2>
                    <div>
                        <span>never change: {{ message }}</span>
                    </div>
                    <div>
                        <span v-pre>v-pre / never change: {{ message }}</span>
                    </div>
                    <button @click="once">Once</button>
                </section>
                <section class="section">
                    <h2>v-html</h2>
                    <div>
                        <span>This will never change: {{ myHtml }}</span>
                    </div>
                    <div>
                        <span v-html="myHtml"></span>
                    </div>
                </section>
            </div>

            <div class="row">
                <section class="section">
                    <h2>Filter</h2>
                    <p>toLocal: {{ price | toLocal }}</p>
                    <p>
                        numberToLocaleString :
                        {{ price | numberToLocaleString }}
                    </p>
                    <p>
                        numberToUSD :
                        {{ price | numberToUSD | numberToLocaleString }}
                    </p>
                    <input type="number" v-model.number="price" />
                </section>
            </div>

            <div class="row">
                <section class="section">
                    <h2>URL</h2>
                    <p>
                        def:
                        <a href="https://www.google.com/" target="_blank">Google URL</a>
                        <br />bind:
                        <a :href="url" target="_blank">Google URL</a>
                    </p>
                </section>
            </div>
            <div class="row">
                <section class="section">
                    <h2>Computed</h2>
                    <div class="col">Reverse : {{ reverseWord }}</div>
                </section>
            </div>
        </div>
        <div class="row">
            <section class="section">
                <h2>Get/ Set</h2>
                <div class="col">
                    元値：
                    <input type="number" v-model="basePrice" />
                </div>
                <div class="col">
                    税込：
                    <input type="number" v-model="taxCalc" />
                </div>
                <div class="col">
                    送料：
                    <input type="number" v-model="sendPrise" />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOk: true,
            message: 'World',
            myHtml: 'Hello<span style="color:red;">Inline</span>',
            price: 29800,
            url: 'https://www.google.com/',
            reverseMessage: 'reverseMessage',
            basePrice: 1500,
            sendPrise: 500,
        }
    },
    computed: {
        reverseWord() {
            return this.reverseMessage
                .split()
                .reverse()
                .join('')
        },
        taxCalc: {
            get: function() {
                // return (this.basePrice * 1.1).toFixed(0)
                return parseInt(this.basePrice * 1.1) + parseInt(this.sendPrise)
            },
            set: function(taxCalc) {
                this.basePrice =
                    Math.ceil(taxCalc / 1.1) - Math.ceil(this.sendPrise)
            },
        },
    },
    methods: {
        toggle() {
            this.isOk = !this.isOk
        },
        once() {
            this.message = this.message
                .split('')
                .reverse()
                .join('')
        },
    },
    filters: {
        toLocal(v) {
            return v.toLocaleString()
        },
    },
}
</script>

<style scoped lang="scss">
    @import url('https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css');

    h2 {
        border-left: 4px solid lightsalmon;
        font-size: 1.5em;
        /* color: whitesmoke; */
        padding: 2px 12px;
        margin: 21px 0 8px;
    }
    .container {
        font-size: 20px;
        padding: 2vh 4vw;
    }
    .row {
        display: flex;
        flex-direction: column;
        margin: 20px;
        font-size: 20px;
    }
    section.section {
        margin: 20px teal;
    }
</style>
