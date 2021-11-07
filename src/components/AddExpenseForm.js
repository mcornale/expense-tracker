import { useRef, useState } from 'react';
import style from './AddExpenseForm.module.css';
import Button from './UI/Button';
import ErrorMessage from './ErrorMessage';

const AddExpenseForm = (props) => {
  const date = {
    day: new Date().toLocaleString('en-US', { day: '2-digit' }),
    month: new Date().toLocaleString('en-US', { month: '2-digit' }),
    year: new Date().getFullYear(),
  };

  const [titleInputIsEmpty, setTitleInputIsEmpty] = useState(false);
  const [amountInputIsEmpty, setAmountInputIsEmpty] = useState(false);
  const [dateInputIsEmpty, setDateInputIsEmpty] = useState(false);

  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const onChangeTitleHandler = () => {
    setTitleInputIsEmpty(false);
  };
  const onChangeAmountHandler = () => {
    setAmountInputIsEmpty(false);
  };
  const onChangeDateHandler = () => {
    setDateInputIsEmpty(false);
  };

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

    if (title === '') setTitleInputIsEmpty(true);
    if (amount === '') setAmountInputIsEmpty(true);
    if (date === '') setDateInputIsEmpty(true);

    if (title === '' || amount === '' || date === '') return;

    props.onAddExpense({
      title,
      amount: Number(amount.replace(',', '.')),
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
            onChange={onChangeTitleHandler}
          />
          {titleInputIsEmpty && (
            <ErrorMessage>Title should not be empty</ErrorMessage>
          )}
        </div>
        <div>
          <label className={style['expense-form__label']}>Amount</label>
          <input
            className={style['expense-form__input']}
            type='number'
            min='0.01'
            step='0.01'
            ref={amountInputRef}
            onChange={onChangeAmountHandler}
          />
          {amountInputIsEmpty && (
            <ErrorMessage>Amount should not be empty</ErrorMessage>
          )}
        </div>
        <div>
          <label className={style['expense-form__label']}>Date</label>
          <input
            className={style['expense-form__input']}
            type='date'
            max={`${date.year}-${date.month}-${date.day}`}
            ref={dateInputRef}
            onChange={onChangeDateHandler}
          />
          {dateInputIsEmpty && (
            <ErrorMessage>Date should be a valid date</ErrorMessage>
          )}
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
