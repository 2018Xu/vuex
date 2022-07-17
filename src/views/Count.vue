<template>
    <div>
        <h1>——什么时候和我去约会？</h1>
        <!-- 1.v-model.number限定绑定的值转换为number -->
        {{$store.state.day.sum}}
        <select v-model.number="$store.state.day.sum">
            <option value="1">星期一</option>
            <option value="2">星期二</option>
            <option value="3">星期三</option>
            <option value="4">星期四</option>
            <option value="5">星期五</option>
        </select>
        <button @click='add(1)'>点我天数加1</button>
        <button @click='addLater()'>矜持一下再说</button>

        <h1>——当然是{{time}}啦，我好想你</h1>
        
        <GiftsView></GiftsView>

        <h1>——选好啦，就这么{{$store.state.gift.giftsList.length}}件就够了</h1>
        <h1>记住我们碰面的暗号欧</h1>
        <button @click='getAnHao()'>获取暗号</button>
        <p>{{anhao}}</p>
        
       
    </div>
</template>

<script>
    import GiftsView from './GiftsView.vue'
    import {mapState,mapActions} from 'vuex'
    export default {
        name:'Count',
        components: {
            GiftsView,
        },
        data() {
            return{

            }
        },
        computed:{
            // computed不能监听computed的变化,day需要加引号
            ...mapState('day',{he:'sum'}),
            ...mapState('gift',{anhao:'anhaodata'}),
            time(){
                switch(this.$store.state.day.sum){
                    case 1:
                        return '星期一'
                    case 2:
                        return '星期二'
                    case 3:
                        return '星期三'
                    case 4:
                        return '星期四'
                    case 5:
                        return '星期五'
                    default:
                        return '星期一'
                }
            }
        },
        methods: {
            getAnHao(){
                console.log(this.$store);
                this.$store.dispatch('gift/anhao')
            },
             ...mapActions('day',{add:'jia'}),
            // add() {
            //    this.$store.dispatch('jia',1)
            // },
            addLater(){
                setTimeout(()=>{
                    this.sum+=1
                    if(this.sum>4){
                        this.sum = 1
                    }
                }, 2000)
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>