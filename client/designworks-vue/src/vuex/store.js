import { createStore } from 'vuex'


const store = createStore({
    state() {
        return {
            user_id: 74,
            user_name: 'dundundun1'
        }
    },
    mutations: {
        initUser(state, user) {
            state.user_id = user.user_id;
            state.user_name = user.user_name;
        }
    }
})
export default store;

