
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<LoginPage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
