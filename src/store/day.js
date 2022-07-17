export default {
    namespaced:true,
    state: {
        sum: 1,
    },
    getters: {

    },
    mutations: {
        JIA(state, value) {
            console.log('调用了mutations中的JIA方法，第一个参数', state, '第二个参数', value);
            state.sum += value
            if (state.sum > 5) state.sum = 1
        }
    },
    actions: {
        jia(context, value) {
            console.log('调用了actions中jia方法,第一个参数-', context, '第二个参数', value);
            context.commit('JIA', value)
        }
    },
}