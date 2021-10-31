import style from './Header.module.css';
import AddExpenseForm from './AddExpenseForm';
import { useState } from 'react';
import Button from './UI/Button';

const Header = () => {
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
      {isFormVisible && <AddExpenseForm />}
    </header>
  );
};

export default Header;
