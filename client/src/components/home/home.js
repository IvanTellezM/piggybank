import React from 'react';
import Layout from '@material-ui/core/Layout'
import {Navlink} from "react-router-dom";

const Home =() =>{
  return(
    <div>
    <p align='center' >Manage your personal finance and achieve your financial goals.
        Keep track of every penny with in-depth report. Plan and save for your next goal in life!</p>
    </div>
  )
}
      <div style={{height: '300px', position: 'relative'}}>
          <Layout style={{background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuiIl6GYrBCMJOnSYtp80-wMWvB8ZcUUSF4OTyfLVwmvo2Ugna) center / cover'}}>
              <Header transparent title="Piggy Bank" style={{color: 'white'}}>
                  <Navigation>
                      <a href="#">Home</a>
                      <a href="#">Sign In</a>    
                  </Navigation>
              </Header>
              <Drawer Piggy="Title">
                  <Navigation>
                      <a href="#">Add Expense</a>
                      <a href="#">Expense</a>
                      <a href="#">Calendar</a>
                      <a href="#">Resource</a>
                  </Navigation>
              </Drawer>
              <Content />
          </Layout>
</div>


export default Home;