import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Add from './pages/Add';
import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Video from './pages/Video';

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/videos/:videoId' element={<Video/>} />
        <Route path='/videos/add' element={<Add/>} />
        <Route path='/videos/edit/:videoId' element={<Edit/>} />
      </Routes>
    </Router>
  )
}

export default App;