import style from './Header.module.css';
import AddExpenseForm from './AddExpenseForm';
import Button from './UI/Button';
import { useState } from 'react';

const Header = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const changeFormVisibilityHandler = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };

  return (
    <header className={style['header']}>
      <p className={style['header__logo']}>ExpenseTracker</p>
      <Button onClick={changeFormVisibilityHandler} type='add'>
        Add Expense
      </Button>
      {isFormVisible && (
        <AddExpenseForm
          onAddExpense={props.onAddExpense}
          onFormCloseHandler={changeFormVisibilityHandler}
        />
      )}
    </header>
  );
};

export default Header;
