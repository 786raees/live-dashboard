import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'chartjs-plugin-datalabels';
import { Card } from '@material-ui/core';
import LiveDashboardServices from '../services/LiveDashboardServices';

export default class Admissions_datewiseL1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {        
        labels: '',
        datasets: [
          {
            label: "No Of Admissions",            
            data: '',            
            backgroundColor: [
              '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
              '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
              '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
              '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
              '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
              '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
              '#6610f2', '#6f42c1', '#e83e8c', '#20c997', '#17a2b8'
            ],
            borderWidth: 1,
            borderColor: "#777",
            hoverBorderWidth: 3,
            hoverBorderColor: "#000",
            fill: false
          }
        ]       
    },
    clickedElement: '',   
    }
    this.getElementAtEvent = this.getElementAtEvent.bind(this);
    this.ViewIPD2 = this.ViewIPD2.bind(this);    
  }

  componentDidMount(){
    LiveDashboardServices.getmonthwiseIPDCountsL1().then((res) => {      
      var labels = [];
     // datekey=  res.data.forEach(sub_array => labels.push(sub_array[0]));
      res.data.forEach(sub_array => labels.push(sub_array[0]));   
      //res.data.forEach(sub_array => labels.push(sub_array[0]));               
      var counts1 = [];
      res.data.forEach(sub_array => counts1.push(sub_array[1]));

      const newCharData = Object.assign({}, this.state.chartData);    
      newCharData.labels = labels
      newCharData.datasets[0].data = counts1
      this.setState({chartData: newCharData});
  })  
  }
 
  getElementAtEvent = element => {
    if (!element.length) return
    const { _index: index } = element[0]
    this.setState({
      clickedElement: `${this.state.chartData.labels[index]}`
    }, () => this.ViewIPD2(this.state.clickedElement, this.state.month_name));
  }


  ViewIPD2(month_name) {
    this.props.history.push({
      pathname: '/IPDL2',
      state: { month_name: month_name }
    })
  }
 

  render(){    
    const options = {
     /* legend: {
        display: this.props.displayLegend,
        position: this.props.legendPosition,
      },*/
      scales: {
        xAxes: [
          {
            display: true,
             ticks: {
              fontColor: "blue",
              fontSize: 18,
              fontWeight: 'bold',
            },
                    }
        ],
        yAxes: [{
          type: 'linear',
          display: true,
            ticks: {
              fontColor: "black",
              fontSize: 18,
              fontWeight: 'bold',
                beginAtZero:true
            }
        }]
      
      }
    };


    // Bar Chart Properties
    const BarChartLabelOptions = {
      plugins: {
        datalabels: {
          display: true,
          color: 'white',
          backgroundColor:"#4B0082",
          anchor: 'end',          
          align: 'bottom',
          fontSize: 30,
          fontWeight: 'bold'
       },
      },
    };


 
    
    return (      
      <Card className="card" border="info" style={{ marginLeft: '180px', marginRight: '100px' }}>
      <div className="App">
      <h2 style={{ color: 'white', textAlign: 'center', background: 'blue' }}>Month wise IPD Admissions for the defined period</h2>
        <Bar height="120px"
          data={this.state.chartData}
          options= {Object.assign({}, options, BarChartLabelOptions)}
          getElementAtEvent={this.getElementAtEvent}
        />      
      </div>
      </Card>
    )
  }
}

