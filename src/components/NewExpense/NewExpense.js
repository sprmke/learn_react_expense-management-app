import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const showExpenseFormHandler = (showExpenseForm) => {
    setShowExpenseForm(true);
  };

  const hideExpenseFormHandler = (showExpenseForm) => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && (
        <button type="button" onClick={showExpenseFormHandler}>
          Add New Expense
        </button>
      )}

      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideExpenseForm={hideExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
