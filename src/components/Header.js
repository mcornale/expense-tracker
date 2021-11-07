import style from './Header.module.css';
import AddExpenseForm from './AddExpenseForm';
import Button from './UI/Button';
import logoSrc from '../assets/images/logo.svg';
import { useState } from 'react';

const Header = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const changeFormVisibilityHandler = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };

  return (
    <header className={style['header']}>
      <div className={style['header__logo']}>
        <img src={logoSrc} alt='logo' />
        <p>ExpenseTracker</p>
      </div>
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
