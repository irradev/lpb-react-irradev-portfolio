import { AppRouter } from './router/AppRouter';
import { HashRouter } from 'react-router';

function App() {
   return (
      <HashRouter>
         <AppRouter />
      </HashRouter>
   );
}

export default App;
