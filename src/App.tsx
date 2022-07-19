import { MainLayout } from './layouts/MainLayout';
import { BrowserRouter } from 'react-router-dom';

import './styles/app.css';

function App() {
   return (
      <BrowserRouter>
         <MainLayout />
      </BrowserRouter>
   );
}

export default App;
