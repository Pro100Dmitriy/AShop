import { Routes, Route, useLocation } from 'react-router-dom'

import MainPage from './main/MainPage';


function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Routes location={ location } key={ location.pathname }>
        <Route path="/" element={ <MainPage/> } />
      </Routes>
    </div>
  );
}

export default App
