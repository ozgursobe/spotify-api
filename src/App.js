import './App.css';

import { Navbar } from './components/Navbar';
import Main from './components/Main';
import ApiContextProvider from './contexts/ApiContext';

function App() {

  


 
  return (
    <div className='text-white'>
      <ApiContextProvider>
         <Navbar />
         <Main  /> 
      </ApiContextProvider>
     
    
    
     
     
      



    </div>
  );

}
export default App;
