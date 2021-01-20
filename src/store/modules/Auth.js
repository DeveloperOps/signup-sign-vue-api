import axios from 'axios';
const state = {
  isAuth: false,
  isLogin: false,
  user: null
};

const getCurrUser = async(token) => {
  try {
    const res = await axios.get('http://localhost:5000/api/get-user',{headers: {'x-auth-token': token }});
    return res;
  } catch (error) {
    console.log(error);
  }
};

const getters = {
  token: state => state.token,
  isAuth: state => state.isAuth,
  isLogin: state =>state.isLogin,
  curruser: state => state.user
};
const actions = {
  async signUpUser({ commit }, data) {
      const res = await axios.post('http://localhost:5000/api/signup' , {...data});
      if(res.status === 200) {
        const now = new Date();
        const token = {
          value: res.data.token,
          expiry: now.getTime() + 86400000
        }
        localStorage.setItem("token", JSON.stringify(token));
        const user = await getCurrUser(res.data.token);
        commit('setUser' , user);
        commit('setIsAuthState' , true);
      }
  },
  async signInUser({commit} , data) {
    const res = await axios.post('http://localhost:5000/api/signin' , {...data});
    console.log(commit,res)
    if(res.status === 200) {
      const now = new Date();
      const token = {
        value: res.data.token,
        expiry: now.getTime() + 86400000
      }
      localStorage.setItem("token", JSON.stringify(token));
      const user = await getCurrUser(res.data.token);
      commit('setUser' , JSON.stringify(user));
      commit('setIsLoginState' , true);
    }
  }
};
const mutations = {
  setIsAuthState: (state , isAuth) => { state.isAuth = isAuth },
  setIsLoginState: (state, isLogin) => { state.isLogin = isLogin },
  setUser: (state , user) => { state.user = user }
};
export default {
  state,
  getters,
  actions,
  mutations
};