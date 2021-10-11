import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Helmet} from 'react-helmet'
import Navb from './components/navbar'
import Main from './components/main'

function App() {
  return (
    <div>
      <helmet>
        <style>{'body{background-color:#101010;}'}</style>
      </helmet>
      <Navb/>
      <Main/>
    </div>
  );
}

export default App;
