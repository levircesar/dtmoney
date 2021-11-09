
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useTransactions } from "../../hooks/useTransactions";
type SeriesData = {
  name: string;
  data: number[];
};

type ChartData = {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
};

const BarChat = () => {
  const { transactions } = useTransactions();
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: "",
        data: [],
      },
    ],
  });
const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0
    }
  );

  useEffect(() => {
    const myLabels = ['Entradas', 'Saidas'];
    // const mySeries = transactions.map((x) => x.amount);
    const mySeries = [summary.deposits, summary.withdraws];
      setChartData({
        labels: {
          categories: myLabels,
        },
        series: [
          {
            name: 'valor',
            data: mySeries,
          },
        ],
      });
  }, [summary.deposits, summary.withdraws, transactions]);
  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };
 
  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
};

export default BarChat;
