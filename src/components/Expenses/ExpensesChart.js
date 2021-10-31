import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const totalExpenseAmount = props.items.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const chartData = [
    { label: 'January', value: 0 },
    { label: 'February', value: 0 },
    { label: 'March', value: 0 },
    { label: 'April', value: 0 },
    { label: 'May', value: 0 },
    { label: 'June', value: 0 },
    { label: 'July', value: 0 },
    { label: 'August', value: 0 },
    { label: 'September', value: 0 },
    { label: 'October', value: 0 },
    { label: 'November', value: 0 },
    { label: 'December', value: 0 },
  ];

  props.items.forEach((item) => {
    chartData[item.date.getMonth()].value += Math.round(
      (item.amount / totalExpenseAmount) * 100
    );
  });

  return <Chart chartData={chartData} />;
};

export default ExpensesChart;
