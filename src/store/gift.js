import axios from "axios"

export default {
    namespaced:true,
    state: {
        anhaodata:'',
        giftsList: [
            {
                name: '玫瑰花',
                id: '1'
            }
        ]
    },
    getters: {

    },
    mutations: {
        
    },
    actions: {
        anhao(context){
            console.log('调用了actions中的anhao','state为',context.state);
            axios.get('https://v1.hitokoto.cn/?c=i').then((response)=>{
                console.log(response.data.hitokoto);
                context.state.anhaodata = response.data.hitokoto
                
            },
            (error)=>{console.log(error.message);}) 
        }
    }
}