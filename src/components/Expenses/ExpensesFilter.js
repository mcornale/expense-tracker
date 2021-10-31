import Button from '../UI/Button';
import leftArrow from '../../images/arrow-left.svg';
import rightArrow from '../../images/arrow-right.svg';
import style from './ExpensesFilter.module.css';

const ExpensesFilter = (props) => {
  return (
    <div className={style['expenses-filter']}>
      <Button onClick={props.onSelectPrevYear}>
        <img src={leftArrow} alt='left arrow' />
      </Button>
      <p>{props.selectedYear}</p>
      <Button onClick={props.onSelectNextYear}>
        <img src={rightArrow} alt='right arrow' />
      </Button>
    </div>
  );
};

export default ExpensesFilter;
