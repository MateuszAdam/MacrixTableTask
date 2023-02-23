import './App.css';
import UserContextProvider from './contexts/UserContext';
import UsersList from './components/UsersList/index';
import { ServerActionButtons } from './components/ServerActionButtons';
function App() {
  
 return (  
  <div className='App' >
    <UserContextProvider>
      <UsersList />
      <ServerActionButtons/>      
    </UserContextProvider>    
  </div>
 );
}

export default App;
