import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useTransactions } from "../../hooks/useTransactions";
type ChartData = {
  labels: string[];
  series: number[];
};

const DonutChart = () => {
  const { transactions } = useTransactions();
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    series: [],
  });

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  useEffect(() => {
    const myLabels = ['Entradas', 'Saidas'];
    // const mySeries = transactions.map((x) => x.amount);
    const mySeries = [summary.deposits, summary.withdraws];
    setChartData({ labels: myLabels, series: mySeries });
  }, [summary.deposits, summary.withdraws, transactions]);

  const options = {
    legend: {
      show: true,
    },
    colors:['#33cc95', '#e52e40']
  };

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
};

export default DonutChart;
