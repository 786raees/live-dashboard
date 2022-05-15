import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import LiveDashboardServices from '../services/LiveDashboardServices';
import 'chartjs-plugin-datalabels';
import { Card } from '@material-ui/core';

export default class Revenue_monthwiseL1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: '',
        datasets: [
            {
                label: 'ALOS Bed Occupancy%',            
                data: '',            
                fill: false,
                lineTension: 0.75,
                backgroundColor: "rgba(225,0,0,0.4)",
                borderColor: "#C71585", // The main line color
                borderCapStyle: 'square',
                borderDash: [], // try [5, 15] for instance
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "black",
                pointBackgroundColor: "white",
                pointBorderWidth: 1,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: "yellow",
                pointHoverBorderColor: "brown",
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
                spanGaps: true,
                }
        ]
      },
      clickedElement: '',
    }

    this.getElementAtEvent = this.getElementAtEvent.bind(this);
    this.RevenueL2 = this.RevenueL2.bind(this);
  }

  componentDidMount() {
    LiveDashboardServices.getAlosCountsL1().then((res) => {

        // for the table
      this.setState({
        queryOutput: res.data
    })

      var labels = [];
      // datekey=  res.data.forEach(sub_array => labels.push(sub_array[0]));
      res.data.forEach(sub_array => labels.push(sub_array[0]));
      //res.data.forEach(sub_array => labels.push(sub_array[0]));               
      var counts = [];
      res.data.forEach(sub_array => counts.push(sub_array[1]));

      const newCharData = Object.assign({}, this.state.chartData);
      newCharData.labels = labels
      newCharData.datasets[0].data = counts
      this.setState({ chartData: newCharData });

      


    })
  }

  getElementAtEvent = element => {
    if (!element.length) return
    const { _index: index } = element[0]
    this.setState({
      clickedElement: `${this.state.chartData.labels[index]}`
    }, () => this.RevenueL2(this.state.clickedElement, this.state.month_name));
  }


  RevenueL2(month_name) {
    this.props.history.push({
      pathname: '/RevenueL2',
      state: { month_name: month_name }
    })
  }



  render() {
    const options = {
      title: {
        /*display:true,
        text:"Speciality wise No of OPD Visits for the Month=" ,
        textAlign: 'center',
        background: 'blue',
        fontColor: "red",
        fontSize: 18*/
      },
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
            fontSize: 14,
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
          fontSize: 14,
          fontWeight: 'bold'
        },
      },
    };


    return (
        <Card style={{borderColor: 'red', }}>
        <div className="App">
          <h2 style={{ color: 'white', textAlign: 'center', background: 'blue' }}>Average Length of Stay --- Speciality wise % for the defined period</h2>
          <Line height="80px"
            data={this.state.chartData}
            options={Object.assign({}, options, BarChartLabelOptions)}
            getElementAtEvent={this.getElementAtEvent}
          />
        </div>
      </Card>

      //
         
    )
  }
}
