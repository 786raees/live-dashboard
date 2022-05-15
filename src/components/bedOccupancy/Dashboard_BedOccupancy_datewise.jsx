import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
// import LiveDashboardServices from '../services/LiveDashboardServices';
import { Card } from "@mui/material";

export default class Dashboard_Bed_Occupation_datewiseCountsL1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: "",
        datasets: [
          {
            label: "Bed Occupancy%",
            data: "",
            fill: false,
            lineTension: 0.75,
            backgroundColor: "rgba(225,0,0,0.4)",
            borderColor: "#C71585", // The main line color
            borderCapStyle: "square",
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
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
          },
          {
            label: "PMC Req.% for Bed Occupancy",
            fill: false,
            lineTension: 0.75,
            backgroundColor: "black",
            borderColor: "black",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "red",
            pointBackgroundColor: "blue",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "brown",
            pointHoverBorderColor: "yellow",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: false
            data: "50 ",
            spanGaps: false,
          },
        ],
      },
    };
  }

  //   componentDidMount(){
  //     LiveDashboardServices.getLast30DaysbedOccupancyL1().then((res) => {
  //       var labels = [];
  //      // datekey=  res.data.forEach(sub_array => labels.push(sub_array[0]));
  //       res.data.forEach(sub_array => labels.push(sub_array[0].substr(0,2)));
  //       //res.data.forEach(sub_array => labels.push(sub_array[0]));
  //       var counts1 = [];
  //       var counts2 = [];
  //       res.data.forEach(sub_array => counts1.push(sub_array[1]));
  //       res.data.forEach(sub_array => counts2.push(sub_array[2]));

  //       const newCharData = Object.assign({}, this.state.chartData);
  //       newCharData.labels = labels
  //       newCharData.datasets[0].data = counts1
  //       newCharData.datasets[1].data = counts2
  //       this.setState({chartData: newCharData});
  //   })
  //   }

  render() {
    const options = {
      /* legend: {
        display: this.props.displayLegend,
        position: this.props.legendPosition,
      },*/
      scales: {
        xAxes: {
          display: true,
          ticks: {
            fontColor: "blue",
            fontSize: 14,
            fontWeight: "bold",
          },
        },
        yAxes: {
          type: "linear",
          display: true,
          ticks: {
            fontColor: "black",
            fontSize: 12,
            fontWeight: "bold",
          },
        },
      },
    };

    // Line Chart Properties
    const LineChartLabelOptions = {
      plugins: {
        datalabels: {
          display: false,
          color: "white",
          backgroundColor: "#4B0082",
          anchor: "end",
          align: "bottom",
          fontSize: 12,
        },
      },
    };

    return (
      <div>
        <Card style={{ borderColor: "red" }}>
          <div className="text-center rounded-t-xl bg-indigo-700 text-white p-3 border-b-4 border-indigo-900">
            <h4 className="text-3xl">
              Date wise Bed Occupancy for the Last 30 Days
            </h4>
          </div>

          <div>
            <Line
              height="125px"
              data={this.state.chartData}
              options={Object.assign({}, options, LineChartLabelOptions)}
            />
          </div>
        </Card>
      </div>
    );
  }
}
