import style from './Chart.module.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  return (
    <div className={style['chart']}>
      {props.chartData.map((data) => (
        <ChartBar label={data.label.slice(0, 3)} value={data.value} />
      ))}
    </div>
  );
};

export default Chart;
