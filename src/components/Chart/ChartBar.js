import style from './ChartBar.module.css';

const ChartBar = (props) => {
  return (
    <div className={style['chart-bar']}>
      <div className={style['chart-bar__bar']}>
        <div
          style={{
            height: `${props.value}%`,
          }}
        ></div>
      </div>
      <p className={style['chart-bar__label']}>{props.label}</p>
    </div>
  );
};

export default ChartBar;
