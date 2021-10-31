import { useState } from 'react';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const currentYear = new Date().getFullYear();

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [nextYearAvailable, setNextYearAvailable] = useState(false);

  const selectNextYearHandler = (e) => {
    e.preventDefault();
    setSelectedYear((year) => {
      if (year + 1 === currentYear) setNextYearAvailable(false);
      return year + 1;
    });
  };

  const selectPrevYearHandler = (e) => {
    e.preventDefault();
    setNextYearAvailable(true);
    setSelectedYear((year) => year - 1);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === selectedYear
  );

  return (
    <>
      <ExpensesFilter
        onSelectNextYear={selectNextYearHandler}
        onSelectPrevYear={selectPrevYearHandler}
        selectedYear={selectedYear}
        nextYearAvailable={nextYearAvailable}
      />
      <ExpensesChart items={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </>
  );
};

export default Expenses;
