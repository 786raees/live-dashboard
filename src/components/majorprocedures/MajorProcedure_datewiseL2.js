import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import LiveDashboardServices from '../services/LiveDashboardServices';
import 'chartjs-plugin-datalabels';
import { Card } from '@material-ui/core';



export default class MajorProcedure_datewisel1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {        
        labels: '',
        datasets: [
          {
            // you can have more than one array of data
            label: "No of Major Procedures",            
            data: '',            
            backgroundColor: '#FF1A66',
            borderWidth: 1,
            borderColor: "#777",
            hoverBorderWidth: 3,
            hoverBorderColor: "#000",
            fill: false
          },
          {
            // you can have more than one array of data
            label: "PMC Requirement",            
            data: '',            
            backgroundColor: 'gray',
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
  this.ViewMajProcL3 = this.ViewMajProcL3.bind(this);    
}

componentDidMount(){
    LiveDashboardServices.getdatewiseMajProcL2(this.props.location.state.month_name).then((res) => {      
      var labels = [];
     // datekey=  res.data.forEach(sub_array => labels.push(sub_array[0]));
      res.data.forEach(sub_array => labels.push(sub_array[0].substr(0,2)));   
      //res.data.forEach(sub_array => labels.push(sub_array[0]));               
      var counts1 = [];
      var counts2 = [];
      res.data.forEach(sub_array => counts1.push(sub_array[1]));
      res.data.forEach(sub_array => counts2.push(sub_array[2]));

      const newCharData = Object.assign({}, this.state.chartData);    
      newCharData.labels = labels
      newCharData.datasets[0].data = counts1
      newCharData.datasets[1].data = counts2

      this.setState({chartData: newCharData});
  })  
  }

 
  getElementAtEvent = element => {
    if (!element.length) return
    const { _index: index } = element[0]
    this.setState({
      clickedElement: `${this.state.chartData.labels[index]}`
    }, () => this.ViewMajProcL3(this.state.clickedElement, this.props.location.state.month_name, this.props.location.state.date_name));
  }

  ViewMajProcL3(date_name,month_name) {
    this.props.history.push({
      pathname: '/MajorProcL3',
      state: {date_name: date_name, month_name: month_name  }
    })  
  }

  render(){    
    const options = {
      title:{
        /*display:true,
        text:"Speciality wise No of OPD Visits for the Month=" ,
        textAlign: 'center',
        background: 'blue',
        fontColor: "red",
        fontSize: 18*/
      },
      /*legend: {
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
      <Card className="card" border="info"  style={{ marginLeft: '100px', marginRight: '100px' }}>
      <div className="App">
      <h2 style={{ color: 'white', textAlign: 'center', background: 'blue' }}>Date wise Major Procedures for the Month of <p style={{ color: 'yellow' }}> {this.props.location.state.month_name} </p> </h2>
         <Bar height ="100px"
          data={this.state.chartData}
          options= {Object.assign({}, options, BarChartLabelOptions)}
          getElementAtEvent={this.getElementAtEvent}
        />      
      </div>
      </Card>
    )
  }
}
