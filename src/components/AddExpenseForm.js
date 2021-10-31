import { useRef } from 'react';
import style from './AddExpenseForm.module.css';
import Button from './UI/Button';

const AddExpenseForm = (props) => {
  const date = {
    day: new Date().toLocaleString('en-US', { day: '2-digit' }),
    month: new Date().toLocaleString('en-US', { month: '2-digit' }),
    year: new Date().getFullYear(),
  };

  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const closeAddExpenseForm = () => {
    titleInputRef.current.value = '';
    amountInputRef.current.value = '';
    dateInputRef.current.value = '';

    props.onFormCloseHandler();
  };

  const onCancelHandler = (e) => {
    e.preventDefault();
    closeAddExpenseForm();
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const title = titleInputRef.current.value;
    const amount = amountInputRef.current.value;
    const date = dateInputRef.current.value;

    if (title === '' || amount === '' || date === '') return;

    props.onAddExpense({
      title,
      amount: Number(amount),
      date: new Date(date),
    });

    closeAddExpenseForm();
  };

  return (
    <form onSubmit={onSubmitHandler} className={style['expense-form']}>
      <div className={style['expense-form__controls']}>
        <div>
          <label className={style['expense-form__label']}>Title</label>
          <input
            className={style['expense-form__input']}
            type='text'
            ref={titleInputRef}
          />
        </div>
        <div>
          <label className={style['expense-form__label']}>Amount</label>
          <input
            className={style['expense-form__input']}
            type='number'
            min='0.01'
            step='0.01'
            ref={amountInputRef}
          />
        </div>
        <div>
          <label className={style['expense-form__label']}>Date</label>
          <input
            className={style['expense-form__input']}
            type='date'
            max={`${date.year}-${date.month}-${date.day}`}
            ref={dateInputRef}
          />
        </div>
      </div>
      <div className={style['expense-form__actions']}>
        <Button onClick={onCancelHandler} type='cancel'>
          Cancel
        </Button>
        <Button type='confirm'>Confirm</Button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
