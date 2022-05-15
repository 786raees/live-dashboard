import React, { Component } from 'react'
import { Line } from "react-chartjs-2";
import 'chartjs-plugin-datalabels';
import LiveDashboardServices from '../services/LiveDashboardServices';
import {
  Card
} from '@material-ui/core';


export default class Dashboard_ShortStay_Admissions_MonthwiseL1 extends Component{ 
  constructor(props){
    super(props);
    this.state = {
      chartData: {        
        labels: '',
        datasets: [
          {
          label: 'No Of  (Short Stay)',            
          data: '',            
          borderColor: "#800000",
          hoverBorderWidth: 12,
          hoverBorderColor: "red",
          fill: false,
          lineTension: 1,
          borderWidth: 3
          }
        ]       
    },
    }
  }

  componentDidMount(){
    LiveDashboardServices.getmonthwiseShortStayCountsL1().then((res) => {      
      var labels = [];
     // datekey=  res.data.forEach(sub_array => labels.push(sub_array[0]));
      res.data.forEach(sub_array => labels.push(sub_array[0]));   
      //res.data.forEach(sub_array => labels.push(sub_array[0]));               
      var counts = [];
      res.data.forEach(sub_array => counts.push(sub_array[1]));
      
      const newCharData = Object.assign({}, this.state.chartData);    
      newCharData.labels = labels
      newCharData.datasets[0].data = counts
      this.setState({chartData: newCharData});
  })  
  }
 

  render() {
    const options = {
      legend: {
        display: this.props.displayLegend,
        position: this.props.legendPosition,
      },
      scales: {
        xAxes: [
          {
            display: true,
             ticks: {
              fontColor: "blue",
              fontSize: 14,
              fontWeight: 'bold',
            },
                    }
        ],
        yAxes: [{
          type: 'linear',
          display: true,
            ticks: {
              fontColor: "black",
              fontSize: 12,
              fontWeight: 'bold'
            }
        }]
      
      }
    };


    // Bar Chart Properties
    const LineChartLabelOptions = {
      plugins: {
        datalabels: {
          display: false,
          color: 'white',
          backgroundColor:"#4B0082",
          anchor: 'end',          
          align: 'bottom',
          fontSize: 12
       },
      },
    };

     
    return (    
     <div>
     <Card style={{borderColor: 'red', }}>
      <h5 style={{ color: 'white', textAlign: 'center', background: '#800000'  }}>Month wise Short Stay for the defined period</h5>
      <div>
        <Line height ="110px"
          data={this.state.chartData}
          options={Object.assign({}, options,LineChartLabelOptions )}
        />
      </div>
    </Card>
    </div>
   );
}
}

