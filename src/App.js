import logo from './logo.svg';
import './App.css';
import PageOne from './components/PageOne';
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import { Router } from '@reach/router';
import PageFour from './components/PageFour';


function App() {
  return (
    <div className="App">

      <Router>
        <PageOne  path="/home" test="hadeel"></PageOne>
        <PageTwo path="/:id" ></PageTwo>
        <PageFour path="hello/:color1/:color2"></PageFour>
      </Router>
    </div>
  );
}

export default App;
