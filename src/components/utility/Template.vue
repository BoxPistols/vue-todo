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
                <div class="h3 col text-center">{{ isOk ? 'Yes' : 'No'}}</div>
                <div class="col">
                    <button class="btn btn-primary" @click="toggle">Toggle</button>
                </div>
            </div>

            <div class="row">
                <h1>シンタックス構文</h1>
                <section class="section">
                    <p>*[WIP] v-once is don't move...＆非推奨</p>

                    <h2>v-pre</h2>
                    <div>
                        <span>never change: {{message}}</span>
                    </div>
                    <div>
                        <span v-pre>v-pre / never change: {{message}}</span>
                    </div>
                    <button @click="once">Once</button>
                </section>
                <section class="section">
                    <h2>v-html</h2>
                    <div>
                        <span>This will never change: {{myHtml}}</span>
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
                    <p>numberToLocaleString : {{ price | numberToLocaleString }}</p>
                    <input type="number" v-model.number="price " />
                </section>
            </div>
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
        }
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