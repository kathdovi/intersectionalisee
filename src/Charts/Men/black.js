import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class BlackMan extends Component {
  render() {
    return (
       <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Black Men </div>
    <PieChart colors={["#B3E3B5", "#FB9985"]} data={[["Experienced Sexual Assault", 12], ["Has Not Experienced Sexual Assault", 100-12]]}/> 
    </div>
    )
  }
};

export default (BlackMan);