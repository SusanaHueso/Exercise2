import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  const date = new Date();
  let day =  date.getDay();
  const days = {1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",7:"Sunday"}
  let today = " It's " + days[day] + "!!!!!";
  return (
    <div className="App">
      <Header/>
        <Home day={today}/>
        <Footer/>
    </div>
  );
}

export default App;
