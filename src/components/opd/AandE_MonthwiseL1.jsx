import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'chartjs-plugin-datalabels';
import { Card } from '@material-ui/core';
import LiveDashboardServices from '../services/LiveDashboardServices';


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: '',
        datasets: [
          {
            // you can have more than one array of data
            label: "No Of OPD Visits",
            data: '',
            backgroundColor: 'blue',
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
    this.ViewOPD2 = this.ViewOPD2.bind(this);
  }

  componentDidMount() {
    LiveDashboardServices.getmonthwiseEmergencyL1().then((res) => {
      var labels = [];
      // datekey=  res.data.forEach(sub_array => labels.push(sub_array[0]));
      res.data.forEach(sub_array => labels.push(sub_array[0]));
      //res.data.forEach(sub_array => labels.push(sub_array[0]));               
      var counts1 = [];
      var counts2 = [];
      res.data.forEach(sub_array => counts1.push(sub_array[1]));
      res.data.forEach(sub_array => counts2.push(sub_array[2]));

      const newCharData = Object.assign({}, this.state.chartData);
      newCharData.labels = labels
      newCharData.datasets[0].data = counts1
      newCharData.datasets[1].data = counts2
      this.setState({ chartData: newCharData });
    })
  }


  getElementAtEvent = element => {
    if (!element.length) return
    const { _index: index } = element[0]
    this.setState({
      clickedElement: `${this.state.chartData.labels[index]}`
    }, () => this.ViewOPD2(this.state.clickedElement, this.state.month_name));
  }


  ViewOPD2(month_name) {
    this.props.history.push({
      pathname: '/AEL2',
      state: { month_name: month_name }
    })
  }


  render() {
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
            beginAtZero: true
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
          backgroundColor: "#4B0082",
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
          <h2 style={{ color: 'white', textAlign: 'center', background: 'blue' }}>Month wise A & E Visits for the Specified Period</h2>
          <Bar height="120px"
            data={this.state.chartData}
            options={Object.assign({}, options, BarChartLabelOptions)}
            getElementAtEvent={this.getElementAtEvent}
          />
        </div>
      </Card>
    )
  }
}

export default Chart;