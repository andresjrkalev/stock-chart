import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';
import { IAppProps } from "../../interface/props/app";
import { CHART_CANDLESTICK } from "../../common/constants";

class App extends Component<IAppProps> {
  componentDidMount(): void {
    this.props.getStocks();
  }

  render(): React.ReactElement {
    const { props: { stocks }} = this;
    if (!stocks.length) return <div>Loading...</div>;
    return <ReactApexChart
        options={
          {
            chart: {
              type: CHART_CANDLESTICK,
              height: 350
            }
          }
        }
        series={
          [
            {
              data: [
                stocks.map(stock => ({
                  x: new Date(stock.timestamp),
                  y: [stock.price]
                }))
              ]
            }
          ]
        }
        type={CHART_CANDLESTICK}
        width={500}
        height={350}
    />;
  }
}

export default App;
