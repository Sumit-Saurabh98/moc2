import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Tracker() {
  const [type, setType] = useState('Income');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      type,
      category,
      amount,
      date,
    };

    console.log(data); 
  };

  const incomeCategories = ['Salary', 'Gifts', 'Refunds', 'Other'];
  const expenseCategories = [
    'Food & Drinks',
    'Shopping',
    'Housing',
    'Bills',
    'Vehicle & Transport',
    'Lifestyle',
  ];

  return (
    <div>
      <h2>Tracker</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Type:
            <select value={type} onChange={handleTypeChange}>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Category:
            <select value={category} onChange={handleCategoryChange}>
              {type === 'Income' &&
                incomeCategories.map((incomeCategory) => (
                  <option key={incomeCategory} value={incomeCategory}>
                    {incomeCategory}
                  </option>
                ))}
              {type === 'Expense' &&
                expenseCategories.map((expenseCategory) => (
                  <option key={expenseCategory} value={expenseCategory}>
                    {expenseCategory}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Amount in Rupees:
            <input type="number" value={amount} onChange={handleAmountChange} />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input type="date" value={date} onChange={handleDateChange} />
          </label>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default Tracker;
