import { useState } from 'react';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const currentYear = new Date().getFullYear();

  const [selectedYear, setSelectedYear] = useState(currentYear);

  const selectNextYearHandler = () => {
    setSelectedYear((year) => year + 1);
  };

  const selectPrevYearHandler = () => {
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
      />
      <ExpensesChart items={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </>
  );
};

export default Expenses;
