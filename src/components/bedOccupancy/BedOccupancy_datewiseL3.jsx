import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import LiveDashboardServices from '../services/LiveDashboardServices';
import 'chartjs-plugin-datalabels';
import { Card } from '@material-ui/core';


export default class OPD_datewiseCountsL2 extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {        
        labels: '',
        datasets: [
          {
            // you can have more than one array of data
            label: "Bed Occupancy %",            
            data: '',            
            backgroundColor: [
              '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
              '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
              '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
              '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
              '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
              '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399'
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

   
  }

  componentDidMount(){
    LiveDashboardServices.getdatewisebedOccupancyL3(this.props.location.state.date_name,this.props.location.state.month_name).then((res) => {      
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


  render(){    
    const options = {
     /* title: {
        display: true,
        text: 'Selected Date is : ' + this.props.location.state.date_name,
        fontColor: "red",
        fontSize: 14
    },*/
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
      <h2 style={{ color: 'white', textAlign: 'center', background: 'blue' }}>Speciality wise Bed Occupancy % for the selected date <p style={{ color: 'yellow' }}> {this.props.location.state.date_name+"-"+ this.props.location.state.month_name}</p></h2>

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