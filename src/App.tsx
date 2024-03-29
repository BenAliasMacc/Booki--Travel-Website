import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { useAppDispatch } from './Hooks';
import { Destination } from './pages/Destination/Destination';
import { Home } from './pages/Home/Home';
import { callApi } from './redux/callApi/actionCallApi';

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(callApi())
  }, [])

  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='destination' element={<Destination />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
