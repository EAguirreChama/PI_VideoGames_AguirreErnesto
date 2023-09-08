import './App.css';
import { Route, useLocation , Routes } from 'react-router-dom';
import { Detalle, Formulario, Home, Landing } from './views/index';
import NavBar from './Componentes/NavBar/NavBar';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}

      <Routes>
      <Route exact path="/"                       element={<Landing/>}   />
      <Route exact path="/home"                   element={<Home/>}      />
      <Route exact path="/createVideoGame"        element={<Formulario/>}/>
      <Route exact path="/detailVideoGame/:id"    element={<Detalle/>}   />

      <Route path='*' element={<Landing/>}/>
      </Routes>
    </div>
  );
};
export default App;
