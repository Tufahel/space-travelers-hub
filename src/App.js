import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Missions from './components/MissionsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
