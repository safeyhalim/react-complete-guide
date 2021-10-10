import Expenses from "./components/Expenses";

// The root component that is inserted into the index HMTL in the index.js.
// Other components of the app will ultimately be nested within this component.
function App() {
  // JSX (Javascript XML) syntax that allows returning HTML from a Javascript function
  const expenses = [
    // Defining an array to pass its content to the custom Expenses component as props
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    // This div represents the desired state (declarative approach). Custom components (e.g. ExpenseItem) can be use just like HTML element within other components HTML
    // The convention is that they start with uppercase characters (Generally, the should follow the same naming convention as the components)
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} /> {/* Passing props to the custom component ExpenseItem declared in the array above */}
    </div>
  );
}

export default App; // Export the function App
