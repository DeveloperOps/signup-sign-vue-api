import { createStore } from 'vuex';
import User from './modules/User';
import Auth from './modules/Auth';
import createPersistedState from "vuex-persistedstate";
export default createStore({
  modules: {
    User,
    Auth
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })]
});