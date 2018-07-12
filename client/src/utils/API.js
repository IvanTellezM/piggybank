import axios from "axios";

//methods for interacting with API Auth routes  I.T. 

export default {
  login: userData => 
  axios.post("/auth/login",  userData),
  signUp: userData => 
  axios.post('/auth/signup', userData),
  dashboard: token =>
  axios.get('/api/dashboard', {headers: {Authorization: `bearer ${token}`}}),


  getAllUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  getAllTransactions: function() {
    console.log("Front End Chicken!!")
    return axios.get("/api/transactions")
  },
  // getTransaction: function(id) {
  //   return axios.get("/api/transactions/" + id);
  // },
  saveTransaction: function(transactionData) {
    console.log("saving");
    return axios.post("/api/transactions", transactionData)
  },
  deleteTransaction: function(id) {
    return axios.delete("/api/transactions/" + id);
  }

};