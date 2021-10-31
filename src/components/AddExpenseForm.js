import style from './AddExpenseForm.module.css';
import Button from './UI/Button';

const AddExpenseForm = () => {
  return (
    <form className={style['expense-form']}>
      <div className={style['expense-form__controls']}>
        <div>
          <label className={style['expense-form__label']}>Title</label>
          <input className={style['expense-form__input']} type='text' />
        </div>
        <div>
          <label className={style['expense-form__label']}>Amount</label>
          <input
            className={style['expense-form__input']}
            type='number'
            min='0.01'
            step='0.01'
          />
        </div>
        <div>
          <label className={style['expense-form__label']}>Date</label>
          <input
            className={style['expense-form__input']}
            type='date'
            min='2019-01-01'
            step='2022-12-31'
          />
        </div>
      </div>
      <div className={style['expense-form__actions']}>
        <Button type='cancel'>Cancel</Button>
        <Button type='confirm'>Confirm</Button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
