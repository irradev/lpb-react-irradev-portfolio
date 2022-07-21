import { MainLayout } from './layouts/MainLayout';
import { BrowserRouter } from 'react-router-dom';

function App() {
   return (
      <BrowserRouter>
         <MainLayout />
      </BrowserRouter>
   );
}

export default App;
