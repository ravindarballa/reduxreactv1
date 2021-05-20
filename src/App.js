import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/Store';

function App() {
  return (
    <div className="App">
    

  <Provider store={store}> 
    <BrowserRouter> 
    <Shop></Shop>
    </BrowserRouter>
    </Provider>
   

    </div>
  );
}

export default App;
