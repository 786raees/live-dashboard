import React, { Component } from "react";
import { Card } from "@mui/material";
import { Line } from "react-chartjs-2";
import LiveDashboardServices from './services/LiveDashboardServices';

export default class Dashboard_OPD_datewiseCountsL1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: "",
        datasets: [
          {
            label: "No Of OPD Visits",
            data: "",
            fill: false,
            lineTension: 0.75,
            backgroundColor: "rgba(225,0,0,0.4)",
            borderColor: "red", // The main line color
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
            label: "PMC Requirement",
            fill: false,
            lineTension: 0.75,
            backgroundColor: "red",
            borderColor: "black",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "black",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "brown",
            pointHoverBorderColor: "yellow",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: " ",
            spanGaps: false,
          },
        ],
      },
    };
  }

    componentDidMount() {
      LiveDashboardServices.getLast30DaysOPDCountsL1().then((res) => {
        var labels = [];
        // datekey=  res.data.forEach(sub_array => labels.push(sub_array[0]));
        res.data.forEach(sub_array => labels.push(sub_array[0].substr(0, 2)));
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

  render() {
    const options = {
      /*legend: {
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
      <Card>
        <div className="text-center rounded-t-xl bg-red-500 text-white p-3 border-b-4 border-red-800">
          <h4 className="text-3xl">
            Date wis (excluding Sunday) OPD Visits for the Last 30 Days
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
    );
  }
}
