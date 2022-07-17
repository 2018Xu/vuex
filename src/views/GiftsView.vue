<template>
    <div>
        <h1>——确定了吗，你希望我带什么来见你</h1>
        <h2>认真选诺，我会精心准备的</h2>
        <input type="text" placeholder="想要什么礼物呢" v-model="needGift"> <button @click="sureBtnHandler()">确定</button>
        <ul>
            <li v-for="gift in giftsList" :key="gift.id">{{gift.name}}</li>
        </ul>
        
    </div>
</template>

<script>
    export default {
        name:'GiftsView',
        data() {
            return {
                //期待的礼物,，先赋值空字符串，生成一个对象数据，否则
                needGift: '',
            }
        },
        methods: {
            sureBtnHandler(){
                const gift = {name:this.needGift, id:Math.random()}
                this.$store.state.gift.giftsList.unshift(gift)
                this.needGift = ''
            }
        },
        computed: {
            giftsList() {
                return this.$store.state.gift.giftsList
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>