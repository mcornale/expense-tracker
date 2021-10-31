import style from './ExpenseItem.module.css';

const ExpenseItem = (props) => {
  const date = {
    day: props.date.toLocaleString('en-US', { day: '2-digit' }),
    month: props.date.toLocaleString('en-US', { month: '2-digit' }),
    year: props.date.getFullYear(),
  };

  const formattedDate = `${date.day}/${date.month}/${date.year}`;

  return (
    <div className={style['expense-item']}>
      <div className={style['expense-item__date']}>{formattedDate}</div>
      <div className={style['expense-item__description']}>
        <p className={style['expense-item__title']}>{props.title}</p>
        <p className={style['expense-item__price']}>€{props.amount}</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
