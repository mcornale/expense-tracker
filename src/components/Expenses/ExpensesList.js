import ExpenseItem from './ExpenseItem';
import style from './ExpensesList.module.css';

const ExpensesList = (props) => {
  return (
    <>
      <div className={style['expenses']}>
        {props.items.map((item) => (
          <ExpenseItem
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </div>
      {props.items.length === 0 && (
        <p className={style['info']}>No expenses found!</p>
      )}
    </>
  );
};

export default ExpensesList;
