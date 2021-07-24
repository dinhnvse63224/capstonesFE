import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBqWnSMTsWkRjNpX6EwMHf04Y25RseE7nE",
  authDomain: "capstone-9b026.firebaseapp.com",
  projectId: "capstone-9b026",
  storageBucket: "capstone-9b026.appspot.com",
  messagingSenderId: "241469982570",
  appId: "1:241469982570:web:cf3088ae1138185058c713",
  measurementId: "G-9PC7K1YRM2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
