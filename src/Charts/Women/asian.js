import React, { Component } from "react";
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class AsianWoman extends Component {
  render() {
    return (
       <div>
    <div style={{textAlign: "center", fontSize: "30px"}}> Asian Women </div>
    <PieChart colors={["#B3E3B5", "#FB9985"]} data={[["Experienced Sexual Assault", 15], ["Has Not Experienced Sexual Assault", 100-15]]}/> 
    </div>
    )
  }
};

export default (AsianWoman);