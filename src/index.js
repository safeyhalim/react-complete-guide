// This is the first file to be executed by ReactJs
import ReactDOM from 'react-dom'; // ReactJs is split across two different packages (see in the package.json file): react, and react-dom. ReactJS functionalities are split between those two libraries

import './index.css'; // Normally, you can't import css in javascript, but this is something ReactJs enables it for us
import App from './App'; // App.js file (we omit the .js extension). App is a component

// In a ReactJs project, we write *only* Javascript. ReactJs transforms the code to a format that can be rendered in the browser.
ReactDOM.render(<App />, document.getElementById('root')); // Render the App component (The exported function from App.js) inside the <div> with Id root (the only div in the index.html file)
