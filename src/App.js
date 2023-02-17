import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js.map';
import Employees from "./components/Employees";

function App() {
  return (
    <div className="App">
      <Header/>
      <Employees/>
      <Footer/>
    </div>
  );
}

export default App;
