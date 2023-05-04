
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginPage from './pages/AuthPage/LoginPage';
import RegistrationPage from './pages/AuthPage/RegistrationPage';
import ChatPage from './pages/ChatPage/ChatPage';
import ChatContextProvider from './context/chat';
import { useContext } from 'react';
import { AuthContext } from './context/auth';




function App() {
 const {user}= useContext(AuthContext)
  return (
    <div>
      <ChatContextProvider user={user}>
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<LoginPage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
        
        <Route path='/chat-page' element={ <ChatPage />}>
        
        {/* <Route path='chat-area' element={<Chatarea/>}/> */}
        </Route>
       
      </Routes>
      </BrowserRouter>
      </ChatContextProvider>
    </div>
  );
}

export default App;
