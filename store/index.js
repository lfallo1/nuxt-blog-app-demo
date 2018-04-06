import Vuex from "vuex";
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      async nuxtServerInit(vuexContext, context) {
        let res = await axios.get('http://localhost:8080/api/post')
        vuexContext.commit('setPosts', res.data)
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      postById: (state) => (id) =>{
        const post = state.loadedPosts.filter(p=>p.id == id);
        return post ? post[0] : {}
      }
    }
  });
};

export default createStore;
