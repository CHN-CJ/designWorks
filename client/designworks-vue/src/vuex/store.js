import { createStore } from 'vuex'


const store = createStore({
    state() {
        return {
            user_id: JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user"))[0].user_id : "",
            user_name: JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user"))[0].user_name : "",
            netWork: "localhost:8080"
        }
    },
    mutations: {
        initUser(state, user) {
            state.user_id = user.user_id;
            state.user_name = user.user_name;
            console.log(state);
            window.localStorage.setItem("user", JSON.stringify([{ user_id: state.user_id, user_name: state.user_name }]));
        },
        initnetWork(state, netWork) {
            state.netWork = netWork;
        }
    }
})
export default store;

