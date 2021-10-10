import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css"; // Importing the CSS file (desirable to have the CSS file on the same level of its component's level)

// A component in ReactJs is just a Javascript function
// The convention is that the function name of the component is the same as the component name.
function ExpenseItem(props) {
  // props object holds the values that are passed to the custom component (which is a key/value pairs). The keys should be equivalent to the names passed from the using components

  // There must be one root element within a return statement (JSX snippet), hence the root <div>
  // Applying css in JSX, class attributed is called className (because class is a reserved word in Javascript)
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} /> {/* Passing the date prop to the ExpenseDate component */}
      <div classname="expense-item__description">
        <h2>{props.title}</h2> {/* In curly brackets we can evaluate basic Javascript expressions inside JSX code blocks */}
        <div classname="expense-item__price">${props.amount}</div>{/* The dollar sign is just to show the amount in USD */}
      </div>
    </div>
  );
}

export default ExpenseItem;
