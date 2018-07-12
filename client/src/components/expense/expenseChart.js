import React, {Component} from 'react';
import {Pie, Bar} from 'react-chartjs-2';
// import API from "../../utils/API";

class Chart extends Component {
  constructor(props){
    super(props)
    this.state = {
      pieChartData:{
        labels: ['Dining', 'Groceries', 'Entertainment', 'Transportation', 'Other'],
        datasets: [
          {
            label: 'spending',
            data: [300,180,390,150,202],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)'
          ]
          }
        ]
      },
      barChartData:{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Month',
            data: [105,69,74,88,94,101,88,90,79,104,90,80,0],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(255, 80, 80, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)'
          ]
          }
        ]
      }
    }
  }

  // componentDidMount() {
  //   this.loadTransactions();
  // }

  // loadTransations(){
  //   API.findAllTransactions(res => {
  //     this.setState()
  //   })
  // }

  render(){
    return (
      <div className="chart">
      <h1 align='center' style={{ fontWeight: "bold", marginBottom: 10, color: "#f2f2f2"}} >Spending Report</h1>
      
      <h2 align='center' style={{marginBottom: 10 , color: "#f2f2f2"}}> Total Spending Breakdown by Category</h2>
        <Pie
          data={this.state.pieChartData}

          options={{ 
            // maintainAspectRatio: false
          }}
        />
      <h2 align='center' style={{ color: "#f2f2f2"}}>Spending Breakdown by Month</h2>
        <Bar
          data={this.state.barChartData}
          options={{ 
            // maintainAspectRatio: false
          }}
        />
      </div>
    )
  }
}

export default Chart;
