import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom"

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const EditExpense = (props) => {
  const [expenseYear, setExpenseYear] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDay, setExpenseDay] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("null");
  const [expenseName, setExpenseName] = useState("");
  const [expenseMonth, setExpenseMonth] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleExpenseYear = (e) => {
    setExpenseYear(e.target.value);
  };

  const handleExpenseAmount = (e) => {
    setExpenseAmount(e.target.value);
    console.log(expenseAmount);
  };

  const handleExpenseDay = (e) => {
    setExpenseDay(e.target.value);
  };
  const handleExpenseCategory = (e) => {
    setExpenseCategory(e.target.value);
  };
  const handleExpenseName = (e) => {
    setExpenseName(e.target.value);
  };
  const handleExpenseMonth = (e) => {
    setExpenseMonth(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      year: expenseYear,
      amount: expenseAmount,
      day: expenseDay,
      category: expenseCategory,
      name: expenseName,
      month: expenseMonth,
    };
    // console.log(data)
    axios
      .put(`${REACT_APP_SERVER_URL}/api/expenses/${props.match.params.id}`, {
        data,
      })
      .then((res) => {
        console.log(res.data);
        setRedirect(true);
      });
  };

  // logic for dropdowns here
  const categories = {
    Home: ["Mortgage/Rent", "Utilities", "Phone", "Internet", "Insurance"],
    Daily: [
      "Groceries",
      "Child Care",
      "Dry Cleaning",
      "House Cleaning",
      "Pet Care",
    ],
    Transportation: [
      "Gas",
      "Car Insurance",
      "Repairs",
      "Car Wash",
      "Parking",
      "Public Transporation",
      "Taxi/Uber",
    ],
    Entertainment: ["Television", "Movies", "Concerts", "Misc"],
  };

  const categoryKeys = Object.keys(categories);
  // categories accessed at whatever key
  //map keys into option tags
  //pop value and UI

  const createCats = categoryKeys.map(function (category) {
    return <option value={category}>{category}</option>;
  });

  const namesList = categories[expenseCategory];

  const createNames = namesList?.map(function (name) {
    return <option value={name}>{name}</option>;
  });

    
    if (redirect) {
        return ( 
            <Redirect to="/profile" />
        )
    } 

  return (
    <div>
      <div>
        <h1 class="expenseTitle">Edit Expense</h1>
      </div>
      <form class="expenseEditForm">
        <label id="expenseQuestion" htmlFor="expenseCategory">Choose Category</label>{" "}
        <select
          name="expenseCategoryDropdown"
          className="expenseCategoryDropdown"
          id="expenseCategoryDropdown"
          id="expenseAnswer"
          form="categoryForm"
          onChange={handleExpenseCategory}
        >
          {createCats}
        </select>
        <br></br>
        <label id="expenseQuestion" htmlFor="expenseName">Choose Name</label>{" "}
        <select
          name="expenseName"
          id="expenseName"
          id="expenseAnswer"
          form="nameForm"
          onChange={handleExpenseName}
        >
          {createNames}
          {/* <option value="placeholder">Rent/Mortgage</option>
          <option value={expenseName}>Groceries</option>
          <option value={expenseName}>Gas</option>
          <option value={expenseName}>Cable/Internet</option> */}
        </select>
        <br></br>
        <label id="expenseQuestion" htmlFor="expenseDay">What Day?</label>{" "}
        <input
          type="number"
          id="expenseAnswer"
          name="expenseDay"
          value={expenseDay}
          onChange={handleExpenseDay}
          maxLength="2"
          minLength="2"
          max="31"
          min="01"
        ></input>
        <br></br>
        <label id="expenseQuestion" htmlFor="expenseMonth">What Month?</label>{" "}
        <select
          name="expenseMonth"
          id="expenseEntry"
          id="expenseAnswer"
          form="monthForm"
          onChange={handleExpenseMonth}
        >
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <br></br>
        <label id="expenseQuestion" htmlFor="expenseYear">What Year?</label>{" "}
        <input
          type="number"
          id="expenseAnswer"
          name="expenseYear"
          value={expenseYear}
          onChange={handleExpenseYear}
        ></input>
        <br></br>
        <label id="expenseQuestion" htmlFor="expenseAmount">How much did you spend?</label>{" "}
        <input
          type="number"
          name="expenseAmount"
          value={expenseAmount}
          onChange={handleExpenseAmount}
        ></input>
        <br></br>
        <button id="saveExpense" type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditExpense;