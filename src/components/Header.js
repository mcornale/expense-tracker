import AddExpense from './AddExpense';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style['header']}>
      <p className={style['header__logo']}>ExpenseTracker</p>
      <AddExpense />
    </header>
  );
};

export default Header;
