import React, { Component } from "react";
import API from "../../utils/API";
import {Jumbotron } from "react-bootstrap";

class Alltransactions extends Component {
  state = {
    transactions: [],
  };

  componentDidMount() {
    this.loadTransactions();
  }

  loadTransactions = () => {
    API.getTransactions()
      .then(res =>
        this.setState({ transactions: res.data, title: "", category: "", amount: "", note: "" })
      )
      .catch(err => console.log(err));
  };
  deleteTranactions= id => {
    API.deleteTranactions(id)
      .then(res => this.loadTranactions())
      .catch(err => console.log(err));
  };
render() {
  return(
    <Jumbotron>
      {this.state.transactions.title},
      {this.state.transactions.category},
      {this.state.transactions.amount},
      {this.state.transactions.note}
      {/* date? */}
    </Jumbotron>
  )
}
}

export default Alltransactions;