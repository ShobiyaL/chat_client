
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ChatPage from './pages/ChatPage';
import socketIO from 'socket.io-client'
import ChatContextProvider from './context/chat';
import { useContext } from 'react';
import { AuthContext } from './context/auth';
// const socket = socketIO.connect('http://localhost:4000');

function App() {
 const {user}= useContext(AuthContext)
  return (
    <div>
      <ChatContextProvider user={user}>
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<LoginPage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
        <Route path='/chat-page' element={ <ChatPage />    } />
      </Routes>
      </BrowserRouter>
      </ChatContextProvider>
    </div>
  );
}

export default App;
