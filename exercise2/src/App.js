import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date();
  const day =  date.getDay();
  const days = {1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",7:"Sunday"}
  return (
    <div className="App">
        It's {days[day]}!!!
    </div>
  );
}

export default App;
