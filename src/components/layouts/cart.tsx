import React, { Component } from "react";
import Chart from "react-apexcharts";

class CartPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41],
      labels: ["Aris", "Reza", "Riyan"],
    };
  }

  render() {
    return (
      <div className="w-sm-max flex justify-center">
        <div className="donut">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="pie"
            width="380"
          />
        </div>
      </div>
    );
  }
}

export default CartPage;
