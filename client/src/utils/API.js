import axios from "axios";

export default {
  getAllUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  getAllTransactions: function() {
    return axios.get("/api/transactions");
  },
  getTransaction: function(id) {
    return axios.get("/api/transactions/" + id);
  },
  saveTransaction: function(transactionData) {
    console.log("saving");
    return axios.post("/api/transactions", transactionData)
  },
  deleteTransaction: function(id) {
    return axios.delete("/api/transactions/" + id);
  }

};